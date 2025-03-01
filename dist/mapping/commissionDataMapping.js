"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _mssql = _interopRequireDefault(require("mssql"));
var CommissionDataFieldsMappings = /*#__PURE__*/function () {
  function CommissionDataFieldsMappings() {
    (0, _classCallCheck2["default"])(this, CommissionDataFieldsMappings);
    this.fieldMappings = {
      idDataBatch: _mssql["default"].Int,
      batchDataDate: _mssql["default"].Date,
      idMonth: _mssql["default"].Int,
      totalAmount: _mssql["default"].Decimal(18, 2),
      userName: _mssql["default"].VarChar(50)
    };
  }
  (0, _createClass2["default"])(CommissionDataFieldsMappings, [{
    key: "getMappings",
    value: function getMappings() {
      return this.fieldMappings;
    }
  }]);
  return CommissionDataFieldsMappings;
}();
var _default = new CommissionDataFieldsMappings();
exports["default"] = _default;