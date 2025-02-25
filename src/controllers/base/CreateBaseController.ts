import { Request, Response } from "express";
import { CreateBaseService } from "../../services/base/CreateBaseService";

class CreateBaseController{
    async handle(req: Request, res: Response): Promise<any> {
        const { nome } = req.body;

        const createService = new CreateBaseService();
        const base = await createService.execute({ nome });

        return res.json(base)
    }
}

export { CreateBaseController}