"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _dlpassignment = require("../../controllers/employees/dlpassignment.controllers");
var router = (0, _express.Router)();
router.post('/dlpAssignment', _dlpassignment.addDlpAssignment);
var _default = router;
exports["default"] = _default;