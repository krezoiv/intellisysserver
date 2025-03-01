"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRoute = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../../database");
var _routes = _interopRequireDefault(require("../../models/routes.model"));
var _routesMapping = _interopRequireDefault(require("../../mapping/routesMapping"));
var _routesQuery = require("../../database/querys/routesQuery");
var _ref;
var createRoute = function createRoute(_x, _x2) {
  return (_ref = _ref || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var capitalizedBody, key, routeModel, pool, request, routesMapping, fieldsRoutes, result, successMessage, errorMessage;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // Capitaliza la primera letra de cada palabra en los campos del objeto req.body
          capitalizedBody = {};
          for (key in req.body) {
            if (typeof req.body[key] === 'string') {
              capitalizedBody[key] = req.body[key].replace(/\b\w/g, function (match) {
                return match.toUpperCase();
              });
            } else {
              capitalizedBody[key] = req.body[key];
            }
          }
          routeModel = new _routes["default"](capitalizedBody);
          _context.prev = 3;
          _context.next = 6;
          return (0, _database.getConnection)();
        case 6:
          pool = _context.sent;
          request = pool.request();
          routesMapping = _routesMapping["default"].getMappings();
          for (fieldsRoutes in routesMapping) {
            request.input(fieldsRoutes, routesMapping[fieldsRoutes], routeModel[fieldsRoutes]);
          }
          _context.next = 12;
          return request.query(_routesQuery.routes_queries.createNewRoute);
        case 12:
          result = _context.sent;
          if (result && result.recordset && result.recordset[0] && result.recordset[0].Message) {
            successMessage = result.recordset[0].Message;
            res.json({
              success: true,
              message: successMessage
            });
          } else {
            res.status(400).json({
              success: false,
              error: 'No se pudo crear la ruta'
            });
          }
          _context.next = 19;
          break;
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](3);
          if (_context.t0.originalError) {
            errorMessage = _context.t0.originalError.message || 'Error al crear ruta';
            console.error('Error al crear ruta: ', _context.t0);
            res.status(500).json({
              success: false,
              error: errorMessage
            });
          }
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 16]]);
  }))).apply(this, arguments);
};
exports.createRoute = createRoute;