import { Request, Response } from "express";
import { gestorServices } from "../services";

export default class GestorControllers {
  static getAll = async (_req: Request, res: Response) => {
    const result = await gestorServices.getAll();
    return res.status(200).json(result);
  };
  static getById = async (req: Request, res: Response) => {
    const { gestorId } = req.params;
    const gestor = await gestorServices.getById(gestorId);
    return res.status(200).json(gestor);
  };
  static create = async (req: Request, res: Response) => {
    const { nome, email, matricula, senha } = req.body;
    const newGestor = await gestorServices.create(
      nome,
      email,
      matricula,
      senha
    );
    return res.status(200).json(newGestor);
  };
  static update = async (req: Request, res: Response) => {
    const { nome, email, matricula, senha } = req.body;
    const { gestorId } = req.params;
    const updatedGestor = await gestorServices.update(
      nome,
      email,
      matricula,
      senha,
      gestorId
    );
    return res.status(200).json(updatedGestor);
  };
  static remove = async (req: Request, res: Response) => {
    const { gestorId } = req.params;
    await gestorServices.remove(gestorId);
    return res.status(200).json({ message: "Gestor deletado com sucesso!" });
  };
  static getByName = async (req: Request, res: Response) => {
    const { nome } = req.params;
    const gestoresPorNome = await gestorServices.getByName(nome);
    return res.status(200).json(gestoresPorNome);
  };
}
