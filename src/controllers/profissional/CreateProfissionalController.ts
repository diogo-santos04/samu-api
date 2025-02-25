import { Request, Response } from "express";
import { CreateProfissionalService } from "../../services/profissional/CreateProfissionalService";

class CreateProfissionalController{
    async handle(req: Request, res: Response): Promise<any>{
        const { funcao_id, nome, matricula, cpf, data_nascimento, sexo } = req.body;

        const createProfissionalService = new CreateProfissionalService();
        const profissional = await createProfissionalService.execute({ funcao_id, nome, matricula, cpf, data_nascimento, sexo});

        return res.json(profissional);
    }
}

export { CreateProfissionalController }