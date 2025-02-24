"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _mssql = _interopRequireDefault(require("mssql"));
var CommisionTypeFieldsMappings = /*#__PURE__*/function () {
  function CommisionTypeFieldsMappings() {
    (0, _classCallCheck2["default"])(this, CommisionTypeFieldsMappings);
    this.fieldMappings = {
      idCommissionType: _mssql["default"].Int,
      commissionType: _mssql["default"].VarChar(50)
    };
  }
  (0, _createClass2["default"])(CommisionTypeFieldsMappings, [{
    key: "getMappings",
    value: function getMappings() {
      return this.fieldMappings;
    }
  }]);
  return CommisionTypeFieldsMappings;
}();
var _default = new CommisionTypeFieldsMappings();
exports["default"] = _default;