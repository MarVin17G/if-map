// import Ambiente from '../database/ambienteModel'
const Ambiente = require('../database/ambienteModel')

export default class LeaderBoardServices {
  static async getAll() {
    const allAmbientes = await Ambiente.getAll();
    return allAmbientes;
  }
  static async getById(ambienteId: any){
    const ambienteById = await Ambiente.getById(ambienteId)
    return ambienteById
  }
  static async create(nome: string, diretoriaFk: number, mapaAmbiente: string, videoRota: string){
    const novoAmbiente = await Ambiente.create(nome, diretoriaFk, mapaAmbiente, videoRota)
    return novoAmbiente;
  }
  static async update(nome: string, diretoriaFk: number, mapaAmbiente: string, videoRota: string, ambienteId:any){
    const atualizadoAmbiente = await Ambiente.update(nome, diretoriaFk, mapaAmbiente, videoRota, ambienteId);
    return atualizadoAmbiente;
  }
  static async remove(ambienteId: any){
    await Ambiente.remove(ambienteId);
    return 'Ambiente deletado!';
  }
  static async getByName(nome: any){
    const ambientesPorNome = await Ambiente.getByName(nome);
    return ambientesPorNome;
  }
}
