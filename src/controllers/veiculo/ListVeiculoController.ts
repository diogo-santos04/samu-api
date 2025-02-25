import { Request,Response } from "express";
import { ListVeiculoService } from "../../services/veiculo/ListVeiculoService";

class ListVeiculoController{
    async handle(req: Request, res: Response): Promise<any>{
        const listVeiculoService = new ListVeiculoService();
        const veiculos = await listVeiculoService.execute();

        return res.json(veiculos)
    }
}

export { ListVeiculoController }
