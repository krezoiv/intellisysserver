"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _department = require("../../controllers/locations/department.controllers");
var router = (0, _express.Router)();
router.get('/departments', _department.getListDepartments);
var _default = router;
exports["default"] = _default;