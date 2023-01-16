import { Request, Response } from 'express';
import { diretoriaServices } from '../services';

export default class diretoriaControllers {
  static getAll = async (_req: Request, res: Response) => {
    const diretorias = await diretoriaServices.getAll();
    return res.status(200).json(diretorias);
  };
  static getById = async (req: Request, res: Response) => {
    const { diretoriaId } =req.params;
    const diretoria = await diretoriaServices.getById(diretoriaId)
    return res.status(200).json(diretoria)
  }
  static create = async (req: Request, res: Response) => {
    const { nome } = req.body;
    const novaDiretoria = await diretoriaServices.create(nome);
    return res.status(200).json(novaDiretoria)
  }
  static update = async (req: Request, res: Response) => {
    const { nome } = req.body;
    const { diretoriaId } = req.params;
    const diretoriaAtualizada = await diretoriaServices.update(nome, diretoriaId)
    return res.status(200).json(diretoriaAtualizada)
  }
  static remove = async (req: Request, res: Response) => {
    const { diretoriaId } = req.params
    await diretoriaServices.remove(diretoriaId);
    return res.status(200).json({message: "diretoria deletada com sucesso!"})
  }
  // static getByName = async (req: Request, res: Response) => {
  //   const { nome } = req.params;
  //   const diretoriasPorNome = await diretoriaServices.getByName(nome);
  //   return res.status(200).json(diretoriasPorNome);
  // }
}
