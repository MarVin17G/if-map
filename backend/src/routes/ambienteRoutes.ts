import { Router } from 'express';
import { ambienteControllers } from '../controllers';
import Multer from 'multer';
const path = require('path')

const storage = Multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.join(__dirname, '../../upload/'));
  },
  filename(req, file, cb) {
    cb(
      null,
      // `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
      `${file.fieldname}${path.extname(file.originalname)}`
    );
  },
});

const upload = Multer({storage})

const ambienteRouters = Router();

ambienteRouters.get('/', ambienteControllers.getAll);
ambienteRouters.get('/:nome', ambienteControllers.getByName);
ambienteRouters.get('/:ambienteId', ambienteControllers.getById);
ambienteRouters.post('/', upload.single('videoRota'), ambienteControllers.create);
ambienteRouters.put('/:ambienteId', ambienteControllers.update);
ambienteRouters.delete('/:ambienteId', ambienteControllers.remove);

export default ambienteRouters;
