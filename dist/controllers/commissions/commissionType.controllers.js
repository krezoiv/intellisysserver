"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllCommissionTypes = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../../database");
var _commissionType = _interopRequireDefault(require("../../models/commissionType.model"));
var _commissionTypeMapping = _interopRequireDefault(require("../../mapping/commissionTypeMapping"));
var _commissionsQuerys = require("../../database/querys/commissionsQuerys");
var _ref;
var getAllCommissionTypes = function getAllCommissionTypes(_x, _x2) {
  return (_ref = _ref || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result, commissionType;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().execute(_commissionsQuerys.commissionType_queries.getAllCommissionType);
        case 6:
          result = _context.sent;
          commissionType = result.recordset;
          res.json(commissionType);
          _context.next = 15;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.error("Error al obtner tipo de documento", _context.t0);
          res.status(500).json({
            error: "Error al obtner tipo de documento"
          });
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }))).apply(this, arguments);
};
exports.getAllCommissionTypes = getAllCommissionTypes;