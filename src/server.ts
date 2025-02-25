import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import { router } from './routes';
import cors from 'cors';
import path from 'path';


const app = express();
app.use(express.json());
app.use(cors())
app.use(router);


const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, "10.42.20.89", () => {
  console.log(`Servidor rodando em http://10.42.20.89:${PORT}`);
});