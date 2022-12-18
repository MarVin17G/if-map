import Ambiente from '../database/ambienteModel'

export default class LeaderBoardServices {
  static async getAll() {
    const allAmbientes = await Ambiente.getAll();
    return allAmbientes;
  }
}
