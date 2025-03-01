"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEmployee = exports.searchEmployeeRoutes = exports.searchEmployee = exports.getEmployeesById = exports.getEmployees = exports.deleteEmployee = exports.deactivateEmployee = exports.creatNewEmployee = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../../database");
var _employees = _interopRequireDefault(require("../../models/employees.model"));
var _employeesMapping2 = _interopRequireDefault(require("../../mapping/employeesMapping"));
var _employeesQuerys = require("../../database/querys/employeesQuerys");
var _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8;
/**
 * @function getEmployees
 * @description Obtiene la lista de empleados desde la base de datos y responde con la lista en formato JSON.
 */
var getEmployees = function getEmployees(_x, _x2) {
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
          return pool.request().query(_employeesQuerys.employees_queries.getEmployeesDetails);
        case 6:
          result = _context.sent;
          // Responde con la lista de empleados en formato JSON
          res.json(result.recordset);
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          // Maneja los errores y responde con un código de estado 500 y el mensaje de error
          res.status(500).send("Error al obtener empleados: " + _context.t0.message);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }))).apply(this, arguments);
};
exports.getEmployees = getEmployees;
var creatNewEmployee = function creatNewEmployee(_x3, _x4) {
  return (_ref2 = _ref2 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var capitalizeWords, capitalizedBody, key, employeeModel, pool, request, employeeMapping, username, randomNumber, code, fieldEmployee, result, successMessage, errorMessage, _errorMessage;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          // Capitaliza la primera letra de cada palabra en los campos del objeto req.body
          capitalizeWords = function capitalizeWords(str) {
            return str.replace(/\w\S*/g, function (txt) {
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
          };
          capitalizedBody = {};
          for (key in req.body) {
            if (key === 'idCampus') {
              // Si el campo es 'idCampus', no aplicamos capitalizeWords
              capitalizedBody[key] = req.body[key];
            } else if (typeof req.body[key] === 'string') {
              capitalizedBody[key] = capitalizeWords(req.body[key]);
            } else {
              capitalizedBody[key] = req.body[key];
            }
          }
          employeeModel = new _employees["default"](capitalizedBody);
          _context2.prev = 4;
          _context2.next = 7;
          return (0, _database.getConnection)();
        case 7:
          pool = _context2.sent;
          request = pool.request();
          employeeMapping = _employeesMapping2["default"].getMappings(); // Genera un nombre de usuario utilizando las primeras letras del nombre y apellidos
          username = ((employeeModel.firstName ? employeeModel.firstName[0] : "") + (employeeModel.secondName ? employeeModel.secondName[0] : "") + (employeeModel.firstLastName ? employeeModel.firstLastName[0] : "") + (employeeModel.secondLastName ? employeeModel.secondLastName[0] : "")).toUpperCase(); // Genera un número aleatorio del 0 al 9
          randomNumber = Math.floor(Math.random() * 10); // Corregido: 10 en lugar de 100
          // Combina el nombre de usuario y el número aleatorio
          code = "".concat(username).concat(randomNumber); // Agrega el campo 'code' al mapeo de campos y asigna el valor generado
          employeeMapping['code'] = _database.sql.VarChar(15);
          request.input('code', employeeMapping['code'], code);

          // Agrega los otros campos al mapeo de campos
          for (fieldEmployee in employeeMapping) {
            if (fieldEmployee !== 'code') {
              request.input(fieldEmployee, employeeMapping[fieldEmployee], employeeModel[fieldEmployee]);
            }
          }
          _context2.next = 18;
          return request.query(_employeesQuerys.employees_queries.addNewEmployee);
        case 18:
          result = _context2.sent;
          if (result && result.recordset && result.recordset[0] && result.recordset[0].Message) {
            successMessage = result.recordset[0].Message;
            res.json({
              message: successMessage
            }); // Enviar el mensaje de éxito al cliente
          } else {
            res.json(employeeModel); // Enviar el objeto roleModel si no hay mensaje de éxito
          }
          _context2.next = 25;
          break;
        case 22:
          _context2.prev = 22;
          _context2.t0 = _context2["catch"](4);
          if (_context2.t0.originalError) {
            // Si hay un error original, muestra el mensaje personalizado
            errorMessage = _context2.t0.originalError.message || "Error al crear el empleado";
            console.error("Error al crear el empleado:", _context2.t0);
            res.status(500).json({
              error: errorMessage
            });
          } else {
            // Muestra un mensaje de error genérico en caso de otro tipo de error
            _errorMessage = _context2.t0.message || "Error al crear el empleado";
            console.error("Error al crear el empleado:", _context2.t0);
            res.status(500).json({
              error: _errorMessage
            });
          }
        case 25:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[4, 22]]);
  }))).apply(this, arguments);
};

/**
 * @function getEmployeesById
 * @description Obtiene un empleado por su código desde la base de datos y responde con los detalles del empleado en formato JSON.
 * @param {Object} req - Objeto de solicitud HTTP que debe contener el código del empleado en el cuerpo (req.body).
 * @param {Object} res - Objeto de respuesta HTTP.
 */
