import { Response } from 'express';
import { Request } from '../interfaces';
import { loginServices } from '../services';

export default class LoginControllers {
  create = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const loginCreated = await loginServices.create(email, password);
    if (!loginCreated) return res.status(400).json({ error: 'Username or password invalid' });
    return res.status(200).json(loginCreated);
  };

  validate = async (req:Request, res: Response) => {
    const { role } = req;
    if (typeof role !== 'string' && role?.data) {
      return res.status(200).json(role.data);
    }
    return res.status(500).json({ message: 'ocorreu um erro na validação' });
  };
}
