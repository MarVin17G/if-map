import { readFile } from 'fs/promises';
import { sign } from 'jsonwebtoken';

// importar Gestor
import Users from '../database/models/Users';

export default class LoginServices {
  static async create(email:string, _password:string) {
    const jwtConfig = {
      expiresIn: '7d',
    };
    const user = await Users.findOne({
      where: { email },
      attributes: { exclude: ['password'] },
    });
    if (!user) return false;
    const secret = await readFile('jwt.evaluation.key', 'utf-8');
    const token = sign({ data: user.role }, secret, jwtConfig);
    return { user, token };
  }
}
