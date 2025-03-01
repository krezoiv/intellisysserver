"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var RoleModel = /*#__PURE__*/(0, _createClass2["default"])(function RoleModel(_ref) {
  var idRole = _ref.idRole,
    roleName = _ref.roleName;
  (0, _classCallCheck2["default"])(this, RoleModel);
  Object.assign(this, {
    idRole: idRole,
    roleName: roleName
  });
});
var _default = RoleModel;
exports["default"] = _default;