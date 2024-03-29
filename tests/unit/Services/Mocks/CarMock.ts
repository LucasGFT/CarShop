import Car from '../../../../src/Domains/Car';
import ICar from '../../../../src/Interfaces/ICar';

export default class CarMock {
  public resgisterInRequest: ICar = {
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  };

  public resgisterInRequestNotStatus: ICar = {
    model: 'Marea',
    year: 2002,
    color: 'Black',
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  };

  public InputOutReques: Car = new Car({
    id: '6348513f34c397abcad040b2',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  });

  public UpdateInputOutReques: Car = new Car({
    id: '6348513f34c397abcad040b2',
    model: 'Gol',
    year: 2002,
    color: 'Blue',
    status: true,
    buyValue: 156.99,
    doorsQty: 4,
    seatsQty: 5,
  });

  public InputOutRequesStatusFalse: Car = new Car({
    id: '6348513f34c397abcad040b2',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  });

  private newCar1: Car = new Car({
    id: '6348513f34c397abcad040b2',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  });

  private newCar2: Car = new Car({
    id: '6348513f14c397abcad060b2',
    model: 'Gol',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  });
  public ArrayCar: Car[] = [this.newCar1, this.newCar2];

  public uptadedCar: ICar = {
    model: 'Corrola',
    year: 2023,
    color: 'Black',
    status: true,
    buyValue: 89000.99,
    doorsQty: 4,
    seatsQty: 5,
  };

  public uptadedCarComId1: ICar = {
    id: '641cb1b462e50315627c2050',
    model: 'Corrola',
    year: 2023,
    color: 'Black',
    status: true,
    buyValue: 89000.99,
    doorsQty: 4,
    seatsQty: 5,
  };

  public uptadedCarComId: ICar = {
    id: '641cb1b462e50315627c2050',
    model: 'Civic',
    year: 2023,
    color: 'Black',
    status: true,
    buyValue: 89000.99,
    doorsQty: 4,
    seatsQty: 5,
  };
}
