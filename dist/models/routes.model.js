"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var RoutesModel = /*#__PURE__*/(0, _createClass2["default"])(function RoutesModel(_ref) {
  var idRoute = _ref.idRoute,
    routeName = _ref.routeName,
    idCampus = _ref.idCampus;
  (0, _classCallCheck2["default"])(this, RoutesModel);
  Object.assign(this, {
    idRoute: idRoute,
    routeName: routeName,
    idCampus: idCampus
  });
});
var _default = RoutesModel;
exports["default"] = _default;