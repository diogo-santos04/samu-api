import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
    sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const authToken = req.headers.authorization;

  if (!authToken) {
      res.status(401).end();
      return; 
  }

  const [, token] = authToken.split(" ");

  try {
      //pegar id do token e colocar dentro de uma variavel dentro do Request
      const { sub } = verify(token, process.env.JWT_SECRET) as PayLoad;
      req.user_id = Number(sub);
      return next();
  } catch (error) {
      res.status(401).end();
      return; 
  }
}
