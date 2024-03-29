import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarODM extends AbstractODM<ICar> {
  constructor() {
    super(
      new Schema<ICar>({
        model: { type: String, required: true },
        year: { type: Number, required: true },
        color: { type: String, required: true },
        status: { type: Boolean, required: true },
        buyValue: { type: Number, required: true },
        doorsQty: { type: Number, required: true },
        seatsQty: { type: Number, required: true },
      }),
      'cars',
    );
  }
}

export default CarODM;
