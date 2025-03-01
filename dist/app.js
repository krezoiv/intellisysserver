"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config"));
var _cors = _interopRequireDefault(require("cors"));
var _employees = _interopRequireDefault(require("./routes/employees/employees.routes"));
var _workPosition = _interopRequireDefault(require("./routes/employees/workPosition.routes"));
var _employeesType = _interopRequireDefault(require("./routes/employees/employeesType.routes"));
var _dlpAssignment = _interopRequireDefault(require("./routes/employees/dlpAssignment.routes"));
var _roles = _interopRequireDefault(require("./routes/employees/roles.routes"));
var _users = _interopRequireDefault(require("./routes/users/users.routes"));
var _campus = _interopRequireDefault(require("./routes/locations/campus.routes"));
var _routes = _interopRequireDefault(require("./routes/locations/routes.routes"));
var _auth = _interopRequireDefault(require("./routes/users/auth.routes"));
var _municipality = _interopRequireDefault(require("./routes/locations/municipality.routes"));
var _departments = _interopRequireDefault(require("./routes/locations/departments.routes"));
var _commissionData = _interopRequireDefault(require("./routes/commissions/commissionData.routes"));
var _dataCommissionConcept = _interopRequireDefault(require("./routes/commissions/dataCommissionConcept.routes"));
var _dataCommissionDetail = _interopRequireDefault(require("./routes/commissions/dataCommissionDetail.routes"));
var _commissionType = _interopRequireDefault(require("./routes/commissions/commissionType.routes"));
var _months = _interopRequireDefault(require("./routes/dates/months.routes"));
// Agrega esta línea
var app = (0, _express["default"])();
//settings
app.set('port', _config["default"].port);

//middlewares
app.use((0, _cors["default"])()); // Agrega esta línea para habilitar CORS
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_employees["default"]);
app.use(_workPosition["default"]);
app.use(_employeesType["default"]);
app.use(_dlpAssignment["default"]);
app.use(_roles["default"]);
app.use(_users["default"]);
app.use(_auth["default"]);
app.use(_campus["default"]);
app.use(_routes["default"]);
app.use(_municipality["default"]);
app.use(_departments["default"]);
app.use(_commissionData["default"]);
app.use(_dataCommissionConcept["default"]);
app.use(_dataCommissionDetail["default"]);
app.use(_commissionType["default"]);
app.use(_months["default"]);
var _default = app;
exports["default"] = _default;