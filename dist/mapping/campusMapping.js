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
var CampusFieldMappings = /*#__PURE__*/function () {
  /**
   * @constructor
   * @description Constructor de la clase que inicializa los mapeos de campos SQL.
   */
  function CampusFieldMappings() {
    (0, _classCallCheck2["default"])(this, CampusFieldMappings);
    // Define los mapeos de campos SQL para varios campos de la tabla de empleados
    this.fieldMappings = {
      idCampus: _mssql["default"].VarChar(3),
      campusName: _mssql["default"].VarChar(25),
      idMunicipality: _mssql["default"].Int
    };
  }

  /**
   * @method getMappings
   * @description Método que devuelve los mapeos de campos SQL definidos en la clase.
   * @returns {Object} - Un objeto que contiene los mapeos de campos SQL.
   */
  (0, _createClass2["default"])(CampusFieldMappings, [{
    key: "getMappings",
    value: function getMappings() {
      return this.fieldMappings;
    }
  }]);
  return CampusFieldMappings;
}(); // Exporta una instancia de la clase EmployeesFieldMappings
var _default = new CampusFieldMappings();
exports["default"] = _default;