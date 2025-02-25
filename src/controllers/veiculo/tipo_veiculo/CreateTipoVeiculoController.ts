import { Request, Response } from "express";
import { CreateTipoVeiculoService } from "../../../services/veiculo/tipo_veiculo/CreateTipoVeiculoService";

class CreateTipoVeiculoController{
    async handle(req: Request, res: Response): Promise<any>{
        const { nome } = req.body;

        const createTipoVeiculoService = new CreateTipoVeiculoService()
        const tipo_veiculo = await createTipoVeiculoService.execute({ nome });

        return res.json(tipo_veiculo);
    }
}   

export { CreateTipoVeiculoController }