import { Router } from "express";
import { getAllCommissionTypes } from "../../controllers/commissions/commissionType.controllers";

const router = Router();


router.get('/commissionType', getAllCommissionTypes);

export default router;