import { Router } from "express";
import * as ClientController from '../controllers/client/clientController'

const router = Router();

router.get('/cliente-admin', ClientController.HomeClient)
router.get('/login-cliente', ClientController.Login)
router.post('/cadastro-cliente', ClientController.SignUp)
router.get('/page-cliente', ClientController.PageClient)

export default router;