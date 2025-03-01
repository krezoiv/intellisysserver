"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var MonthModel = /*#__PURE__*/(0, _createClass2["default"])(function MonthModel(_ref) {
  var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
    idMonth = _ref2[0],
    monthName = _ref2[1];
  (0, _classCallCheck2["default"])(this, MonthModel);
  Object.assign(this, {
    idMonth: idMonth,
    monthName: monthName
  });
});
var _default = MonthModel;
exports["default"] = _default;