exports.creatNewEmployee = creatNewEmployee;
var getEmployeesById = function getEmployeesById(_x5, _x6) {
  return (_ref3 = _ref3 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var code, _employeesMapping, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          // Obtén el código del empleado directamente del cuerpo de la solicitud (req.body)
          code = req.body.code; // Obtiene los mapeos de campos SQL para la consulta
          _employeesMapping = _employeesMapping2["default"].getMappings(); // Obtiene una conexión del pool de conexiones a la base de datos
          _context3.next = 5;
          return (0, _database.getConnection)();
        case 5:
          pool = _context3.sent;
          _context3.next = 8;
          return pool.request().input("code", _employeesMapping.code, code).query(_employeesQuerys.employees_queries.getEmployeeById);
        case 8:
          result = _context3.sent;
          // Verifica si la consulta SQL tuvo éxito y si se encontraron resultados
          if (result.recordset.length > 0) {
            // Responde con los detalles del empleado en formato JSON
            res.json(result.recordset);
          } else {
            // Si no se encontró ningún empleado con el código dado, responde con un código de estado 404
            res.status(404).send("Empleado no encontrado");
          }
          _context3.next = 16;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](0);
          // Maneja errores, registra el error en la consola y responde con un código de estado 500 y el mensaje de error
          console.error("Error al obtener empleado por código:", _context3.t0);
          res.status(500).send("Error al obtener empleado por código: " + _context3.t0.message);
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 12]]);
  }))).apply(this, arguments);
};

/**
 * @function searchEmployee
 * @description Busca empleados en la base de datos que coincidan con un término de búsqueda y responde con los resultados en formato JSON.
 * @param {Object} req - Objeto de solicitud HTTP que debe contener el término de búsqueda en el cuerpo (req.body).
 * @param {Object} res - Objeto de respuesta HTTP.
 */
exports.getEmployeesById = getEmployeesById;
var searchEmployee = function searchEmployee(_x7, _x8) {
  return (_ref4 = _ref4 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var searchTerm, pool, result, errorMessage, _errorMessage2;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          // Obtén el término de búsqueda directamente del cuerpo de la solicitud (req.body)
          searchTerm = req.body.searchTerm; // Obtiene una conexión del pool de conexiones a la base de datos
          _context4.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context4.sent;
          _context4.next = 7;
          return pool.request().input("searchTerm", _database.sql.NVarChar(100), searchTerm).query(_employeesQuerys.employees_queries.searchEmployee);
        case 7:
          result = _context4.sent;
          // Verifica si la consulta SQL tuvo éxito y si se encontraron resultados
          res.json(result.recordset);
          _context4.next = 14;
          break;
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          if (_context4.t0.originalError) {
            errorMessage = _context4.t0.originalError.message || "Error en la búsqueda de empleado";
            console.error(_context4.t0);
            res.status(500).json({
              error: errorMessage
            });
          } else {
            _errorMessage2 = _context4.t0.message || "Error en la búsqueda de empleado";
            console.error("Error en la búsqueda", _context4.t0);
            res.status(500).json({
              error: _errorMessage2
            });
          }
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }))).apply(this, arguments);
};
exports.searchEmployee = searchEmployee;
var updateEmployee = function updateEmployee(_x9, _x10) {
  return (_ref5 = _ref5 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var idEmployee, updatedEmployeeData, pool, request, employeeMapping, fieldEmployee, result, successMessage, errorMessage, _errorMessage3;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          idEmployee = req.params.idEmployee;
          updatedEmployeeData = req.body;
          _context5.prev = 2;
          _context5.next = 5;
          return (0, _database.getConnection)();
        case 5:
          pool = _context5.sent;
          request = pool.request();
          employeeMapping = _employeesMapping2["default"].getMappings(); // Añade el campo idEmployee para identificar el empleado que se actualizará
          request.input("idEmployee", idEmployee);
          for (fieldEmployee in updatedEmployeeData) {
            if (employeeMapping[fieldEmployee]) {
              request.input(fieldEmployee, employeeMapping[fieldEmployee], updatedEmployeeData[fieldEmployee]);
            }
          }
          _context5.next = 12;
          return request.query(_employeesQuerys.employees_queries.updateEmployee);
        case 12:
          result = _context5.sent;
          if (result && result.recordset && result.recordset[0] && result.recordset[0].Message) {
            successMessage = result.recordset[0].Message;
            res.json({
              message: successMessage
            }); // Enviar el mensaje de éxito al cliente
          } else {
            res.json({
              message: "La información del empleado ha sido actualizada en la base de datos."
            });
          }
          _context5.next = 19;
          break;
        case 16:
          _context5.prev = 16;
          _context5.t0 = _context5["catch"](2);
          if (_context5.t0.originalError) {
            errorMessage = _context5.t0.originalError.message || "Error al actualizar el empleado";
            console.error("Error al actualizar el empleado:", _context5.t0);
            res.status(500).json({
              error: errorMessage
            });
          } else {
            _errorMessage3 = _context5.t0.message || "Error al actualizar el empleado";
            console.error("Error al actualizar el empleado:", _context5.t0);
            res.status(500).json({
              error: _errorMessage3
            });
          }
        case 19:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 16]]);
  }))).apply(this, arguments);
};

