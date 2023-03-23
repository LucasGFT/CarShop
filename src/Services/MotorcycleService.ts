import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IValidId from '../Interfaces/IValidId';
import MotorcyclesODM from '../Models/MotorcyclesODM';

class MotorcycleService implements IValidId {
  validId(id: string): boolean {
    const regex = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;
    if (!regex.test(id)) return false;
    return true;
  }

  private createMotorcycleDomains(motorcycle: IMotorcycle) {
    return new Motorcycle(motorcycle);
  }

  private createArrayMotorcyclesDomains(motorcycle: IMotorcycle[]) {
    const array = motorcycle.map((element) => new Motorcycle(element));
    return array;
  }

  public async createMotorcycle(motorcycle: IMotorcycle) {
    const motorcycleResult = motorcycle;
    if (motorcycle.status === undefined) motorcycleResult.status = false;
    const motorcycleODM = new MotorcyclesODM();
    const newCar = await motorcycleODM.create(motorcycleResult);
    return this.createMotorcycleDomains(newCar);
  }

  public async getMotorcycles() {
    const motorcyclesODM = new MotorcyclesODM();
    const getMotorcycles = await motorcyclesODM.getVehicles();
    return this.createArrayMotorcyclesDomains(getMotorcycles);
  }

  public async getMotorcycle(id: string) {
    const validId = this.validId(id);
    if (!validId) return null;
    const motorcycleODM = new MotorcyclesODM();
    const getCar = await motorcycleODM.getVehicle(id);
    if (getCar) return this.createMotorcycleDomains(getCar);
    throw new Error('Motorcycle not found');
  }
}

export default MotorcycleService;
