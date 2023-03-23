import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcyclesODM from '../Models/MotorcyclesODM';

class MotorcycleService {
  private createMotorcycleDomains(motorcycle: IMotorcycle) {
    return new Motorcycle(motorcycle);
  }

  public async createMotorcycle(motorcycle: IMotorcycle) {
    const motorcycleResult = motorcycle;
    if (motorcycle.status === undefined) motorcycleResult.status = false;
    const motorcycleODM = new MotorcyclesODM();
    const newCar = await motorcycleODM.create(motorcycleResult);
    return this.createMotorcycleDomains(newCar);
  }
}

export default MotorcycleService;
