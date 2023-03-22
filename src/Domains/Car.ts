import ICar from '../Interfaces/ICar';

class Car {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(objCar: ICar) {
    this.id = objCar.id;
    this.model = objCar.model;
    this.year = objCar.year;
    this.color = objCar.color;
    this.status = objCar.status || false;
    this.buyValue = objCar.buyValue;
    this.doorsQty = objCar.doorsQty;
    this.seatsQty = objCar.seatsQty;
  }

  setId(id: string): void {
    this.id = id;
  }

  setDoorsQty(doorsQty: number): void {
    this.doorsQty = doorsQty;
  }

  setSeatsQty(seatsQty: number): void {
    this.seatsQty = seatsQty;
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

  getDoorsQty(): number {
    return this.doorsQty;
  }

  getSeatsQty(): number {
    return this.seatsQty;
  }
}

export default Car;
