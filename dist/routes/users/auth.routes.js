"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _auth = require("../../controllers/users/auth.controllers");
var _validateJWT = require("../../middlewares/validateJWT");
var router = (0, _express.Router)();

// Ruta para iniciar sesión
router.post('/login', _auth.login);

// Ruta para renovar el token
router.get('/login/renewtoken', _validateJWT.validateJWT, _auth.renewToken);
var _default = router;
exports["default"] = _default;