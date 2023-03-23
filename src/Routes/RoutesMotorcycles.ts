import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const RoutesMotorcycles = Router();

RoutesMotorcycles.post('/motorcycles', (req, res, _next) =>
  new MotorcyclesController(req, res).create());

export default RoutesMotorcycles;
