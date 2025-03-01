"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var CommissionDataModel = /*#__PURE__*/(0, _createClass2["default"])(function CommissionDataModel(_ref) {
  var idDataBatch = _ref.idDataBatch,
    batchDataDate = _ref.batchDataDate,
    idMonth = _ref.idMonth,
    totalAmount = _ref.totalAmount,
    userName = _ref.userName;
  (0, _classCallCheck2["default"])(this, CommissionDataModel);
  Object.assign(this, {
    idDataBatch: idDataBatch,
    batchDataDate: batchDataDate,
    idMonth: idMonth,
    totalAmount: totalAmount,
    userName: userName
  });
});
var _default = CommissionDataModel;
exports["default"] = _default;