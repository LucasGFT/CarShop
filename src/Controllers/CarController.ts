import { Request, Response } from 'express';
import ICarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

// link course: https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/31fdf796-fb5a-4a3f-b1d5-4eadd0ab0147/day/fa158180-d0d0-40d7-83bf-ff7c0c983b10/lesson/2558af70-0f71-4a52-b7ff-a4869882a4e8
class CarController {
  private res: Response;
  private req: Request;
  // private next: NextFunction;
  private service: ICarService;

  constructor(req: Request, res: Response) {
    this.req = req;
    this.res = res;
    // this.next = next;
    this.service = new ICarService();
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
      return this.res.status(404).json({ message: 'Car not found' });
    }
  }
}

export default CarController;
