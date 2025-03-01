"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _database = require("../database");
var UsersFieldMapping = /*#__PURE__*/function () {
  function UsersFieldMapping() {
    (0, _classCallCheck2["default"])(this, UsersFieldMapping);
    this.fieldMappings = {
      idUser: _database.sql.Int,
      userName: _database.sql.VarChar(20),
      password: _database.sql.VarChar(100),
      idRole: _database.sql.Int,
      idStatus: _database.sql.Int,
      idEmployee: _database.sql.Int,
      userCode: _database.sql.VarChar(15)
    };
  }
  (0, _createClass2["default"])(UsersFieldMapping, [{
    key: "getMappings",
    value: function getMappings() {
      return this.fieldMappings;
    }
  }]);
  return UsersFieldMapping;
}();
var _default = new UsersFieldMapping();
exports["default"] = _default;