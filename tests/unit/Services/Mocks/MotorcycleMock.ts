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

  private newMoto1: Motorcycle = new Motorcycle({
    id: '6348513f34c397abcad040b2',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    category: 'Street',
    engineCapacity: 600,
  });

  private newMoto2: Motorcycle = new Motorcycle({
    id: '6348513f14c397abcad060b2',
    model: 'Gol',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    category: 'Street',
    engineCapacity: 600,
  });
  public ArrayMotorcycles: Motorcycle[] = [this.newMoto1, this.newMoto2];

  public updatedMotorcycle: IMotorcycle = {
    model: 'Biz',
    year: 2023,
    color: 'Black',
    status: true,
    buyValue: 10000.0,
    category: 'Street',
    engineCapacity: 600,
  };

  public updatedMotorcycleComId1: IMotorcycle = {
    id: '641cb1b462e50315627c2050',
    model: 'Biz',
    year: 2023,
    color: 'Black',
    status: true,
    buyValue: 10000.0,
    category: 'Street',
    engineCapacity: 600,
  };

  public updatedMotorcycleComId: IMotorcycle = {
    id: '641cb1b462e50315627c2050',
    model: 'Xre',
    year: 2023,
    color: 'Black',
    status: true,
    buyValue: 89000.99,
    category: 'Street',
    engineCapacity: 600,
  };
}
