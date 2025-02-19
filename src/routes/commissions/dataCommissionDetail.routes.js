import { Router } from "express";
import {  deleteDataCommissionDetail, getCommissionDetailById, getLastCommissionDataDetails, newDataCommissionDetail, updateDataCommissionDetail } from "../../controllers/commissions/dataCommissionDetail.controllers";


const router = Router();

router.post('/dataCommissionDetail', newDataCommissionDetail);
router.get('/getLastCommissionDataDetails', getLastCommissionDataDetails);
router.delete('/deleteDataCommissionDetail/:idDataDetail', deleteDataCommissionDetail);
router.put('/updateDataCommissionDetail/:idDataDetail', updateDataCommissionDetail);
router.post('/getCommissionDetailById', getCommissionDetailById);

export default router;