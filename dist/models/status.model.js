"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var StatusModel = /*#__PURE__*/(0, _createClass2["default"])(function StatusModel(_ref) {
  var idStatus = _ref.idStatus,
    statusName = _ref.statusName;
  (0, _classCallCheck2["default"])(this, StatusModel);
  this.idStatus = idStatus;
  this.statusName = statusName;
});
var _default = StatusModel;
exports["default"] = _default;