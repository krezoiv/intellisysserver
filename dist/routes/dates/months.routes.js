"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _months = require("../../controllers/dates/months.controllers");
var router = (0, _express.Router)();
router.get('/months', _months.getMonth);
var _default = router;
exports["default"] = _default;