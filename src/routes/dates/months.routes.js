import { Router } from "express";
import { getMonth } from "../../controllers/dates/months.controllers";

const router = Router();

router.get('/months', getMonth);

export default router;