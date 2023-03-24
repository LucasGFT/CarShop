import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const RoutesMotorcycles = Router();
const url = '/motorcycles';

RoutesMotorcycles.post(url, (req, res, next) =>
  new MotorcyclesController(req, res, next).create());

RoutesMotorcycles.get(`${url}/:id`, (req, res, next) =>
  new MotorcyclesController(req, res, next).getMotorcycle());

RoutesMotorcycles.get(url, (req, res, next) =>
  new MotorcyclesController(req, res, next).getMotorcycles());

RoutesMotorcycles.put(`${url}/:id`, (req, res, next) =>
  new MotorcyclesController(req, res, next).updatedMotorcycle());
  
RoutesMotorcycles.delete(`${url}/:id`, (req, res, next) =>
  new MotorcyclesController(req, res, next).deletedMotorcycles());

export default RoutesMotorcycles;
