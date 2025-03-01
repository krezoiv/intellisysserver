"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newCommissionData = exports.getTotalValueByCommisionType = exports.getLastDataBatchTotalAmount = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../../database");
var _comissionData = _interopRequireDefault(require("../../models/comissionData.model"));
var _commissionDataMapping = _interopRequireDefault(require("../../mapping/commissionDataMapping"));
var _commissionsQuerys = require("../../database/querys/commissionsQuerys");
var _ref, _ref2, _ref3;
var newCommissionData = function newCommissionData(_x, _x2) {
  return (_ref = _ref || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var commissionDataModel, pool, request, commissionDataMapping, fieldsCommissionData, result, successMessage, errorMessage, _errorMessage;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          commissionDataModel = new _comissionData["default"](req.body);
          _context.prev = 1;
          _context.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context.sent;
          request = pool.request();
          commissionDataMapping = _commissionDataMapping["default"].getMappings();
          for (fieldsCommissionData in commissionDataModel) {
            request.input(fieldsCommissionData, commissionDataMapping[fieldsCommissionData], commissionDataModel[fieldsCommissionData]);
          }
          _context.next = 10;
          return request.query(_commissionsQuerys.commissionData_queries.newCommissionData);
        case 10:
          result = _context.sent;
          if (result && result.recordset && result.recordset[0] && result.recordset[0].Message) {
            successMessage = result.recordset[0].Message;
            res.json({
              message: successMessage
            });
          } else {
            res.json(commissionDataModel);
          }
          _context.next = 17;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](1);
          if (_context.t0.originalError) {
            errorMessage = _context.t0.originalError.message || "Error al crear lote de comisiones";
            console.error("Error al crear lote de comisiones", _context.t0);
            res.status(500).json({
              error: errorMessage
            });
          } else {
            _errorMessage = _context.t0.message || "Error al crear lote de comisiones";
            console.error("Error al crear lote de comisiones: ", _context.t0);
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
exports.newCommissionData = newCommissionData;
var getLastDataBatchTotalAmount = function getLastDataBatchTotalAmount(_x3, _x4) {
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
          return pool.request().query(_commissionsQuerys.commissionData_queries.getLastDataBatchAmount);
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
            message: 'Error al obtner detalle'
          });
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }))).apply(this, arguments);
};
exports.getLastDataBatchTotalAmount = getLastDataBatchTotalAmount;
var getTotalValueByCommisionType = function getTotalValueByCommisionType(_x5, _x6) {
  return (_ref3 = _ref3 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context3.sent;
          _context3.next = 6;
          return pool.request().query(_commissionsQuerys.commissionData_queries.getTotalValueByCommissionType);
        case 6:
          result = _context3.sent;
          res.json(result.recordset);
          _context3.next = 14;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.error(err);
          res.status(500).json({
            message: 'Error al obtner detalle'
          });
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }))).apply(this, arguments);
};
exports.getTotalValueByCommisionType = getTotalValueByCommisionType;