import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import IValidId from '../Interfaces/IValidId';
import CarODM from '../Models/CarODM';

class CarService implements IValidId {
  private createCarDomains(car: ICar) {
    return new Car(car);
  }

  private createArrayCarDomains(car: ICar[]) {
    const array = car.map((element) => new Car(element));
    return array;
  }

  validId(id: string) {
    const regex = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;
    if (!regex.test(id)) return false;
    return true;
  }

  public async createCar(car: ICar) {
    const carResult = car;
    if (car.status === undefined) carResult.status = false;
    const carODM = new CarODM();
    const newCar = await carODM.create(carResult);
    return this.createCarDomains(newCar);
  }

  public async getCars() {
    const carODM = new CarODM();
    const getCars = await carODM.getVehicles();
    return this.createArrayCarDomains(getCars);
  }

  public async getCar(id: string) {
    const validId = this.validId(id);
    if (!validId) return null;
    const carODM = new CarODM();
    const getCar = await carODM.getVehicle(id);
    if (getCar) return this.createCarDomains(getCar);
    throw new Error('Car not found');
  }

  public async updatedCar(id: string, objUpdate: ICar) {
    const validId = this.validId(id);
    if (!validId) return null;
    const carODM = new CarODM();
    const carUpdate = await carODM.updatedOneById(id, objUpdate);
    if (carUpdate) return this.createCarDomains(carUpdate);
    throw new Error('Car not found');
  }
}

export default CarService;
