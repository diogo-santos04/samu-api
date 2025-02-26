import { Request, Response } from 'express'
import { CreateEscalaService } from '../../services/escala/CreateEscalaService'


class CreateEscalaController{
    async handle(req: Request, res: Response): Promise<any>{
        console.log("----BODY DA REQ-----", req.body)
        const { base_id, veiculo_id, data_inicio, turno, km_final, km_inicial, combustivel, situacao, user_id} = req.body;

        const createEscalaService = new CreateEscalaService();
        const escala = await createEscalaService.execute({ base_id, combustivel, data_inicio, km_final, km_inicial, situacao, turno, user_id, veiculo_id})

        return res.json(escala);
    }
}

export { CreateEscalaController }