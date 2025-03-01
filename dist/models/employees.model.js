"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var EmployeeModel = /*#__PURE__*/(0, _createClass2["default"])(function EmployeeModel(_ref) {
  var idEmployee = _ref.idEmployee,
    code = _ref.code,
    firstName = _ref.firstName,
    secondName = _ref.secondName,
    firstLastName = _ref.firstLastName,
    secondLastName = _ref.secondLastName,
    hireDate = _ref.hireDate,
    hireEndDate = _ref.hireEndDate,
    idCampus = _ref.idCampus,
    idStatus = _ref.idStatus,
    idWorkposition = _ref.idWorkposition,
    idMunicipality = _ref.idMunicipality,
    addressReference = _ref.addressReference,
    BACaccount = _ref.BACaccount,
    BAMaccount = _ref.BAMaccount,
    dpi = _ref.dpi;
  (0, _classCallCheck2["default"])(this, EmployeeModel);
  Object.assign(this, {
    idEmployee: idEmployee,
    code: code,
    firstName: firstName,
    secondName: secondName,
    firstLastName: firstLastName,
    secondLastName: secondLastName,
    hireDate: hireDate,
    hireEndDate: hireEndDate,
    idCampus: idCampus,
    idStatus: idStatus,
    idWorkposition: idWorkposition,
    idMunicipality: idMunicipality,
    addressReference: addressReference,
    BACaccount: BACaccount,
    BAMaccount: BAMaccount,
    dpi: dpi
  });
});
var _default = EmployeeModel;
exports["default"] = _default;