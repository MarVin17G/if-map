import { Router } from 'express';
import { diretoriaControllers } from '../controllers';

const diretoriaRouters = Router();

diretoriaRouters.get('/', diretoriaControllers.getAll);
diretoriaRouters.get('/:diretoriaId', diretoriaControllers.getById);
diretoriaRouters.post('/', diretoriaControllers.create);
diretoriaRouters.put('/:diretoriaId', diretoriaControllers.update);
diretoriaRouters.delete('/:diretoriaId', diretoriaControllers.remove);
// diretoriaRouters.get('/:nome', diretoriaControllers.getByName);

export default diretoriaRouters;
