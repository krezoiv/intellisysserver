import { Router } from "express";
import { newDataCommissionDetail } from "../../controllers/commissions/dataCommissionDetail.controllers";


const router = Router();

router.post('/dataCommissionDetail', newDataCommissionDetail);


export default router;