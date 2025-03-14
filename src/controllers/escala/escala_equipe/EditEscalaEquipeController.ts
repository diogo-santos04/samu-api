import { Request, Response } from "express";
import { EditEscalaEquipeService } from "../../../services/escala/escala_equipe/EditEscalaEquipeService";

class EditEscalaEquipeController{
    async handle(req: Request, res: Response): Promise<any>{
        const { escala_id, profissionais_ids} = req.body;

        const editEscalaEquipeService = new EditEscalaEquipeService();
        const escala_equipe = await editEscalaEquipeService.execute(escala_id, profissionais_ids);

        return res.json(escala_equipe);
    }
}

export { EditEscalaEquipeController }