/**
 * @function deleteEmployee
 * @description Elimina un empleado de la base de datos utilizando el procedimiento almacenado.
 */
exports.updateEmployee = updateEmployee;
var deleteEmployee = function deleteEmployee(_x11, _x12) {
  return (_ref6 = _ref6 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var idEmployee, pool, result, successMessage;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          // Obtiene el ID del empleado a eliminar del cuerpo de la solicitud (req.body)
          idEmployee = req.params.idEmployee; // Obtiene una conexión del pool de conexiones a la base de datos
          _context6.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context6.sent;
          _context6.next = 7;
          return pool.request().input("idEmployee", _database.sql.Int, idEmployee).query(_employeesQuerys.employees_queries.deleteEmployee);
        case 7:
          result = _context6.sent;
          if (result && result.recordset && result.recordset[0] && result.recordset[0].Message) {
            successMessage = result.recordset[0].Message;
            res.json({
              message: successMessage
            }); // Enviar el mensaje de éxito al cliente
          } else {
            res.json("Error al eliminar el empleado:"); // Enviar el objeto roleModel si no hay mensaje de éxito
          }
          _context6.next = 15;
          break;
        case 11:
          _context6.prev = 11;
          _context6.t0 = _context6["catch"](0);
          // Maneja errores, registra el error en la consola y responde con un código de estado 500 y el mensaje de error
          console.error("Error al eliminar el empleado:", _context6.t0);
          res.status(500).json({
            error: "Error al eliminar el empleado: " + _context6.t0.message
          });
        case 15:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 11]]);
  }))).apply(this, arguments);
};
exports.deleteEmployee = deleteEmployee;
var deactivateEmployee = function deactivateEmployee(_x13, _x14) {
  return (_ref7 = _ref7 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee7(req, res) {
    var idEmployee, pool, result, successMessage;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          // Obtén el ID del empleado a desactivar desde la solicitud (req.params)
          idEmployee = req.params.idEmployee; // Obtiene una conexión del pool de conexiones a la base de datos
          _context7.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context7.sent;
          _context7.next = 7;
          return pool.request().input('idEmployee', _database.sql.Int, idEmployee).query(_employeesQuerys.employees_queries.deactivateEmployee);
        case 7:
          result = _context7.sent;
          if (result && result.recordset && result.recordset[0] && result.recordset[0].Message) {
            successMessage = result.recordset[0].Message;
            res.json({
              message: successMessage
            }); // Enviar el mensaje de éxito al cliente
          } else {
            res.json('Error al desactivar al empleado.'); // Enviar un mensaje de error si no hay mensaje de éxito
          }
          _context7.next = 15;
          break;
        case 11:
          _context7.prev = 11;
          _context7.t0 = _context7["catch"](0);
          // Manejar errores, registrar el error en la consola y responder con un código de estado 500 y el mensaje de error
          console.error('Error al desactivar al empleado:', _context7.t0);
          res.status(500).json({
            error: 'Error al desactivar al empleado: ' + _context7.t0.message
          });
        case 15:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 11]]);
  }))).apply(this, arguments);
};
exports.deactivateEmployee = deactivateEmployee;
var searchEmployeeRoutes = function searchEmployeeRoutes(_x15, _x16) {
  return (_ref8 = _ref8 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee8(req, res) {
    var code, pool, result, successMessage, errorMessage, _errorMessage4;
    return _regenerator["default"].wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          code = req.body.code;
          _context8.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context8.sent;
          _context8.next = 7;
          return pool.request().input("code", _database.sql.NVarChar(15), code).query(_employeesQuerys.employees_queries.searchEmployecampusRouts);
        case 7:
          result = _context8.sent;
          if (result && result.recordset && result.recordset[0] && result.recordset[0].Message) {
            successMessage = result.recordset[0].Message;
            res.json({
              message: successMessage
            }); // Enviar el mensaje de éxito al cliente
          } else {
            res.json(result.recordset); // Enviar un mensaje de error si no hay mensaje de éxito
          }
          _context8.next = 14;
          break;
        case 11:
          _context8.prev = 11;
          _context8.t0 = _context8["catch"](0);
          if (_context8.t0.originalError) {
            errorMessage = _context8.t0.originalError.message || "Error en la búsqueda de rutas de la sede";
            console.error(_context8.t0);
            res.status(500).json({
              error: errorMessage
            });
          } else {
            _errorMessage4 = _context8.t0.message || "Error en la búsqueda de rutas de la sede";
            console.error("Error en la búsqueda", _context8.t0);
            res.status(500).json({
              error: _errorMessage4
            });
          }
        case 14:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 11]]);
  }))).apply(this, arguments);
};
exports.searchEmployeeRoutes = searchEmployeeRoutes;