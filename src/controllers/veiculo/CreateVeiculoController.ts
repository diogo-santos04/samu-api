import { Request, Response } from "express";
import { CreateVeiculoService } from "../../services/veiculo/CreateVeiculoService";

class CreateVeiculoController{
    async handle(req: Request, res: Response): Promise<any>{
        const { nome, cnes, placa, qrcode, situacao, tipo_veiculo_id } = req.body;

        const createVeiculoService = new CreateVeiculoService();
        const veiculo = await createVeiculoService.execute({ nome, cnes, placa, qrcode, situacao, tipo_veiculo_id });

        return res.json(veiculo);
    }
}   

export { CreateVeiculoController }
