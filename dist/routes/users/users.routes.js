"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _users = require("../../controllers/users/users.controllres");
var _validateJWT = require("../../middlewares/validateJWT");
var router = (0, _express.Router)();
router.get('/users', _users.getUsers);
router.post('/users', _users.newUser);
router.put('/userDeactivate/:idUser', _users.deactivateUser);
router.put('/resetPassWord/:idUser', _users.resetUserPassword);

//router.post('/singin', singin);
var _default = router;
exports["default"] = _default;