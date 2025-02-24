"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _mssql = _interopRequireDefault(require("mssql"));
var DataCommissionDetailFieldsMappings = /*#__PURE__*/function () {
  function DataCommissionDetailFieldsMappings() {
    (0, _classCallCheck2["default"])(this, DataCommissionDetailFieldsMappings);
    this.fieldMappings = {
      idDataDetail: _mssql["default"].Int,
      reference: _mssql["default"].VarChar(75),
      idDataCommissionConcept: _mssql["default"].Int,
      description: _mssql["default"].VarChar(200),
      value: _mssql["default"].Decimal(18, 2),
      idCommissionType: _mssql["default"].Int,
      idDataBatch: _mssql["default"].Int
    };
  }
  (0, _createClass2["default"])(DataCommissionDetailFieldsMappings, [{
    key: "getMappings",
    value: function getMappings() {
      return this.fieldMappings;
    }
  }]);
  return DataCommissionDetailFieldsMappings;
}();
var _default = new DataCommissionDetailFieldsMappings();
exports["default"] = _default;