"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDlpAssignment = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../../database");
var _dlpAssignmentQuerys = require("../../database/querys/dlpAssignmentQuerys");
var _ref;
var addDlpAssignment = function addDlpAssignment(_x, _x2) {
  return (_ref = _ref || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, idRoute, idEmployee, pool, request, result, successMessage, errorMessage, _errorMessage;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, idRoute = _req$body.idRoute, idEmployee = _req$body.idEmployee;
          _context.prev = 1;
          _context.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context.sent;
          request = pool.request();
          _context.next = 8;
          return request.input("idRoute", _database.sql.Int, idRoute).input("idEmployee", _database.sql.Int, idEmployee).query(_dlpAssignmentQuerys.dlpAssignment_queries.dlpAssignment);
        case 8:
          result = _context.sent;
          if (result && result.recordset && result.recordset[0] && result.recordset[0].Message) {
            successMessage = result.recordset[0].Message;
            res.json({
              message: successMessage
            }); // Enviar el mensaje de éxito al cliente
          } else {
            res.json(result); // Enviar el objeto roleModel si no hay mensaje de éxito
          }
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](1);
          if (_context.t0.originalError) {
            // Si hay un error original, muestra el mensaje personalizado
            errorMessage = _context.t0.originalError.message || "Error al asignar ruta";
            console.error("Error al asignar ruta:", _context.t0);
            res.status(500).json({
              error: errorMessage
            });
          } else {
            // Muestra un mensaje de error genérico en caso de otro tipo de error
            _errorMessage = _context.t0.message || "Error al asignar ruta";
            console.error("Error al asignar ruta:", _context.t0);
            res.status(500).json({
              error: _errorMessage
            });
          }
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 12]]);
  }))).apply(this, arguments);
};
exports.addDlpAssignment = addDlpAssignment;