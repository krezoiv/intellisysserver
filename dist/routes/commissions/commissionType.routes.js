"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _commissionType = require("../../controllers/commissions/commissionType.controllers");
var router = (0, _express.Router)();
router.get('/commissionType', _commissionType.getAllCommissionTypes);
var _default = router;
exports["default"] = _default;