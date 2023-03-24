import { Schema, Model, models, model } from 'mongoose';
import ICar from '../Interfaces/ICar';
import IMotorcycle from '../Interfaces/IMotorcycle';

class AbstractODM<T> {
  private schema: Schema;
  private model: Model<T>;
  constructor(schema: Schema, documentModel: string) {
    this.schema = schema;
    this.model = models[documentModel] || model(documentModel, this.schema);
  }
  public async create(car: T): Promise<T> {
    return this.model.create({ ...car });
  }

  public async getVehicles(): Promise<T[]> {
    const result = await this.model.find({});
    return result;
  }

  public async getVehicle(id: string): Promise<T | null> {
    const result = await this.model.findOne({ _id: id });
    return result;
  }

  public async updatedOneById(
    id: string,
    obj: ICar | IMotorcycle,
  ): Promise<T | null> {
    const filter = { _id: id };
    const update = obj;
    const result = await this.model.findOneAndUpdate(filter, update, {
      new: true,
    });
    return result;
  }

  public async deletedVehicle(id: string): Promise<T | null> {
    const filter = { _id: id };
    const result = await this.model.findByIdAndRemove(filter, {
      new: true,
    });
    return result;
  }
}

export default AbstractODM;
