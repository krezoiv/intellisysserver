import { Router } from "express";
import { newCommissionData } from "../../controllers/commissions/commisisonData.controllers";


const router = Router();

router.post('/commissionData', newCommissionData);

export default router;