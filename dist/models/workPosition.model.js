"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
/**
 * Clase WorkPosistionModel
 * 
 * Esta clase representa un modelo de datos para una posición de trabajo.
 * Puede utilizarse como una plantilla base para representar información relacionada con posición de trabajo.
 */
var WorkPositionModel = /*#__PURE__*/(0, _createClass2["default"])(
// El constructor de la clase WorkPositionModel toma un objeto como argumento
// que contiene las propiedades proporcionadas dentro del constructror
function WorkPositionModel(_ref) {
  var idWorkposition = _ref.idWorkposition,
    workPosition = _ref.workPosition,
    idEmployeeType = _ref.idEmployeeType;
  (0, _classCallCheck2["default"])(this, WorkPositionModel);
  // Utilizamos Object.assign para asignar las propiedades del objeto argumento
  // a las propiedades de la instancia de la clase WorkPositionModel.
  Object.assign(this, {
    idWorkposition: idWorkposition,
    workPosition: workPosition,
    idEmployeeType: idEmployeeType
  });
}); // Exportamos la WorkPositionModel como un módulo.
var _default = WorkPositionModel;
exports["default"] = _default;