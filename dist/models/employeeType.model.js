"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
/**
 * Clase EmployeeTypeModel
 * 
 * Esta clase representa un modelo de datos para un tipo de empleado.
 */
var EmployeeTypeModel = /*#__PURE__*/(0, _createClass2["default"])(
// El constructor de la clase tipo de empleado  toma un objeto como argumento
// que contiene las propiedades proporcionadas dentro del constructror
function EmployeeTypeModel(_ref) {
  var idEmployeeType = _ref.idEmployeeType,
    employeeType = _ref.employeeType;
  (0, _classCallCheck2["default"])(this, EmployeeTypeModel);
  // Utilizamos Object.assign para asignar las propiedades del objeto argumento
  // a las propiedades de la instancia de la clase EmployeeTypeModel.
  Object.assign(this, {
    idEmployeeType: idEmployeeType,
    employeeType: employeeType
  });
}); // Exportamos la WorkPositionModel como un módulo.
var _default = EmployeeTypeModel;
exports["default"] = _default;