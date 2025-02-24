"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWorkPositionById = exports.getWorkPositionByEmployeesType = exports.getListWorkPosition = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../../database");
var _workPositionQuerys = require("../../database/querys/workPositionQuerys");
var _ref, _ref2, _ref3;
/**
 * Controlador getListWorkPosition
 * 
 * Este controlador maneja la solicitud para obtener una lista de posiciones de trabajo.
 * Responde con la lista de posiciones de trabajo en formato JSON o un mensaje de error en caso de fallo.
 * 
 * @param {object} req - El objeto de solicitud HTTP.
 * @param {object} res - El objeto de respuesta HTTP.
 */
var getListWorkPosition = function getListWorkPosition(_x, _x2) {
  return (_ref = _ref || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, resultListWorkPosition;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query(_workPositionQuerys.workPosition_queries.getListWorkPosition);
        case 6:
          resultListWorkPosition = _context.sent;
          // Responder con los datos obtenidos en formato JSON.
          res.json(resultListWorkPosition.recordset);
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          // En caso de error, responder con un mensaje de error y el mensaje de error original.
          res.status(500).send("Error al obtener Cargo " + _context.t0.message);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }))).apply(this, arguments);
};
exports.getListWorkPosition = getListWorkPosition;
var getWorkPositionByEmployeesType = function getWorkPositionByEmployeesType(_x3, _x4) {
  return (_ref2 = _ref2 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var idEmployeeType, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          idEmployeeType = req.params.idEmployeeType;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input('idEmployeeType', _database.sql.Int, idEmployeeType).query(_workPositionQuerys.workPosition_queries.getWorkPositionByEmployee);
        case 7:
          result = _context2.sent;
          res.json(result.recordset);
          _context2.next = 15;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](1);
          console.error(_context2.t0);
          res.status(500).json({
            message: 'Error al obtner lista de puestos'
          });
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 11]]);
  }))).apply(this, arguments);
};
exports.getWorkPositionByEmployeesType = getWorkPositionByEmployeesType;
var getWorkPositionById = function getWorkPositionById(_x5, _x6) {
  return (_ref3 = _ref3 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var idWorkposition, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          idWorkposition = req.params.idWorkposition;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context3.sent;
          _context3.next = 7;
          return pool.request().input('idWorkposition', _database.sql.Int, idWorkposition).query(_workPositionQuerys.workPosition_queries.getWorkPositionById);
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
            message: 'Error al obtener lista de puestos de trabajo'
          });
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 11]]);
  }))).apply(this, arguments);
};
exports.getWorkPositionById = getWorkPositionById;