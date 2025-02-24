"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _routes = require("../../controllers/locations/routes.controllers");
var router = (0, _express.Router)();
router.post('/route', _routes.createRoute);
var _default = router;
exports["default"] = _default;