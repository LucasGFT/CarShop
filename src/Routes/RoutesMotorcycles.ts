import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const RoutesMotorcycles = Router();

RoutesMotorcycles.post('/motorcycles', (req, res, next) =>
  new MotorcyclesController(req, res, next).create());

RoutesMotorcycles.get('/motorcycles/:id', (req, res, next) =>
  new MotorcyclesController(req, res, next).getMotorcycle());

RoutesMotorcycles.get('/motorcycles', (req, res, next) =>
  new MotorcyclesController(req, res, next).getMotorcycles());

RoutesMotorcycles.put('/motorcycles/:id', (req, res, next) =>
  new MotorcyclesController(req, res, next).updatedMotorcycle());
  
export default RoutesMotorcycles;
