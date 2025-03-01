"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMunicipalityById = exports.getMunicipalitiesByIdDepartment = exports.getListMunicipalityOnCampus = exports.getListMunicipality = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../../database");
var _locationsQuerys = require("../../database/querys/locationsQuerys");
var _ref, _ref2, _ref3, _ref4;
/**
 * Controlador getListMunicipality
 * 
 * Este controlador obtiene una lista de municipios desde la base de datos y responde con los datos obtenidos en formato JSON.
 * 
 * @param {object} req - El objeto de solicitud HTTP.
 * @param {object} res - El objeto de respuesta HTTP.
 */
var getListMunicipality = function getListMunicipality(_x, _x2) {
  return (_ref = _ref || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, resultMunicipality;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query(_locationsQuerys.municipalities_queries.getListMunicipalities);
        case 6:
          resultMunicipality = _context.sent;
          res.json(resultMunicipality.recordset);
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500).send("Error al obtener Sedes " + _context.t0.message);
          console.error(_context.t0);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }))).apply(this, arguments);
};

/**
 * Controlador getListMunicipalityOnCampus
 * 
 * Este controlador obtiene una lista de municipios desde la base de datos que corresponde a las sedesy responde con los datos obtenidos en formato JSON.
 * 
 * @param {object} req - El objeto de solicitud HTTP.
 * @param {object} res - El objeto de respuesta HTTP.
 */
exports.getListMunicipality = getListMunicipality;
var getListMunicipalityOnCampus = function getListMunicipalityOnCampus(_x3, _x4) {
  return (_ref2 = _ref2 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var pool, resultMunicipality;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context2.sent;
          _context2.next = 6;
          return pool.request().query(_locationsQuerys.municipalities_queries.getMunicipalitiesOnCampus);
        case 6:
          resultMunicipality = _context2.sent;
          res.json(resultMunicipality.recordset);
          _context2.next = 14;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          res.status(500).send("Error al obtener Sedes " + _context2.t0.message);
          console.error(_context2.t0);
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }))).apply(this, arguments);
};

/**
 * Controlador getMunicipalitiesByIdDepartment
 * 
 * Este controlador obtiene una lista de municipios por ID de departamento desde la base de datos y responde con los datos obtenidos en formato JSON.
 * 
 * @param {object} req - El objeto de solicitud HTTP que puede contener parámetros, como 'idDepartment'.
 * @param {object} res - El objeto de respuesta HTTP.
 */
exports.getListMunicipalityOnCampus = getListMunicipalityOnCampus;
var getMunicipalitiesByIdDepartment = function getMunicipalitiesByIdDepartment(_x5, _x6) {
  return (_ref3 = _ref3 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var idDepartment, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          idDepartment = req.params.idDepartment;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context3.sent;
          _context3.next = 7;
          return pool.request().input('idDepartment', _database.sql.Int, idDepartment).query(_locationsQuerys.municipalities_queries.getMunicipalitiesListByDepartments);
        case 7:
          result = _context3.sent;
          res.json(result.recordset);
          _context3.next = 15;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](1);
          console.error(_context3.t0);
          res.status(500).json({
            message: 'Error al obtener lista de Municipios'
          });
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 11]]);
  }))).apply(this, arguments);
};
exports.getMunicipalitiesByIdDepartment = getMunicipalitiesByIdDepartment;
var getMunicipalityById = function getMunicipalityById(_x7, _x8) {
  return (_ref4 = _ref4 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var idMunicipality, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          idMunicipality = req.params.idMunicipality; // Ahora estamos obteniendo el idDepartment desde el cuerpo de la solicitud (req.body).
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context4.sent;
          _context4.next = 7;
          return pool.request().input('idMunicipality', _database.sql.Int, idMunicipality).query(_locationsQuerys.municipalities_queries.getMunicipalityById);
        case 7:
          result = _context4.sent;
          res.json(result.recordset);
          _context4.next = 15;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](1);
          console.error(_context4.t0);
          res.status(500).json({
            message: 'Error al obtener lista de Municipios'
          });
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 11]]);
  }))).apply(this, arguments);
};
exports.getMunicipalityById = getMunicipalityById;