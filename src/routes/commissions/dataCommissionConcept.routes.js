import { Router } from "express";
import { getCommissionConceptByCommissionType, getCommissionConceptById, newDataCommissionConcept } from "../../controllers/commissions/dataCommissionConcepts";


const router = Router();

router.post('/commissionConcept', newDataCommissionConcept);
router.get('/commisionConcept/:idCommissionType', getCommissionConceptByCommissionType);
router.get('/getCommissionConceptById/:idDataCommissionConcept', getCommissionConceptById)


export default router;
