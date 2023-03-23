import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import MotorcycleMock from './Mocks/MotorcycleMock';

describe('Criar rota /motorcycles', function () {
  const motorcycleMock = new MotorcycleMock();
  it('É possivel cadastrar uma moto', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleMock.InputOutReques);
    const service = new MotorcycleService();
    const result = await service.createMotorcycle(
      motorcycleMock.resgisterInRequest,
    );
    expect(result).to.be.deep.equal(motorcycleMock.InputOutReques);
  });
  it('É possivel cadastrar uma moto sem passar o status', async function () {
    sinon
      .stub(Model, 'create')
      .resolves(motorcycleMock.InputOutRequesStatusFalse);
    const service = new MotorcycleService();
    const result = await service.createMotorcycle(
      motorcycleMock.resgisterInRequestNotStatus,
    );
    expect(result).to.be.deep.equal(motorcycleMock.InputOutRequesStatusFalse);
  });
  it('Mostrar todas motos', async function () {
    sinon.stub(Model, 'find').resolves(motorcycleMock.ArrayMotorcycles);
    const service = new MotorcycleService();
    const result = await service.getMotorcycles();
    expect(result).to.be.deep.equal(motorcycleMock.ArrayMotorcycles);
  });
  it('Mostrar somente uma moto', async function () {
    sinon.stub(Model, 'findOne').resolves(motorcycleMock.ArrayMotorcycles[0]);
    const service = new MotorcycleService();
    const result = await service.getMotorcycle('6348513f34c397abcad040b2');
    expect(result).to.be.deep.equal(motorcycleMock.ArrayMotorcycles[0]);
  });

  it('Error Motorcycle not found', async function () {
    sinon.stub(Model, 'findOne').resolves();
    const service = new MotorcycleService();
    try {
      await service.getMotorcycle('6348513f34c397abcad060b8');
    } catch (error) {
      expect((error as Error).message).to.be.eq('Motorcycle not found');
    }
  });

  it('Error id em formato errado', async function () {
    sinon.stub(Model, 'findOne').resolves();
    const service = new MotorcycleService();
    const result = await service.getMotorcycle('6348513f34c397abcad06XXXXX');
    expect(result).to.be.deep.equal(null);
  });

  afterEach(function () {
    sinon.restore();
  });
});
