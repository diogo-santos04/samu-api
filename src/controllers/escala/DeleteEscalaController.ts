import { Request, Response } from "express";
import { DeleteEscalaService } from "../../services/escala/DeleteEscalaService";

class DeleteEscalaController{
    async handle(req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const deleteEscalaService = new DeleteEscalaService();
        const escala = await deleteEscalaService.execute(Number(id));

        return res.json(escala)
    }
}

export { DeleteEscalaController }