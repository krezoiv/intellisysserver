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
 * @class WorkPositiondMappings
 * @description Clase que define los mapeos de campos SQL para la tabla de las workPosition (cargo)
 */
var RolesFieldsMappings = /*#__PURE__*/function () {
  /**
  * @constructor
  * @description Constructor de la clase que inicializa los mapeos de campos SQL.
  */
  function RolesFieldsMappings() {
    (0, _classCallCheck2["default"])(this, RolesFieldsMappings);
    // Define los mapeos de campos SQL para varios campos de la tabla workPosition (cargo)
    this.fieldsRolesMappings = {
      idRole: _mssql["default"].Int,
      roleName: _mssql["default"].VarChar(15)
    };
  }
  (0, _createClass2["default"])(RolesFieldsMappings, [{
    key: "getMappings",
    value:
    /**
     * @method getMappings
     * @description Método que devuelve los mapeos de campos SQL definidos en la clase.
     * @returns {Object} - Un objeto que contiene los mapeos de campos SQL.
     */
    function getMappings() {
      return this.fieldsRolesMappings;
    }
  }]);
  return RolesFieldsMappings;
}();
;

// Exporta una instancia de la clase WorkPositionFieldMappings
var _default = new RolesFieldsMappings();
exports["default"] = _default;