import { Router } from "express";
import { getLastDataBatchTotalAmount, getTotalValueByCommisionType, newCommissionData } from "../../controllers/commissions/commisisonData.controllers";


const router = Router();

router.post('/commissionData', newCommissionData);
router.get('/getLastDataBatchAmount', getLastDataBatchTotalAmount);
router.get('/getTotalValueByCommissionType', getTotalValueByCommisionType)

export default router;