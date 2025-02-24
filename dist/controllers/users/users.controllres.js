"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserPassword = exports.resetUserPassword = exports.newUser = exports.getUsers = exports.deactivateUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = require("express");
var _database = require("../../database");
var _usersMapping = _interopRequireDefault(require("../../mapping/usersMapping"));
var _users = _interopRequireDefault(require("../../models/users.model"));
var _jwt = require("../../helpers/jwt");
var _ref, _ref2, _ref3, _ref4, _ref5;
require("dotenv").config(); // Carga las variables de entorno desde el archivo .env

var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken"); //se requiere el servicio de jsonwebtoken

/**
 * Crea un nuevo usuario en la base de datos.
 * @param req - La solicitud HTTP que contiene los datos del nuevo usuario.
 * @param res - La respuesta HTTP que se enviará al cliente.
 */
var newUser = function newUser(_x, _x2) {
  return (_ref = _ref || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var userModel, idEmployee, pool, request, employeeQuery, employeeResult, firstName, secondName, firstLastName, randomNumber, userName, saltRounds, hashedPassword, usersMapping, _pool, _request, fieldsUser, result, successMessage;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          userModel = new _users["default"](req.body);
          idEmployee = req.body.idEmployee; // Asumiendo que tienes un campo idEmployee en la solicitud
          _context.prev = 2;
          _context.next = 5;
          return (0, _database.getConnection)();
        case 5:
          pool = _context.sent;
          request = pool.request();
          request.input('idEmployee', idEmployee);
          employeeQuery = 'SELECT firstName, firstLastName FROM employee WHERE idEmployee = @idEmployee';
          _context.next = 11;
          return request.query(employeeQuery);
        case 11:
          employeeResult = _context.sent;
          if (!(employeeResult.recordset.length > 0)) {
            _context.next = 34;
            break;
          }
          firstName = employeeResult.recordset[0].firstName;
          secondName = employeeResult.recordset[0].secondName;
          firstLastName = employeeResult.recordset[0].firstLastName;
          randomNumber = Math.floor(Math.random() * 10); // Construir el valor de userName en mayúsculas
          userName = "".concat(firstName.charAt(0)).concat(firstLastName).concat(randomNumber).toUpperCase(); // Actualizar el campo 'userName' en el objeto userModel
          userModel.userName = userName;

          // Generar un hash de la contraseña del usuario con bcrypt.
          saltRounds = 10;
          hashedPassword = bcrypt.hashSync(userModel.password, saltRounds); // Actualizar el campo 'password' del modelo de usuario con el hash.
          userModel.password = hashedPassword;

          // Continuar con el proceso de inserción del usuario en la base de datos
          usersMapping = _usersMapping["default"].getMappings();
          _context.next = 25;
          return (0, _database.getConnection)();
        case 25:
          _pool = _context.sent;
          _request = _pool.request();
          for (fieldsUser in usersMapping) {
            _request.input(fieldsUser, usersMapping[fieldsUser], userModel[fieldsUser]);
          }
          _context.next = 30;
          return _request.query(_database.users_queries.newUser);
        case 30:
          result = _context.sent;
          if (result && result.recordset && result.recordset[0] && result.recordset[0].Message) {
            successMessage = result.recordset[0].Message;
            res.json({
              message: successMessage
            });
          } else {
            res.json(userModel);
          }
          _context.next = 35;
          break;
        case 34:
          res.status(404).json({
            error: 'Empleado no encontrado'
          });
        case 35:
          _context.next = 41;
          break;
        case 37:
          _context.prev = 37;
          _context.t0 = _context["catch"](2);
          // Manejo de errores
          console.error("Error al crear el usuario:", _context.t0);
          res.status(500).json({
            error: _context.t0.message || "Error al crear el usuario"
          });
        case 41:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 37]]);
  }))).apply(this, arguments);
};

