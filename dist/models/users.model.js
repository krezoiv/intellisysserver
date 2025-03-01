"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var UsuariosModel = /*#__PURE__*/(0, _createClass2["default"])(function UsuariosModel(_ref) {
  var idUser = _ref.idUser,
    userName = _ref.userName,
    password = _ref.password,
    idRole = _ref.idRole,
    idStatus = _ref.idStatus,
    idEmployee = _ref.idEmployee,
    userCode = _ref.userCode;
  (0, _classCallCheck2["default"])(this, UsuariosModel);
  // Asigna las propiedades directamente desde los argumentos usando desestructuración
  Object.assign(this, {
    idUser: idUser,
    userName: userName,
    password: password,
    idRole: idRole,
    idStatus: idStatus,
    idEmployee: idEmployee,
    userCode: userCode
  });
});
var _default = UsuariosModel;
exports["default"] = _default;