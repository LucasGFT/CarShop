import { Router } from 'express';
import CarController from '../Controllers/CarController';

const RoutesCar = Router();

RoutesCar.post('/cars', (req, res, _next) =>
  new CarController(req, res).create());
RoutesCar.get('/cars', (req, res, _next) =>
  new CarController(req, res).getCars());
RoutesCar.get('/cars/:id', (req, res, _next) =>
  new CarController(req, res).getCar());
RoutesCar.put('/cars/:id', (req, res, _next) =>
  new CarController(req, res).updatedCar());

export default RoutesCar;