/**
 * @function getUsers
 * @description Obtiene la lista de usuarios desde la base de datos y responde con la lista en formato JSON.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
exports.newUser = newUser;
var getUsers = function getUsers(_x3, _x4) {
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
          return pool.request().query(_database.users_queries.getUsers);
        case 6:
          result = _context2.sent;
          res.json(result.recordset);
          _context2.next = 13;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          res.status(500).send("Error al obtener lista de usuarios " + _context2.t0.message);
          //console.error("Error al obtener lista de usuarios " + error.message);
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }))).apply(this, arguments);
};
exports.getUsers = getUsers;
var deactivateUser = function deactivateUser(_x5, _x6) {
  return (_ref3 = _ref3 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var idUser, pool, result, successMessage;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          // Obtén el ID del empleado a desactivar desde la solicitud (req.params)
          idUser = req.params.idUser; // Obtiene una conexión del pool de conexiones a la base de datos
          _context3.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context3.sent;
          _context3.next = 7;
          return pool.request().input('idUser', _database.sql.Int, idUser).query(_database.users_queries.deactivateUser);
        case 7:
          result = _context3.sent;
          if (result && result.recordset && result.recordset[0] && result.recordset[0].Message) {
            successMessage = result.recordset[0].Message;
            res.json({
              message: successMessage
            }); // Enviar el mensaje de éxito al cliente
          } else {
            res.json('Error al desactivar al usuario.'); // Enviar un mensaje de error si no hay mensaje de éxito
          }
          _context3.next = 15;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          // Manejar errores, registrar el error en la consola y responder con un código de estado 500 y el mensaje de error
          console.error('Error al desactivar al usuario:', _context3.t0);
          res.status(500).json({
            error: 'Error al desactivar al usuario: ' + _context3.t0.message
          });
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 11]]);
  }))).apply(this, arguments);
};
exports.deactivateUser = deactivateUser;
var updateUserPassword = function updateUserPassword(_x7, _x8) {
  return (_ref4 = _ref4 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var userId, newPassword, saltRounds, hashedPassword, pool, request, updatePasswordQuery;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          userId = req.params.userId; // Supongo que estás pasando el ID del usuario a través de la URL o del cuerpo de la solicitud
          newPassword = req.body.newPassword; // La nueva contraseña proporcionada en la solicitud
          _context4.prev = 2;
          // Generar un hash de la nueva contraseña del usuario con bcrypt.
          saltRounds = 10;
          hashedPassword = bcrypt.hashSync(newPassword, saltRounds); // Actualizar la contraseña en la base de datos
          _context4.next = 7;
          return (0, _database.getConnection)();
        case 7:
          pool = _context4.sent;
          request = pool.request();
          request.input('userId', userId);
          request.input('newPassword', hashedPassword);
          updatePasswordQuery = 'UPDATE users SET password = @newPassword WHERE idUser = @userId';
          _context4.next = 14;
          return request.query(updatePasswordQuery);
        case 14:
          res.json({
            message: 'Contraseña actualizada con éxito'
          });
          _context4.next = 21;
          break;
        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4["catch"](2);
          // Manejo de errores
          console.error("Error al actualizar la contraseña:", _context4.t0);
          res.status(500).json({
            error: _context4.t0.message || "Error al actualizar la contraseña"
          });
        case 21:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[2, 17]]);
  }))).apply(this, arguments);
};
exports.updateUserPassword = updateUserPassword;
var resetUserPassword = function resetUserPassword(_x9, _x10) {
  return (_ref5 = _ref5 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var idUser, newPassword, saltRounds, hashedPassword, pool, request, updatePasswordQuery;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          idUser = req.params.idUser; // Supongo que estás pasando el ID del usuario a través de la URL o del cuerpo de la solicitud
          _context5.prev = 1;
          // Generar una nueva contraseña aleatoria
          newPassword = generateRandomPassword(); // Generar un hash de la nueva contraseña del usuario con bcrypt.
          saltRounds = 10;
          hashedPassword = bcrypt.hashSync(newPassword, saltRounds); // Actualizar la contraseña en la base de datos
          _context5.next = 7;
          return (0, _database.getConnection)();
        case 7:
          pool = _context5.sent;
          request = pool.request();
          request.input('idUser', idUser);
          request.input('newPassword', hashedPassword);
          updatePasswordQuery = 'UPDATE users SET password = @newPassword WHERE idUser = @idUser';
          _context5.next = 14;
          return request.query(updatePasswordQuery);
        case 14:
          // Enviar la nueva contraseña al usuario (por ejemplo, a través de correo electrónico)
          // Aquí debes implementar el código para enviar la contraseña al usuario.

          res.json({
            message: 'Contraseña reseteada con éxito',
            newPassword: newPassword,
            idUser: idUser
          });
          _context5.next = 21;
          break;
        case 17:
          _context5.prev = 17;
          _context5.t0 = _context5["catch"](1);
          // Manejo de errores
          console.error("Error al resetear la contraseña:", _context5.t0);
          res.status(500).json({
            error: _context5.t0.message || "Error al resetear la contraseña"
          });
        case 21:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 17]]);
  }))).apply(this, arguments);
};

// Función para generar una contraseña aleatoria
exports.resetUserPassword = resetUserPassword;
var generateRandomPassword = function generateRandomPassword() {
  // Lógica para generar una contraseña aleatoria, por ejemplo, usando caracteres alfanuméricos
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var newPassword = '';
  for (var i = 0; i < 10; i++) {
    // Generar una contraseña de 10 caracteres, puedes ajustar el tamaño
    var randomIndex = Math.floor(Math.random() * characters.length);
    newPassword += characters.charAt(randomIndex);
  }
  return newPassword;
};