import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(objMoto: IMotorcycle) {
    super({
      id: objMoto.id,
      buyValue: objMoto.buyValue,
      color: objMoto.color,
      model: objMoto.model,
      year: objMoto.year,
      status: objMoto.status || false,
    });
    this.category = objMoto.category;
    this.engineCapacity = objMoto.engineCapacity;
  }

  setCategory(category: string): void {
    this.category = category;
  }

  setEngineCapacity(engineCapacity: number): void {
    this.engineCapacity = engineCapacity;
  }

  getCategory(): string {
    return this.category;
  }

  getEngineCapacity(): number {
    return this.engineCapacity;
  }
}

export default Motorcycle;
