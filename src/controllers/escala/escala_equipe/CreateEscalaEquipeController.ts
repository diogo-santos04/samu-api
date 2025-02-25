import { Request, Response } from 'express'
import { CreateEscalaEquipeService } from '../../../services/escala/escala_equipe/CreateEscalaEquipeService'

class CreateEscalaEquipeController{
    async handle(req: Request, res: Response): Promise<any>{
        const { escala_id, profissional_id, funcao_id} = req.body;

        const createEscalaService = new CreateEscalaEquipeService();
        const escala_equipe = await createEscalaService.execute({ escala_id, funcao_id, profissional_id})

        return res.json(escala_equipe);
    }
}

export { CreateEscalaEquipeController }