// import Ambiente from '../database/ambienteModel'
const Ambiente = require('../database/ambienteModel')

export default class LeaderBoardServices {
  static async getAll() {
    const allAmbientes = await Ambiente.getAll();
    return allAmbientes;
  }
}
