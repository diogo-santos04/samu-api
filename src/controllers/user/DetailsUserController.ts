import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailsUserService";

class DetailsUserController{
    async handle(req: Request, res: Response): Promise<any>{
        const user_id = req.user_id;

        const detailService = new DetailUserService();

        const user = await detailService.execute(Number(user_id));

        return res.json(user);
    }
}

export { DetailsUserController }