"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renewToken = exports.login = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _morgan = require("morgan");
var _database = require("../../database");
var _usersMapping = _interopRequireDefault(require("../../mapping/usersMapping"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _express = require("express");
var _jwt = require("../../helpers/jwt");
var _ref, _ref2;
require("dotenv").config(); // Carga las variables de entorno desde el archivo .env

var usersMapping = _usersMapping["default"].getMappings();
var bcrypt = require("bcryptjs");
// Importa la librería jsonwebtoken

/**
 * @function login
 * @description Maneja el inicio de sesión de usuarios utilizando un nombre de usuario y contraseña.
 * @param {Object} req - Objeto de solicitud de Express que contiene los datos del usuario (usuario y contraseña).
 * @param {Object} res - Objeto de respuesta de Express utilizado para enviar la respuesta al cliente.
 */
var login = function login(_x, _x2) {
  return (_ref = _ref || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, userName, password, pool, resultLogin, hashedPasswordFromDB, _token;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // Obtiene los datos del usuario (nombre de usuario y contraseña) desde la solicitud
          _req$body = req.body, userName = _req$body.userName, password = _req$body.password; // Obtiene una conexión a la base de datos
          _context.next = 4;
          return (0, _database.getConnection)();
        case 4:
          pool = _context.sent;
          _context.next = 7;
          return pool.request().input("userName", userName).query("SELECT password FROM users WHERE userName = @userName");
        case 7:
          resultLogin = _context.sent;
          // Verifica si se encontró un usuario válido en la consulta
          if (resultLogin.recordset && resultLogin.recordset.length > 0) {
            // Obtiene el hash de la contraseña almacenada en la base de datos
            hashedPasswordFromDB = resultLogin.recordset[0].password; // Compara la contraseña proporcionada con el hash almacenado en la base de datos
            if (bcrypt.compareSync(password, hashedPasswordFromDB)) {
              // La contraseña es válida
              // Genera un token JWT con los datos del usuario (puedes personalizar los datos incluidos)
              _token = _jsonwebtoken["default"].sign({
                usuario: userName
              }, process.env.SECRET_KEY, {
                expiresIn: "1h"
              }); // Responde con el token JWT y un mensaje de inicio de sesión exitoso
              res.json({
                userName: userName,
                message: "Inicio de sesión exitoso..",
                token: _token
              });
            } else {
              // Responde con un código de estado 401 (No autorizado)
              res.status(401).json({
                error: "Credenciales incorrectas"
              });
            }
          } else {
            // No se encontró un usuario con el nombre de usuario proporcionado

            // Responde con un código de estado 401 (No autorizado)
            res.status(401).json({
              error: "Credenciales incorrectas"
            });
          }
          _context.next = 15;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          // Maneja cualquier error que ocurra durante el proceso de inicio de sesión

          console.error("Error en el inicio de sesión:", _context.t0);

          // Responde con un código de estado 500 (Error interno del servidor)
          res.status(500).json({
            error: "Error en el inicio de sesión"
          });
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }))).apply(this, arguments);
};
/**
 * Renueva un token de autenticación para un usuario autenticado.
 * @param {Request} req - Objeto de solicitud HTTP que debe contener la información del usuario autenticado en `req.usuario`.
 * @param {Response} res - Objeto de respuesta HTTP que se utilizará para enviar la respuesta JSON con el nuevo token.
 * @returns {Promise<void>} - Una promesa que resuelve cuando se completa la renovación del token.
 */
exports.login = login;
var renewToken = function renewToken(_x3) {
  return (_ref2 = _ref2 || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req) {
    var res,
      usuario,
      _token2,
      _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          res = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : _express.response;
          _context2.prev = 1;
          // Obtener el usuario autenticado desde la solicitud (req.usuario)
          usuario = req.usuario; // Generar un nuevo token JWT para el usuario
          _context2.next = 5;
          return (0, _jwt.generateJWT)(usuario);
        case 5:
          _token2 = _context2.sent;
          // Enviar una respuesta JSON con el nuevo token

          res.json({
            ok: true,
            token: _token2
          });
          _context2.next = 13;
          break;
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          // Manejar errores de generación de token
          console.error('Error al renovar el token:', _context2.t0);

          // Responder con un estado de error y un mensaje de error
          res.status(500).json({
            ok: false,
            message: 'Error al renovar el token'
          });
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 9]]);
  }))).apply(this, arguments);
};
exports.renewToken = renewToken;