"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _mssql = _interopRequireDefault(require("mssql"));
var DataCommissionConceptMapping = /*#__PURE__*/function () {
  function DataCommissionConceptMapping() {
    (0, _classCallCheck2["default"])(this, DataCommissionConceptMapping);
    this.fieldMappings = {
      idDataCommissionConcept: _mssql["default"].Int,
      concept: _mssql["default"].VarChar(200),
      idCommissionType: _mssql["default"].Int
    };
  }
  (0, _createClass2["default"])(DataCommissionConceptMapping, [{
    key: "getMappings",
    value: function getMappings() {
      return this.fieldMappings;
    }
  }]);
  return DataCommissionConceptMapping;
}();
var _default = new DataCommissionConceptMapping();
exports["default"] = _default;