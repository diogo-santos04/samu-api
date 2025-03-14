import { Request, Response } from "express";
import { GetEscalaEquipeService } from "../../../services/escala/escala_equipe/GetEscalaEquipeService";

class GetEscalaEquipeController{
    async handle(req: Request, res: Response): Promise<any>{
        const { id } = req.params

        const getEscalaEquipeService = new GetEscalaEquipeService();
        const escala_equipe = await getEscalaEquipeService.execute(Number(id));

        return res.json(escala_equipe);
    }
}

export { GetEscalaEquipeController }