import { Request, Response } from "express";
import { ListEscalasService } from "../../services/escala/ListEscalasService";

class ListEscalaController{
    async handle(req: Request, res: Response): Promise<any>{
        const listEscalasService = new ListEscalasService();

        const escalas = await listEscalasService.execute();
        return res.json(escalas);
    }
}

export { ListEscalaController }