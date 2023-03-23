import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const RoutesMotorcycles = Router();

RoutesMotorcycles.post('/motorcycles', (req, res, _next) =>
  new MotorcyclesController(req, res).create());

RoutesMotorcycles.get('/motorcycles/:id', (req, res, _next) =>
  new MotorcyclesController(req, res).getMotorcycle());

RoutesMotorcycles.get('/motorcycles', (req, res, _next) =>
  new MotorcyclesController(req, res).getMotorcycles());

export default RoutesMotorcycles;
