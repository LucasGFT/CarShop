import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import MotorcycleMock from './Mocks/MotorcycleMock';

describe('Criar rota /motorcycles', function () {
  const motorcycleMock = new MotorcycleMock();
  const notFound = 'Motorcycle not found';
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
      expect((error as Error).message).to.be.eq(notFound);
    }
  });

  it('Error id em formato errado', async function () {
    sinon.stub(Model, 'findOne').resolves();
    const service = new MotorcycleService();
    const result = await service.getMotorcycle('6348513f34c397abcad06XXXXX');
    expect(result).to.be.deep.equal(null);
  });

  it('id para modificar nao existir', async function () {
    sinon.stub(Model, 'findOneAndUpdate').resolves();
    const service = new MotorcycleService();
    try {
      await service.updateMotorcycle(
        '6348513f34c397abcad060b8',
        motorcycleMock.updatedMotorcycle,
      );
    } catch (error) {
      expect((error as Error).message).to.be.eq(notFound);
    }
  });
  it('Retornar null ao tentar modificar moto passando id no formato errado', async function () {
    sinon.stub(Model, 'findOneAndUpdate').resolves();
    const service = new MotorcycleService();
    const result = await service.updateMotorcycle(
      '6348513f34c397abXXXXX',

      motorcycleMock.updatedMotorcycle,
    );
    expect(result).to.be.deep.equal(null);
  });
  it('Possivel modificar moto', async function () {
    sinon
      .stub(Model, 'findOneAndUpdate')
      .resolves(motorcycleMock.updatedMotorcycleComId);
    const service = new MotorcycleService();
    const result = await service.updateMotorcycle(
      '641cb1b462e50315627c2050',

      motorcycleMock.updatedMotorcycleComId,
    );
    expect(result).to.be.deep.equal(motorcycleMock.updatedMotorcycleComId);
  });

  it('Possivel excluir moto', async function () {
    sinon.stub(Model, 'findByIdAndRemove').resolves(motorcycleMock.ArrayMotorcycles);
    const service = new MotorcycleService();
    const result = await service.deletedMotorcycles('6348513f14c397abcad060b2');
    // o return undefined que dizer que passou pela validacao de id, e deletou com sucesso
    expect(result).to.be.deep.equal(undefined);
  });

  it('id para exclusão nao existir', async function () {
    sinon.stub(Model, 'findByIdAndRemove').resolves();
    const service = new MotorcycleService();
    try {
      await service.deletedMotorcycles('6348513f14c397abcad060b2');
    } catch (error) {
      expect((error as Error).message).to.be.eq(notFound);
    }
  });

  it('Retornar null ao tentar excluir moto passando id no formato errado', async function () {
    sinon.stub(Model, 'findByIdAndRemove').resolves();
    const service = new MotorcycleService();
    const result = await service.deletedMotorcycles('6348513f34c397abXXXXX');
    expect(result).to.be.deep.equal(null);
  });

  afterEach(function () {
    sinon.restore();
  });
});
