"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCampusByEmployee = exports.geAllCampus = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../../database");
var _campusQuerys = require("../../database/querys/campusQuerys");
var _employeesMapping = _interopRequireDefault(require("../../mapping/employeesMapping"));
var _ref, _ref2;
/**
 * getCampus: Una función asíncrona que obtiene información sobre campus y responde con los datos obtenidos o un mensaje de error.
 * 
 * @param {object} req - El objeto de solicitud HTTP.
 * @param {object} res - El objeto de respuesta HTTP.
 */
var geAllCampus = function geAllCampus(_x, _x2) {
  return (_ref = _ref || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, resultCampus;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query(_campusQuerys.campus_queries.getCampus);
        case 6:
          resultCampus = _context.sent;
          // Responder con los datos obtenidos en formato JSON.
          res.json(resultCampus.recordset);
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          // En caso de error, responder con un mensaje de error y el mensaje de error original.
          res.status(500).send("Error al obtener Sedes " + _context.t0.message);
          console.log(_context.t0);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }))).apply(this, arguments);
};
exports.geAllCampus = geAllCampus;
var getCampusByEmployee = function getCampusByEmployee(_x3, _x4) {
  return (_ref2 = _ref2 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, code, idCampus, employeeMapping, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, code = _req$body.code, idCampus = _req$body.idCampus;
          employeeMapping = _employeesMapping["default"].getMappings(); // Llama a getMappings
          _context2.next = 5;
          return (0, _database.getConnection)();
        case 5:
          pool = _context2.sent;
          _context2.next = 8;
          return pool.request().input('code', employeeMapping.code, code).input('idCampus', employeeMapping.idCampus, idCampus).query(_campusQuerys.campus_queries.getCampusByEmployee);
        case 8:
          result = _context2.sent;
          res.json(result.recordset);
          _context2.next = 16;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);
          res.status(500).json({
            message: 'Error al obtener lista de Municipios'
          });
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 12]]);
  }))).apply(this, arguments);
};
exports.getCampusByEmployee = getCampusByEmployee;