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

  afterEach(function () {
    sinon.restore();
  });
});
