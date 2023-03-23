import { Router } from 'express';
import CarController from '../Controllers/CarController';

const RoutesCar = Router();

RoutesCar.post('/cars', (req, res, next) =>
  new CarController(req, res, next).create());
RoutesCar.get('/cars', (req, res, next) =>
  new CarController(req, res, next).getCars());
RoutesCar.get('/cars/:id', (req, res, next) =>
  new CarController(req, res, next).getCar());
RoutesCar.put('/cars/:id', (req, res, next) =>
  new CarController(req, res, next).updatedCar());

export default RoutesCar;
