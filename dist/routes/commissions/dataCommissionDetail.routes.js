"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _dataCommissionDetail = require("../../controllers/commissions/dataCommissionDetail.controllers");
var router = (0, _express.Router)();
router.post('/dataCommissionDetail', _dataCommissionDetail.newDataCommissionDetail);
router.get('/getLastCommissionDataDetails', _dataCommissionDetail.getLastCommissionDataDetails);
router["delete"]('/deleteDataCommissionDetail/:idDataDetail', _dataCommissionDetail.deleteDataCommissionDetail);
router.put('/updateDataCommissionDetail/:idDataDetail', _dataCommissionDetail.updateDataCommissionDetail);
router.post('/getCommissionDetailById', _dataCommissionDetail.getCommissionDetailById);
var _default = router;
exports["default"] = _default;