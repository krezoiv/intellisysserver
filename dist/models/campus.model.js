"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
/**
 * Clase CampusModel
 * 
 * Esta clase representa un modelo de datos para un campus.
 * Puede utilizarse como una plantilla base para representar información relacionada con campus.
 */
var CampusModel = /*#__PURE__*/(0, _createClass2["default"])(
// El constructor de la clase CampusModel toma un objeto como argumento
// que contiene las propiedades idCampus y campusName.
function CampusModel(_ref) {
  var idCampus = _ref.idCampus,
    campusName = _ref.campusName,
    idMunicipality = _ref.idMunicipality;
  (0, _classCallCheck2["default"])(this, CampusModel);
  // Utilizamos Object.assign para asignar las propiedades del objeto argumento
  // a las propiedades de la instancia de la clase CampusModel.
  Object.assign(this, {
    idCampus: idCampus,
    campusName: campusName,
    idMunicipality: idMunicipality
  });
}); // Exportamos la clase CampusModel como un módulo.
var _default = CampusModel;
exports["default"] = _default;