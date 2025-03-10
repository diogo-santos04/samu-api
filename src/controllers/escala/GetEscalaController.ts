import { Request, Response } from 'express'
import { GetEscalaService } from '../../services/escala/GetEscalaService';


class GetEscalaController{
    async handle(req: Request, res: Response): Promise<any>{
        const { id } = req.params;

        const getEscalaService = new GetEscalaService();
        const escala = await getEscalaService.execute(Number(id));

        return res.json(escala)
    }
}

export { GetEscalaController }