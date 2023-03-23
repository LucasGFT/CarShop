import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post('/cars', (req, res, _next) =>
  new CarController(req, res).create());
routes.get('/cars', (req, res, _next) =>
  new CarController(req, res).getCars());
routes.get('/cars/:id', (req, res, _next) =>
  new CarController(req, res).getCar());
routes.put('/cars/:id', (req, res, _next) =>
  new CarController(req, res).updatedCar());

export default routes;
