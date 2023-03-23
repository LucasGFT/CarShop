import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;

  constructor(objVehicle: IVehicle) {
    this.id = objVehicle.id;
    this.model = objVehicle.model;
    this.year = objVehicle.year;
    this.color = objVehicle.color;
    this.status = objVehicle.status || false;
    this.buyValue = objVehicle.buyValue;
  }

  setId(id: string): void {
    this.id = id;
  }

  getId(): string | undefined {
    if (this.id) return this.id;
    return undefined;
  }

  getModel(): string {
    return this.model;
  }

  getYear(): number {
    return this.year;
  }

  getColor(): string {
    return this.color;
  }

  getStatus(): boolean | undefined {
    if (this.status) return this.status;
    return undefined;
  }

  getBuyValue(): number {
    return this.buyValue;
  }
}

export default Vehicle;
