import { Request } from 'express';
import * as jwt from 'jsonwebtoken';

interface IJwtPayload extends jwt.JwtPayload{
  data?: string;
}

export default interface IRequest extends Request {
  role?: string | IJwtPayload
}
