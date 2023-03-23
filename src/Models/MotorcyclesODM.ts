import { Schema } from 'mongoose';
import IMotorcycles from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotorcyclesODM extends AbstractODM<IMotorcycles> {
  constructor() {
    super(
      new Schema<IMotorcycles>({
        model: { type: String, required: true },
        year: { type: Number, required: true },
        color: { type: String, required: true },
        status: { type: Boolean, required: true },
        buyValue: { type: Number, required: true },
        category: { type: String, required: true },
        engineCapacity: { type: Number, required: true },
      }),
      'motorcycles',
    );
  }
}

export default MotorcyclesODM;
