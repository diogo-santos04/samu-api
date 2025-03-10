import { Request, Response } from "express";
import { EditEscalaService } from "../../services/escala/EditEscalaService";

class EditEscalaController{
    async handle(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { base_id, veiculo_id, data_inicio, turno, km_final, km_inicial, combustivel, situacao, user_id} = req.body;

        const editEscalaService = new EditEscalaService();
        const escala = await editEscalaService.execute({ id, base_id, combustivel, data_inicio, km_final, km_inicial, situacao, turno, user_id, veiculo_id})

        return res.json(escala);
    }
}

export { EditEscalaController }