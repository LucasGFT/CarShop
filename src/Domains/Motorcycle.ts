import IMotorcycle from '../Interfaces/IMotorcycle';

class Motorcycle {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(objMoto: IMotorcycle) {
    this.id = objMoto.id;
    this.model = objMoto.model;
    this.year = objMoto.year;
    this.color = objMoto.color;
    this.status = objMoto.status || false;
    this.buyValue = objMoto.buyValue;
    this.category = objMoto.category;
    this.engineCapacity = objMoto.engineCapacity;
  }

  setId(id: string): void {
    this.id = id;
  }

  setCategory(category: string): void {
    this.category = category;
  }

  setEngineCapacity(engineCapacity: number): void {
    this.engineCapacity = engineCapacity;
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

  getCategory(): string {
    return this.category;
  }

  getEngineCapacity(): number {
    return this.engineCapacity;
  }
}

export default Motorcycle;
