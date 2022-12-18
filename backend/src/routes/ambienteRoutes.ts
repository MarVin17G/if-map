import { Router } from 'express';
import { ambienteControllers } from '../controllers';

const ambienteRouters = Router();

ambienteRouters.get('/', ambienteControllers.getAll);

export default ambienteRouters;
