import Motorcycle from '../../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';

export default class CarMock {
  public resgisterInRequest: IMotorcycle = {
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.0,
    category: 'Street',
    engineCapacity: 600,
  };
  public resgisterInRequestNotStatus: IMotorcycle = {
    model: 'Marea',
    year: 2002,
    color: 'Black',
    buyValue: 15.99,
    category: 'Street',
    engineCapacity: 600,
  };

  public InputOutReques: Motorcycle = new Motorcycle({
    id: '6348513f34c397abcad040b2',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    category: 'Street',
    engineCapacity: 600,
  });

  public UpdateInputOutReques: Motorcycle = new Motorcycle({
    id: '6348513f34c397abcad040b2',
    model: 'Gol',
    year: 2002,
    color: 'Blue',
    status: true,
    buyValue: 156.99,
    category: 'Street',
    engineCapacity: 600,
  });

  public InputOutRequesStatusFalse: Motorcycle = new Motorcycle({
    id: '6348513f34c397abcad040b2',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    category: 'Street',
    engineCapacity: 600,
  });

  //   private newCar1: Car = new Car({
  //     id: '6348513f34c397abcad040b2',
  //     model: 'Marea',
  //     year: 2002,
  //     color: 'Black',
  //     status: true,
  //     buyValue: 15.99,
  //     doorsQty: 4,
  //     seatsQty: 5,
  //   });

  //   private newCar2: Car = new Car({
  //     id: '6348513f14c397abcad060b2',
  //     model: 'Gol',
  //     year: 2002,
  //     color: 'Black',
  //     status: true,
  //     buyValue: 15.99,
  //     doorsQty: 4,
  //     seatsQty: 5,
  //   });
  //   public ArrayCar: Car[] = [this.newCar1, this.newCar2];
}
