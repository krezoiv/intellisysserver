"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _mssql = _interopRequireDefault(require("mssql"));
var DepartmentFieldsMappings = /*#__PURE__*/function () {
  function DepartmentFieldsMappings() {
    (0, _classCallCheck2["default"])(this, DepartmentFieldsMappings);
    this.fieldDepartmentMappings = {
      idDepartment: _mssql["default"].Int,
      department: _mssql["default"].VarChar(30)
    };
  }
  (0, _createClass2["default"])(DepartmentFieldsMappings, [{
    key: "getMappings",
    value: function getMappings() {
      return this.fieldDepartmentMappings;
    }
  }]);
  return DepartmentFieldsMappings;
}();
var _default = new DepartmentFieldsMappings();
exports["default"] = _default;