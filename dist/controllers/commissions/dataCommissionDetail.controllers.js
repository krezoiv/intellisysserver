"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDataCommissionDetail = exports.newDataCommissionDetail = exports.getLastCommissionDataDetails = exports.getCommissionDetailById = exports.deleteDataCommissionDetail = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../../database");
var _dataCommissionDetail = _interopRequireDefault(require("../../models/dataCommissionDetail.model"));
var _dataCommissionDetailMapping = _interopRequireDefault(require("../../mapping/dataCommissionDetailMapping"));
var _commissionsQuerys = require("../../database/querys/commissionsQuerys");
var _ref, _ref2, _ref3, _ref4, _ref5;
var newDataCommissionDetail = function newDataCommissionDetail(_x, _x2) {
  return (_ref = _ref || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var dataCommissionDetailModel, pool, request, dataCommissionDetailMapping, fieldsdataCommissionDetail, result, successMessage, errorMessage, _errorMessage;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          dataCommissionDetailModel = new _dataCommissionDetail["default"](req.body);
          _context.prev = 1;
          _context.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context.sent;
          request = pool.request();
          dataCommissionDetailMapping = _dataCommissionDetailMapping["default"].getMappings();
          for (fieldsdataCommissionDetail in dataCommissionDetailModel) {
            request.input(fieldsdataCommissionDetail, dataCommissionDetailMapping[fieldsdataCommissionDetail], dataCommissionDetailModel[fieldsdataCommissionDetail]);
          }
          _context.next = 10;
          return request.query(_commissionsQuerys.dataCommissionDetail_queries.newDataCommissionDetail);
        case 10:
          result = _context.sent;
          if (result && result.recordset && result.recordset[0] && result.recordset[0].Message) {
            successMessage = result.recordset[0].Message;
            res.json({
              message: successMessage
            });
          } else {
            res.json(dataCommissionDetailModel);
          }
          _context.next = 17;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](1);
          if (_context.t0.originalError) {
            console.error("Error al ingresar detalle de comisiones al lote:", _context.t0);
            errorMessage = _context.t0.originalError.message || "Error al ingresar detalle de comisiones al lote";
            console.error("Error al ingresar detalle de comisiones al lote", _context.t0);
            res.status(500).json({
              error: errorMessage
            });
          } else {
            _errorMessage = _context.t0.message || "Error al ingresar detalle de comisiones al lote";
            console.error("Error al ingresar detalle de comisiones al lote: ", _context.t0);
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
exports.newDataCommissionDetail = newDataCommissionDetail;
var getLastCommissionDataDetails = function getLastCommissionDataDetails(_x3, _x4) {
  return (_ref2 = _ref2 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context2.sent;
          _context2.next = 6;
          return pool.request().query(_commissionsQuerys.dataCommissionDetail_queries.getLastaCommissionDataDetails);
        case 6:
          result = _context2.sent;
          res.json(result.recordset);
          _context2.next = 14;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          console.error(err);
          res.status(500).json({
            message: "Error al obtner detalle"
          });
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }))).apply(this, arguments);
};
exports.getLastCommissionDataDetails = getLastCommissionDataDetails;
var deleteDataCommissionDetail = function deleteDataCommissionDetail(_x5, _x6) {
  return (_ref3 = _ref3 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var idDataDetail, pool, result, successMessage;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          idDataDetail = req.params.idDataDetail;
          _context3.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context3.sent;
          _context3.next = 7;
          return pool.request().input("idDataDetail", _database.sql.Int, idDataDetail).query(_commissionsQuerys.dataCommissionDetail_queries.deleteDataCommissionDetail);
        case 7:
          result = _context3.sent;
          if (result && result.recordset && result.recordset[0] && result.recordset[0].Message) {
            successMessage = result.recordset[0].Message;
            res.json({
              message: successMessage
            }); // Enviar el mensaje de éxito al cliente
          } else {
            res.json("Error al eliminar al eliminar detalle"); // Enviar el objeto roleModel si no hay mensaje de éxito
          }
          _context3.next = 15;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          console.error("Error al eliminar al eliminar detalle", _context3.t0);
          res.status(500).json({
            error: "Error al eliminar al eliminar detalle " + _context3.t0.message
          });
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 11]]);
  }))).apply(this, arguments);
};
exports.deleteDataCommissionDetail = deleteDataCommissionDetail;
var updateDataCommissionDetail = function updateDataCommissionDetail(_x7, _x8) {
  return (_ref4 = _ref4 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var idDataDetail, updateDataDetail, pool, request, detailMapping, fieldsDetail, result, successMessage, errorMessage, _errorMessage2;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          idDataDetail = req.params.idDataDetail;
          updateDataDetail = req.body;
          _context4.prev = 2;
          _context4.next = 5;
          return (0, _database.getConnection)();
        case 5:
          pool = _context4.sent;
          request = pool.request();
          detailMapping = _dataCommissionDetailMapping["default"].getMappings(); // Elimina esta línea: request.input("idDataDetail", idDataDetail);
          for (fieldsDetail in updateDataDetail) {
            if (detailMapping[fieldsDetail]) {
              request.input(fieldsDetail, detailMapping[fieldsDetail], updateDataDetail[fieldsDetail]);
            }
          }
          _context4.next = 11;
          return request.query(_commissionsQuerys.dataCommissionDetail_queries.updateDataCommissionDetail);
        case 11:
          result = _context4.sent;
          if (result && result.recordset && result.recordset[0] && result.recordset[0].Message) {
            successMessage = result.recordset[0].Message;
            res.json({
              message: successMessage
            }); // Enviar el mensaje de éxito al cliente
          }
          _context4.next = 18;
          break;
        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](2);
          if (_context4.t0.originalError) {
            errorMessage = _context4.t0.originalError.message || "Error al actualizar el detalle";
            console.error("Error al actualizar el detalle:", _context4.t0);
            res.status(500).json({
              error: errorMessage
            });
          } else {
            _errorMessage2 = _context4.t0.message || "Error al actualizar el detalle";
            console.error("Error al actualizar el empleado:", _context4.t0);
            res.status(500).json({
              error: _errorMessage2
            });
          }
        case 18:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 15]]);
  }))).apply(this, arguments);
};
exports.updateDataCommissionDetail = updateDataCommissionDetail;
var getCommissionDetailById = function getCommissionDetailById(_x9, _x10) {
  return (_ref5 = _ref5 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var idDataDetail, dataCommissionDetailMapping, pool, result;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          idDataDetail = req.body.idDataDetail;
          dataCommissionDetailMapping = _dataCommissionDetailMapping["default"].getMappings();
          _context5.next = 5;
          return (0, _database.getConnection)();
        case 5:
          pool = _context5.sent;
          _context5.next = 8;
          return pool.request().input("idDataDetail", dataCommissionDetailMapping.idDataDetail, idDataDetail).query(_commissionsQuerys.dataCommissionDetail_queries.getCommissionDetailById);
        case 8:
          result = _context5.sent;
          if (result.recordset.length > 0) {
            res.json(result.recordset);
          } else {
            res.status(404).send("Detalle no encontrado");
          }
          _context5.next = 16;
          break;
        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](0);
          console.error("Error al obtener detalle:", _context5.t0);
          res.status(500).send("Error al obtener detalle: " + _context5.t0.message);
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 12]]);
  }))).apply(this, arguments);
};
exports.getCommissionDetailById = getCommissionDetailById;