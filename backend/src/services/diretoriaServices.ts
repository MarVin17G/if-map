// import Ambiente from '../database/ambienteModel'
const Diretoria = require('../database/diretoriaModel')

export default class LeaderBoardServices {
  static async create(nome: string){
    const novaDiretoria = await Diretoria.create(nome)
    return novaDiretoria;
  }
  static async getAll() {
    const diretorias = await Diretoria.getAll();
    return diretorias;
  }
  static async getById(diretoriaId: any){
    const diretoriaById = await Diretoria.getById(diretoriaId)
    return diretoriaById
  }
  static async update(nome: string, diretoriaId: any){
    const diretoriaAtualizada = await Diretoria.update(nome, diretoriaId);
    return diretoriaAtualizada;
  }
  static async remove(diretoriaId: any){
    await Diretoria.remove(diretoriaId);
    return 'Diretoria deletada!';
  }
  // static async getByName(nome: string){
  //   const diretoriasPorNome = await Diretoria.getByName(nome);
  //   return diretoriasPorNome;
  // }
}
