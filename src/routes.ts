import { Router } from "express";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailsUserController } from "./controllers/user/DetailsUserController";
import { CreateBaseController } from "./controllers/base/CreateBaseController";
import { CreateTipoVeiculoController } from "./controllers/veiculo/tipo_veiculo/CreateTipoVeiculoController";
import { CreateVeiculoController } from "./controllers/veiculo/CreateVeiculoController";
import { CreateFuncaoController } from "./controllers/funcao/CreateFuncaoController";
import { CreateProfissionalController } from "./controllers/profissional/CreateProfissionalController";
import { CreateEscalaController } from "./controllers/escala/CreateEscalaController";
import { CreateEscalaEquipeService } from "./services/escala/escala_equipe/CreateEscalaEquipeService";
import { CreateEscalaEquipeController } from "./controllers/escala/escala_equipe/CreateEscalaEquipeController";
import { ListBaseController } from "./controllers/base/ListBaseController";
import { ListVeiculoController } from "./controllers/veiculo/ListVeiculoController";
import { ListEscalaController } from "./controllers/escala/ListEscalaController";

const router = Router();

//ROTAS USER 
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailsUserController().handle);

//BASE
router.post("/base",isAuthenticated, new CreateBaseController().handle);
router.get("/base", isAuthenticated, new ListBaseController().handle)

//Veiculo
router.post("/tipo_veiculo", isAuthenticated, new CreateTipoVeiculoController().handle)
router.post("/veiculo", isAuthenticated, new CreateVeiculoController().handle)
router.get("/veiculo", isAuthenticated, new ListVeiculoController().handle)

//Funcao
router.post("/funcao", isAuthenticated, new CreateFuncaoController().handle);

//Profissional
router.post("/profissional", isAuthenticated, new CreateProfissionalController().handle);

//Escala
router.post("/escala", isAuthenticated, new CreateEscalaController().handle)
router.get("/escala", isAuthenticated, new ListEscalaController().handle)
router.post("/escala_equipe", isAuthenticated, new CreateEscalaEquipeController().handle)

export { router }