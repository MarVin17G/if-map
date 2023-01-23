// import Ambiente from '../database/ambienteModel'
const Ambiente = require('../database/ambienteModel')
// const teste = require('../../..')
let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo('b15aba310e54ee3a43315c9923ad6e1c27d68997',
'/6YcfOr5/WP/idvq3Fifn+PLWFKTFuVWvq48tju1O8vtZh2PHfBkPdJcXS7Y0Z6Ve9s970meiY4QG/5yB7iyAKNrWCaTNDKdYHI0GSy42mfQsGe3BOBm2q5mP4LN/8S2',
'6295e914e1b58109ca53527065b14fa1');
const path = require('path')
import { unlink } from 'node:fs/promises';

export default class LeaderBoardServices {
  static async getAll() {
    const allAmbientes = await Ambiente.getAll();
    return allAmbientes;
  }
  static async getById(ambienteId: any){
    const ambienteById = await Ambiente.getById(ambienteId)
    return ambienteById
  }
  static async create(nome: string, diretoriaFk: number, mapaAmbiente: string){
    let file_name = path.join(__dirname, '../../upload/videoRota.mp4');
    console.log(file_name)
    let videoRota: string = '';
    await client.upload(
      file_name,
      {
        'name': 'Vídeo ambiente teste',
        'description': 'Descrição do vídeo de ambiente de teste.'
      },
      function (url:string) {
        videoRota = url
        console.log('Your video URI is: ' + url);
      },
      function (bytes_uploaded:any, bytes_total: any) {
        var percentage = (bytes_uploaded / bytes_total * 100).toFixed(2)
        console.log(bytes_uploaded, bytes_total, percentage + '%')
      },
      function (error: any) {
        console.log('Failed because: ' + error)
      }
    )
    console.log(videoRota)
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
