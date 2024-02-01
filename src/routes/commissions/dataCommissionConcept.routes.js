import { Router } from "express";
import { newDataCommissionConcept } from "../../controllers/commissions/dataCommissionConcepts";


const router = Router();

router.post('/commissionConcept', newDataCommissionConcept);


export default router;
