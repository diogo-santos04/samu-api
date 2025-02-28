import { Request, Response } from "express";
import { ListEscalaService } from "../../services/escala/ListEscalaService";

class ListEscalaController{
    async handle(req: Request, res: Response): Promise<any>{
        const listEscalaService = new ListEscalaService();

        const escalas = await listEscalaService.execute();
        return res.json(escalas);
    }
}

export { ListEscalaController }