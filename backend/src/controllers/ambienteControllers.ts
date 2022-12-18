import { Request, Response } from 'express';
import { ambienteServices } from '../services';

export default class LeaderboardControllers {
  static getAll = async (_req: Request, res: Response) => {
    const result = await ambienteServices.getAll();
    return res.status(200).json(result);
  };
}
