import { readFile } from 'fs/promises';
import { sign } from 'jsonwebtoken';

// import Gestor from '../database/gestorModel'
const Gestor = require('../database/gestorModel');

export default class LoginServices {
  static async create(email:string, _password:string) {
    const jwtConfig = {
      expiresIn: '7d',
    };
    const user = await Gestor.getByEmail(email);
    if (!user) return false;
    const secret = await readFile('jwt.evaluation.key', 'utf-8');
    const token = sign({ data: user.role }, secret, jwtConfig);
    return { user, token };
  }
}
