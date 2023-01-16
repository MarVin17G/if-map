import { Router } from 'express';
// import { userEmail, userPassword } from '../middlewares';
import jwtMiddleware from '../middlewares/jwtMiddleware';
import { LoginControllers } from '../controllers';

const loginRouter = Router();
const loginControllers = new LoginControllers();

loginRouter.post('/', loginControllers.create);
loginRouter.get('/validate', jwtMiddleware, loginControllers.validate);

export default loginRouter;