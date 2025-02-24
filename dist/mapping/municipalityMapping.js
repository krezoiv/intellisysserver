"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _mssql = _interopRequireDefault(require("mssql"));
var MunicipalityFieldsMappings = /*#__PURE__*/function () {
  function MunicipalityFieldsMappings() {
    (0, _classCallCheck2["default"])(this, MunicipalityFieldsMappings);
    this.fieldMunicipalityMappings = {
      idMunicipality: _mssql["default"].Int,
      idDepartment: _mssql["default"].Int,
      municipality: _mssql["default"].VarChar(30)
    };
  }
  (0, _createClass2["default"])(MunicipalityFieldsMappings, [{
    key: "getMappings",
    value: function getMappings() {
      return this.fieldMunicipalityMappings;
    }
  }]);
  return MunicipalityFieldsMappings;
}();
var _default = new MunicipalityFieldsMappings();
exports["default"] = _default;