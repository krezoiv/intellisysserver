"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRoles = exports.createRole = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../../database");
var _express = require("express");
var _role = _interopRequireDefault(require("../../models/role.model"));
var _roleMapping = _interopRequireDefault(require("../../mapping/roleMapping"));
var _rolesQuerys = require("../../database/querys/rolesQuerys");
var _mssql = _interopRequireDefault(require("mssql"));
var _ref, _ref2;
var getRoles = function getRoles(_x, _x2) {
  return (_ref = _ref || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query(_rolesQuerys.roles_queries.getRolesList);
        case 6:
          result = _context.sent;
          res.json(result.recordset);
          _context.next = 14;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500).send("Error al obtener lista de rols " + _context.t0.message);
          console.error("Error al obtener lista de rols " + _context.t0.message);
        case 14:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }))).apply(this, arguments);
};
exports.getRoles = getRoles;
var createRole = function createRole(_x3, _x4) {
  return (_ref2 = _ref2 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var roleModel, pool, request, rolesMapping, fieldsRole, result, successMessage, errorMessage, _errorMessage;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          roleModel = new _role["default"](req.body);
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context2.sent;
          request = pool.request();
          rolesMapping = _roleMapping["default"].getMappings();
          for (fieldsRole in rolesMapping) {
            request.input(fieldsRole, rolesMapping[fieldsRole], roleModel[fieldsRole]);
          }

          // Ejecutar el procedimiento almacenado y capturar el resultado
          _context2.next = 10;
          return request.query(_rolesQuerys.roles_queries.createNewRole);
        case 10:
          result = _context2.sent;
          // Verificar si el procedimiento almacenado generó un mensaje de éxito
          if (result && result.recordset && result.recordset[0] && result.recordset[0].Message) {
            successMessage = result.recordset[0].Message;
            res.json({
              message: successMessage
            }); // Enviar el mensaje de éxito al cliente
          } else {
            res.json(roleModel); // Enviar el objeto roleModel si no hay mensaje de éxito
          }
          _context2.next = 17;
          break;
        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](1);
          if (_context2.t0.originalError) {
            // Si hay un error original, muestra el mensaje personalizado
            errorMessage = _context2.t0.originalError.message || "Error al crear el rol";
            console.error("Error al crear el rol:", _context2.t0);
            res.status(500).json({
              error: errorMessage
            });
          } else {
            // Muestra un mensaje de error genérico en caso de otro tipo de error
            _errorMessage = _context2.t0.message || "Error al crear el rol";
            console.error("Error al crear el rol:", _context2.t0);
            res.status(500).json({
              error: _errorMessage
            });
          }
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 14]]);
  }))).apply(this, arguments);
};
exports.createRole = createRole;