import { Request, Response } from "express";
import { ListProfissionalService } from "../../services/profissional/ListProfissionalService";

class ListProfissionalController{
    async handle(req: Request, res:Response): Promise<any> {
        const listProfissionalService = new ListProfissionalService();
        const profissional = await listProfissionalService.execute();

        return res.json(profissional);
    }
}

export { ListProfissionalController }