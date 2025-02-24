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
 * Clase EmployeeTypeFieldMappings
 * 
 * Esta clase define un mapeo de campos para el modelo de datos de tipo de empleado.
 */
var EmployeeTypeFieldMappings = /*#__PURE__*/function () {
  /**
   * Constructor de la clase EmployeeTypeFieldMappings.
   * 
   * Define el mapeo de campos para el modelo de tipo de empleado.
   */
  function EmployeeTypeFieldMappings() {
    (0, _classCallCheck2["default"])(this, EmployeeTypeFieldMappings);
    // Mapeo de campos para el modelo de tipo de empleado.
    this.fieldsEmployeeTypeMappings = {
      idEmployeeType: _mssql["default"].Int,
      employeeType: _mssql["default"].VarChar(25)
    };
  }

  /**
   * Método getMappings
   * 
   * Obtiene el mapeo de campos para el modelo de tipo de empleado.
   * @returns {object} - Un objeto que contiene el mapeo de campos.
   */
  (0, _createClass2["default"])(EmployeeTypeFieldMappings, [{
    key: "getMappings",
    value: function getMappings() {
      return this.fieldsEmployeeTypeMappings;
    }
  }]);
  return EmployeeTypeFieldMappings;
}(); // Exporta una instancia única de la clase EmployeeTypeFieldMappings.
var _default = new EmployeeTypeFieldMappings();
exports["default"] = _default;