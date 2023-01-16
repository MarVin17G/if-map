import { Router } from 'express';
import { ambienteControllers } from '../controllers';

const ambienteRouters = Router();
// lembrar q ordem importa!
ambienteRouters.get('/', ambienteControllers.getByName);
ambienteRouters.get('/', ambienteControllers.getAll);
ambienteRouters.get('/:ambienteId', ambienteControllers.getById);
ambienteRouters.post('/', ambienteControllers.create);
ambienteRouters.put('/:ambienteId', ambienteControllers.update);
ambienteRouters.delete('/:ambienteId', ambienteControllers.remove);

export default ambienteRouters;
