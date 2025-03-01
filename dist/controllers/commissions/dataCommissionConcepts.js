"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDataCommissionConcept = exports.newDataCommissionConcept = exports.getCommissionConceptById = exports.getCommissionConceptByCommissionType = exports.getAllDataCommissionConcepts = exports.deleteDataCommissionConcept = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../../database");
var _dataCommissionConcept = _interopRequireDefault(require("../../models/dataCommissionConcept.model"));
var _dataCommissionConceptMapping = _interopRequireDefault(require("../../mapping/dataCommissionConceptMapping"));
var _commissionsQuerys = require("../../database/querys/commissionsQuerys");
var _ref, _ref2, _ref3, _ref4, _ref5, _ref6;
var newDataCommissionConcept = function newDataCommissionConcept(_x, _x2) {
  return (_ref = _ref || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var dataCommissionConceptModel, pool, request, dataCommissionConceptMapping, fieldsdataCommissionConcept, result, successMessage, errorMessage, _errorMessage;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          dataCommissionConceptModel = new _dataCommissionConcept["default"](req.body);
          _context.prev = 1;
          _context.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context.sent;
          request = pool.request();
          dataCommissionConceptMapping = _dataCommissionConceptMapping["default"].getMappings();
          for (fieldsdataCommissionConcept in dataCommissionConceptModel) {
            request.input(fieldsdataCommissionConcept, dataCommissionConceptMapping[fieldsdataCommissionConcept], dataCommissionConceptModel[fieldsdataCommissionConcept]);
          }
          _context.next = 10;
          return request.query(_commissionsQuerys.dataCommissionConcept_queries.newDataCommissionConcept);
        case 10:
          result = _context.sent;
          if (result && result.recordset && result.recordset[0] && result.recordset[0].Message) {
            successMessage = result.recordset[0].Message;
            res.json({
              message: successMessage
            });
          } else {
            res.json(dataCommissionConceptModel);
          }
          _context.next = 17;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](1);
          if (_context.t0.originalError) {
            errorMessage = _context.t0.originalError.message || "Error al crear nuevo concepto de comisiones";
            console.error("Error al crear nuevo concepto de comisiones", _context.t0);
            res.status(500).json({
              error: errorMessage
            });
          } else {
            _errorMessage = _context.t0.message || "Error al crear nuevo concepto de comisiones";
            console.error("Error al crear nuevo concepto de comisiones: ", _context.t0);
            res.status(500).json({
              error: _errorMessage
            });
          }
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 14]]);
  }))).apply(this, arguments);
};
exports.newDataCommissionConcept = newDataCommissionConcept;
var updateDataCommissionConcept = function updateDataCommissionConcept(_x3, _x4) {
  return (_ref2 = _ref2 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var idDataCommissionConcept, dataCommissionConceptModel, pool, request, dataCommissionConceptMapping, fieldsdataCommissionConcept, result, errorMessage, _errorMessage2;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          idDataCommissionConcept = req.params.idDataCommissionConcept;
          dataCommissionConceptModel = new _dataCommissionConcept["default"](req.body);
          _context2.prev = 2;
          _context2.next = 5;
          return (0, _database.getConnection)();
        case 5:
          pool = _context2.sent;
          request = pool.request();
          dataCommissionConceptMapping = _dataCommissionConceptMapping["default"].getMappings();
          request.input("idDataCommissionConcept", dataCommissionConceptMapping["idDataCommissionConcept"], idDataCommissionConcept);
          for (fieldsdataCommissionConcept in dataCommissionConceptModel) {
            request.input(fieldsdataCommissionConcept, dataCommissionConceptMapping[fieldsdataCommissionConcept], dataCommissionConceptModel[fieldsdataCommissionConcept]);
          }
          _context2.next = 12;
          return request.query(_commissionsQuerys.dataCommissionConcept_queries.updateDataCommissionConcecpt);
        case 12:
          result = _context2.sent;
          if (result && result.rowsAffected && result.rowsAffected[0] > 0) {
            res.json({
              message: "Concepto de comisiones actualizado exitosamente"
            });
          } else {
            res.status(404).json({
              error: "No se encontró el concepto de comisiones"
            });
          }
          _context2.next = 19;
          break;
        case 16:
          _context2.prev = 16;
          _context2.t0 = _context2["catch"](2);
          if (_context2.t0.originalError) {
            errorMessage = _context2.t0.originalError.message || "Error al actualizar el concepto de comisiones";
            console.error("Error al actualizar el concepto de comisiones", _context2.t0);
            res.status(500).json({
              error: errorMessage
            });
          } else {
            _errorMessage2 = _context2.t0.message || "Error al actualizar el concepto de comisiones";
            console.error("Error al actualizar el concepto de comisiones: ", _context2.t0);
            res.status(500).json({
              error: _errorMessage2
            });
          }
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 16]]);
  }))).apply(this, arguments);
};
exports.updateDataCommissionConcept = updateDataCommissionConcept;
var getAllDataCommissionConcepts = function getAllDataCommissionConcepts(_x5, _x6) {
  return (_ref3 = _ref3 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var pool, result, dataCommissionConcepts;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context3.sent;
          _context3.next = 6;
          return pool.request().execute(_commissionsQuerys.dataCommissionConcept_queries.getAllDataCommissionsConcepts);
        case 6:
          result = _context3.sent;
          dataCommissionConcepts = result.recordset;
          res.json(dataCommissionConcepts);
          _context3.next = 15;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          console.error("Error al obtener los conceptos de comisiones:", _context3.t0);
          res.status(500).json({
            error: "Error al obtener los conceptos de comisiones"
          });
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 11]]);
  }))).apply(this, arguments);
};
exports.getAllDataCommissionConcepts = getAllDataCommissionConcepts;
var deleteDataCommissionConcept = function deleteDataCommissionConcept(_x7, _x8) {
  return (_ref4 = _ref4 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var idDataCommissionConcept, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          idDataCommissionConcept = req.params.idDataCommissionConcept;
          _context4.prev = 1;
          _context4.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context4.sent;
          _context4.next = 7;
          return pool.request().input("idDataCommissionConcept", idDataCommissionConcept).execute(_commissionsQuerys.dataCommissionConcept_queries.deleteDataCommissionConcept);
        case 7:
          result = _context4.sent;
          if (result.returnValue === 0) {
            res.json({
              message: "Concepto de comisiones eliminado exitosamente"
            });
          } else {
            res.status(404).json({
              error: "No se encontró el concepto de comisiones"
            });
          }
          _context4.next = 15;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](1);
          console.error("Error al eliminar el concepto de comisiones:", _context4.t0);
          res.status(500).json({
            error: "Error al eliminar el concepto de comisiones"
          });
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 11]]);
  }))).apply(this, arguments);
};
exports.deleteDataCommissionConcept = deleteDataCommissionConcept;
var getCommissionConceptByCommissionType = function getCommissionConceptByCommissionType(_x9, _x10) {
  return (_ref5 = _ref5 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var idCommissionType, pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          idCommissionType = req.params.idCommissionType;
          _context5.prev = 1;
          _context5.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context5.sent;
          _context5.next = 7;
          return pool.request().input('idCommissionType', _database.sql.Int, idCommissionType).query(_commissionsQuerys.dataCommissionConcept_queries.getCommissionConceptByCommissionType);
        case 7:
          result = _context5.sent;
          res.json(result.recordset);
          _context5.next = 15;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](1);
          console.error(err);
          res.status(500).json({
            message: 'Error al obtener lista de conceptos'
          });
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 11]]);
  }))).apply(this, arguments);
};
exports.getCommissionConceptByCommissionType = getCommissionConceptByCommissionType;
var getCommissionConceptById = function getCommissionConceptById(_x11, _x12) {
  return (_ref6 = _ref6 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var idDataCommissionConcept, pool, result;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          idDataCommissionConcept = req.params.idDataCommissionConcept;
          _context6.prev = 1;
          _context6.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context6.sent;
          _context6.next = 7;
          return pool.request().input('idDataCommissionConcept', _database.sql.Int, idDataCommissionConcept).query(_commissionsQuerys.dataCommissionConcept_queries.getCommissionConceptById);
        case 7:
          result = _context6.sent;
          res.json(result.recordset);
          _context6.next = 15;
          break;
        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](1);
          console.error(_context6.t0);
          res.status(500).json({
            message: 'Error al obtener lista de conceptos'
          });
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 11]]);
  }))).apply(this, arguments);
};
exports.getCommissionConceptById = getCommissionConceptById;