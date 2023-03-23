import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

class CarController {
  private res: Response;
  private req: Request;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const { model, year, color, status, buyValue, doorsQty, seatsQty } = this.req.body;
    const car: ICar = {
      model,
      year,
      color,
      status,
      buyValue,
      doorsQty,
      seatsQty,
    };

    const newCar = await this.service.createCar(car);
    return this.res.status(201).json(newCar);
  }

  public async getCars() {
    const cars = await this.service.getCars();
    return this.res.status(200).json(cars);
  }

  public async getCar() {
    const { id } = this.req.params;
    try {
      const car = await this.service.getCar(id);
      if (car === null) return this.res.status(422).json({ message: 'Invalid mongo id' });
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  public async updatedCar() {
    const { id } = this.req.params;
    const { model, year, color, status, buyValue, doorsQty, seatsQty } = this.req.body;
    const car: ICar = {
      model,
      year,
      color,
      status,
      buyValue,
      doorsQty,
      seatsQty,
    };
    try {
      const carUpdate = await this.service.updatedCar(id, car);
      if (carUpdate === null) return this.res.status(422).json({ message: 'Invalid mongo id' });
      return this.res.status(200).json(carUpdate);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;
