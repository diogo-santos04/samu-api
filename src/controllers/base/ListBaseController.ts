import { Request, Response } from "express";
import { ListBaseService } from "../../services/base/ListBaseService";

class ListBaseController{
    async handle(req: Request, res: Response): Promise<any>{
        const listBaseService = new ListBaseService();

        const bases = await listBaseService.execute();

        return res.json(bases);
    }

}

export { ListBaseController }