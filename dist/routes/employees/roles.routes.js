"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _role = require("../../controllers/employees/role.controllers");
var router = (0, _express.Router)();
router.get('/roles', _role.getRoles);
router.post('/roles', _role.createRole);
var _default = router;
exports["default"] = _default;