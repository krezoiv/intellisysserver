import { Router } from "express";
import { deactivateUser, getUsers, newUser, resetUserPassword } from "../../controllers/users/users.controllres";
import { validateJWT } from "../../middlewares/validateJWT";

const router = Router();

router.get('/users', getUsers);
router.post('/users', newUser);
router.put('/userDeactivate/:idUser', deactivateUser);
router.put('/resetPassWord/:idUser', resetUserPassword);


//router.post('/singin', singin);


export default router;