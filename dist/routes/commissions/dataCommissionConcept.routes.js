"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _dataCommissionConcepts = require("../../controllers/commissions/dataCommissionConcepts");
var router = (0, _express.Router)();
router.post('/commissionConcept', _dataCommissionConcepts.newDataCommissionConcept);
router.get('/commisionConcept/:idCommissionType', _dataCommissionConcepts.getCommissionConceptByCommissionType);
router.get('/getCommissionConceptById/:idDataCommissionConcept', _dataCommissionConcepts.getCommissionConceptById);
var _default = router;
exports["default"] = _default;