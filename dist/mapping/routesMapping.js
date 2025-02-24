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
var RoutesFieldsMappings = /*#__PURE__*/function () {
  /**
  * @constructor
  * @description Constructor de la clase que inicializa los mapeos de campos SQL.
  */
  function RoutesFieldsMappings() {
    (0, _classCallCheck2["default"])(this, RoutesFieldsMappings);
    // Define los mapeos de campos SQL para varios campos de la tabla workPosition (cargo)
    this.fieldsRoutesMappings = {
      idRoute: _mssql["default"].Int,
      routeName: _mssql["default"].VarChar(50),
      idCampus: _mssql["default"].VarChar(3)
    };
  }
  (0, _createClass2["default"])(RoutesFieldsMappings, [{
    key: "getMappings",
    value:
    /**
     * @method getMappings
     * @description Método que devuelve los mapeos de campos SQL definidos en la clase.
     * @returns {Object} - Un objeto que contiene los mapeos de campos SQL.
     */
    function getMappings() {
      return this.fieldsRoutesMappings;
    }
  }]);
  return RoutesFieldsMappings;
}();
;

// Exporta una instancia de la clase WorkPositionFieldMappings
var _default = new RoutesFieldsMappings();
exports["default"] = _default;