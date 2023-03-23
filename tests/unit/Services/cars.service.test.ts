import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import CarMock from './Mocks/CarMock';

describe('Criar rota /cars', function () {
  const carMock = new CarMock();
  it('É possivel cadastrar um carro', async function () {
    sinon.stub(Model, 'create').resolves(carMock.InputOutReques);
    const service = new CarService();
    const result = await service.createCar(carMock.resgisterInRequest);
    expect(result).to.be.deep.equal(carMock.InputOutReques);
  });
  it('É possivel cadastrar um carro sem passar o status', async function () {
    sinon.stub(Model, 'create').resolves(carMock.InputOutRequesStatusFalse);
    const service = new CarService();
    const result = await service.createCar(carMock.resgisterInRequestNotStatus);
    expect(result).to.be.deep.equal(carMock.InputOutRequesStatusFalse);
  });
  it('Mostrar todos carros', async function () {
    sinon.stub(Model, 'find').resolves(carMock.ArrayCar);
    const service = new CarService();
    const result = await service.getCars();
    expect(result).to.be.deep.equal(carMock.ArrayCar);
  });
  it('Mostrar somente um carro', async function () {
    sinon.stub(Model, 'findOne').resolves(carMock.ArrayCar[0]);
    const service = new CarService();
    const result = await service.getCar('6348513f34c397abcad040b2');
    expect(result).to.be.deep.equal(carMock.ArrayCar[0]);
  });
  it('Error car no found', async function () {
    sinon.stub(Model, 'findOne').resolves();
    const service = new CarService();
    try {
      await service.getCar('6348513f34c397abcad060b8');
    } catch (error) {
      expect((error as Error).message).to.be.eq('Car not found');
    }
  });
  it('Retornar null ao passar id no formato errado', async function () {
    sinon.stub(Model, 'findOne').resolves();
    const service = new CarService();
    const result = await service.getCar('6348513f34c397abXXXXX  ');
    expect(result).to.be.deep.equal(null);
  });

  it('id para modificacao estiver nao existir', async function () {
    sinon.stub(Model, 'findOneAndUpdate').resolves();
    const service = new CarService();
    try {
      await service.updatedCar('6348513f34c397abcad060b8', carMock.uptadedCar);
    } catch (error) {
      expect((error as Error).message).to.be.eq('Car not found');
    }
  });
  it('Retornar null ao tentar modificar carro passando id no formato errado', async function () {
    sinon.stub(Model, 'findOneAndUpdate').resolves();
    const service = new CarService();
    const result = await service.updatedCar(
      '6348513f34c397abXXXXX',
      carMock.uptadedCar,
    );
    expect(result).to.be.deep.equal(null);
  });
  it('Possivel modificar carro', async function () {
    sinon.stub(Model, 'findOneAndUpdate').resolves(carMock.uptadedCarComId);
    const service = new CarService();
    const result = await service.updatedCar(
      '641cb1b462e50315627c2050',
      carMock.uptadedCarComId,
    );
    expect(result).to.be.deep.equal(carMock.uptadedCarComId);
  });
  afterEach(function () {
    sinon.restore();
  });
});
