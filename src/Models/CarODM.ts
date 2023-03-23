import { model, Model, models, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarODM {
  private schema: Schema;
  private model: Model<ICar>;
  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.cars || model('cars', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async getCars(): Promise<ICar[]> {
    const result = await this.model.find({});
    return result;
  }

  public async getCar(id: string): Promise<ICar | null> {
    const result = await this.model.findOne({ _id: id });
    return result;
  }
}

export default CarODM;
