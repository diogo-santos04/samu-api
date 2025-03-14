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
import { ListProfissionalController } from "./controllers/profissional/ListProfissionalController";
import { DeleteEscalaController } from "./controllers/escala/DeleteEscalaController";
import { GetEscalaController } from "./controllers/escala/GetEscalaController";
import { EditEscalaController } from "./controllers/escala/EditEscalaController";
import { GetEscalaEquipeController } from "./controllers/escala/escala_equipe/GetEscalaEquipeController";
import { EditEscalaEquipeController } from "./controllers/escala/escala_equipe/EditEscalaEquipeController";

const router = Router();

//ROTAS USER 
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailsUserController().handle);
router.get("/validate-token", isAuthenticated)

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
router.get("/profissional", isAuthenticated, new ListProfissionalController().handle)

//Escala
router.post("/escala", isAuthenticated, new CreateEscalaController().handle) //salva escala
router.get("/escala", isAuthenticated, new ListEscalaController().handle) // pegar todas as escalas
router.post("/escala_equipe", isAuthenticated, new CreateEscalaEquipeController().handle) // salvar escala equipe
router.delete("/escala/:id", isAuthenticated, new DeleteEscalaController().handle) // deleta
router.get("/escala/:id", isAuthenticated, new GetEscalaController().handle) //pegar escala a ser atualizada
router.put("/escala/:id", isAuthenticated, new EditEscalaController().handle) // atualiza
router.get("/escala_equipe/:id", isAuthenticated, new GetEscalaEquipeController().handle)
router.put("/escala_equipe", isAuthenticated, new EditEscalaEquipeController().handle)

export { router }