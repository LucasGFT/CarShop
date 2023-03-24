import { Router } from 'express';
import CarController from '../Controllers/CarController';

const RoutesCar = Router();

const url = '/cars';

RoutesCar.post(url, (req, res, next) =>
  new CarController(req, res, next).create());
RoutesCar.get(url, (req, res, next) =>
  new CarController(req, res, next).getCars());
RoutesCar.get(`${url}/:id`, (req, res, next) =>
  new CarController(req, res, next).getCar());
RoutesCar.put(`${url}/:id`, (req, res, next) =>
  new CarController(req, res, next).updatedCar());
RoutesCar.delete(`${url}/:id`, (req, res, next) =>
  new CarController(req, res, next).deletedCar());

export default RoutesCar;
