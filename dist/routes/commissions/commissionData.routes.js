"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _commisisonData = require("../../controllers/commissions/commisisonData.controllers");
var router = (0, _express.Router)();
router.post('/commissionData', _commisisonData.newCommissionData);
router.get('/getLastDataBatchAmount', _commisisonData.getLastDataBatchTotalAmount);
router.get('/getTotalValueByCommissionType', _commisisonData.getTotalValueByCommisionType);
var _default = router;
exports["default"] = _default;