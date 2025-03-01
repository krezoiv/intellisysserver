"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _mssql = _interopRequireDefault(require("mssql"));
/**
 * @class EmployeesFieldMappings
 * @description Clase que define los mapeos de campos SQL para la tabla de empleados.
 */
var EmployeesFieldMappings = /*#__PURE__*/function () {
  /**
   * @constructor
   * @description Constructor de la clase que inicializa los mapeos de campos SQL.
   */
  function EmployeesFieldMappings() {
    (0, _classCallCheck2["default"])(this, EmployeesFieldMappings);
    // Define los mapeos de campos SQL para varios campos de la tabla de empleados
    this.fieldMappings = {
      code: _mssql["default"].VarChar(15),
      firstName: _mssql["default"].VarChar(50),
      secondName: _mssql["default"].VarChar(50),
      firstLastName: _mssql["default"].VarChar(50),
      secondLastName: _mssql["default"].VarChar(50),
      hireDate: _mssql["default"].Date,
      hireEndDate: _mssql["default"].Date,
      idCampus: _mssql["default"].VarChar(3),
      idStatus: _mssql["default"].Int,
      idWorkposition: _mssql["default"].Int,
      idMunicipality: _mssql["default"].Int,
      addressReference: _mssql["default"].VarChar(200),
      BACaccount: _mssql["default"].BigInt,
      BAMaccount: _mssql["default"].BigInt,
      dpi: _mssql["default"].BigInt
    };
  }

  /**
   * @method getMappings
   * @description Método que devuelve los mapeos de campos SQL definidos en la clase.
   * @returns {Object} - Un objeto que contiene los mapeos de campos SQL.
   */
  (0, _createClass2["default"])(EmployeesFieldMappings, [{
    key: "getMappings",
    value: function getMappings() {
      return this.fieldMappings;
    }
  }]);
  return EmployeesFieldMappings;
}(); // Exporta una instancia de la clase EmployeesFieldMappings
var _default = new EmployeesFieldMappings();
exports["default"] = _default;