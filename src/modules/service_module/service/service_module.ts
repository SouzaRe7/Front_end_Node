import { serviceModuleRepo } from "../repository";

export default class ServiceModuleService {
  async createServico(data: ServicoType): Promise<ServicoType | undefined> {
    return serviceModuleRepo.createService(data);
  }

  async getAllService(): Promise<ServicoTypeReturned[] | undefined> {
    return serviceModuleRepo.getAllService();
  }

  async updateServico(idServico: string, servicoDTO: ServicoType): Promise<ServicoTypeReturned|undefined>{
    return serviceModuleRepo.updateServico(idServico, servicoDTO);
  }
}
