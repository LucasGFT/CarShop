import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomains(car: ICar) {
    return new Car(car);
  }

  public async createCar(car: ICar) {
    const carResult = car;
    if (car.status === undefined) carResult.status = false;
    const carODM = new CarODM();
    const newCar = await carODM.create(carResult);
    return this.createCarDomains(newCar);
  }
}

export default CarService;
