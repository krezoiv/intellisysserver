"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _mssql = _interopRequireDefault(require("mssql"));
var MonthFieldMappings = /*#__PURE__*/function () {
  function MonthFieldMappings() {
    (0, _classCallCheck2["default"])(this, MonthFieldMappings);
    this.fieldMappings = {
      idMonth: _mssql["default"].Int,
      monthName: _mssql["default"].VarChar(50)
    };
  }
  (0, _createClass2["default"])(MonthFieldMappings, [{
    key: "getMappings",
    value: function getMappings() {
      return this.fieldMappings;
    }
  }]);
  return MonthFieldMappings;
}();
var _default = new MonthFieldMappings();
exports["default"] = _default;