import { Router } from "express";
import * as AdminController from '../controllers/admin/adminControlle';

const router = Router();

router.get('/admin', AdminController.Home)
router.get('/login-admin', AdminController.Login)
router.post('/cadastro-admin',AdminController.SignUp)
router.get('/page-admin', AdminController.PageAdmin)
router.get('/list-clientes', AdminController.ByLocation)

export default router;