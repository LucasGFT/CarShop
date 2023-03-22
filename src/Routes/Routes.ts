import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post('/cars', (req, res) => new CarController(req, res).create());
routes.get('/cars', (req, res) => res.status(200).json('get funcionando'));

export default routes;
