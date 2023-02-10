const Gestor = require("../database/gestorModel");
const path = require("path");

export default class GestorServices {
  static async getAll() {
    const gestores = await Gestor.getAll();
    return gestores;
  }
  static async getById(gestorId: any) {
    const ambienteById = await Gestor.getById(gestorId);
    return ambienteById;
  }
  static async create(
    nome: string,
    email: string,
    matricula: string,
    senha: string
  ) {
    const gestor = await Gestor.create(nome, email, matricula, senha);
    return gestor;
  }
  static async update(
    nome: string,
    email: string,
    matricula: string,
    senha: string,
    gestorId: any
  ) {
    const gestorAtualizado = await Gestor.update(
      nome,
      email,
      matricula,
      senha,
      gestorId
    );
    return gestorAtualizado;
  }
  static async remove(gestorId: any) {
    await Gestor.remove(gestorId);
    return "Gestor deletado!";
  }
  static async getByName(nome: any) {
    const gestorPorNome = await Gestor.getByName(nome);
    return gestorPorNome;
  }
}
