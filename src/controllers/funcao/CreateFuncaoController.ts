import { Request, Response } from "express";
import { CreateFuncaoService } from "../../services/funcao/CreateFuncaoService";

class CreateFuncaoController{
    async handle(req: Request, res: Response): Promise<any>{
        const { nome } = req.body;

        const createFuncaoService = new CreateFuncaoService();
        const funcao = await createFuncaoService.execute({ nome });

        return res.json(funcao);
    }
}

export { CreateFuncaoController }