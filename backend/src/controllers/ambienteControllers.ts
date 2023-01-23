import { Request, Response } from 'express';
import { ambienteServices } from '../services';

export default class AmbienteControllers {
  static getAll = async (_req: Request, res: Response) => {
    const result = await ambienteServices.getAll();
    return res.status(200).json(result);
  };
  static getById = async (req: Request, res: Response) => {
    const { ambienteId } =req.params;
    const ambiente = await ambienteServices.getById(ambienteId)
    return res.status(200).json(ambiente)
  }
  static create = async (req: Request, res: Response) => {
    const { nome, diretoriaFk, mapaAmbiente } = req.body;
    const newAmbiente = await ambienteServices.create(nome, diretoriaFk, mapaAmbiente);
    return res.status(200).json(newAmbiente)
  }
  static update = async (req: Request, res: Response) => {
    const { nome, diretoriaFk, mapaAmbiente, videoRota } = req.body;
    const { ambienteId } = req.params;
    const updatedAmbiente = await ambienteServices.update(nome, diretoriaFk, mapaAmbiente, videoRota, ambienteId)
    return res.status(200).json(updatedAmbiente)
  }
  static remove = async (req: Request, res: Response) => {
    const { ambienteId } = req.params
    await ambienteServices.remove(ambienteId);
    return res.status(200).json({message: "ambiente deletado com sucesso!"})
  }
  static getByName = async (req: Request, res: Response) => {
    // const { nome } = req.query;
    const { nome } = req.params;
    const ambientesPorNome = await ambienteServices.getByName(nome);
    return res.status(200).json(ambientesPorNome);
  }
}
