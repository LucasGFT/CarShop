import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(objCar: ICar) {
    super({
      id: objCar.id,
      buyValue: objCar.buyValue,
      color: objCar.color,
      model: objCar.model,
      year: objCar.year,
      status: objCar.status || false,
    });
    this.doorsQty = objCar.doorsQty;
    this.seatsQty = objCar.seatsQty;
  }

  setDoorsQty(doorsQty: number): void {
    this.doorsQty = doorsQty;
  }

  setSeatsQty(seatsQty: number): void {
    this.seatsQty = seatsQty;
  }

  getDoorsQty(): number {
    return this.doorsQty;
  }

  getSeatsQty(): number {
    return this.seatsQty;
  }
}

export default Car;
