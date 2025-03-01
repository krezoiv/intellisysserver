"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _employeeType = require("../../controllers/employees/employeeType.controllers");
var router = (0, _express.Router)();
router.get('/employeeType', _employeeType.getListEmployeeType);
var _default = router;
exports["default"] = _default;