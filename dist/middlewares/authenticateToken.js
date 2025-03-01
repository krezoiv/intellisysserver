"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authenticateToken = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var secretKey = process.env.SECRET_KEY; // Obtiene la clave secreta desde las variables de entorno

/**
 * Middleware de autenticación.
 * Este middleware verifica la autenticidad de un token JWT incluido en el encabezado de autorización de una solicitud HTTP.
 * Si el token es válido, almacena los datos del usuario decodificado en el objeto de solicitud (req.user) para su posterior uso en rutas protegidas.
 * Si el token es inválido o no se proporciona, responde con un código de estado correspondiente y un mensaje de error.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @param {function} next - Función que permite continuar con la siguiente middleware o ruta.
 */
var authenticateToken = function authenticateToken(req, res, next) {
  // Obtén el token del encabezado de autorización
  var token = req.headers.authorization;
  if (token) {
    // Si no se proporciona un token, responde con un código de estado 401 (No autorizado)
    // y un mensaje indicando que el token no se proporcionó
    return res.status(401).json({
      error: 'Token no proporcionado'
    });
  }

  // Verifica y decodifica el token utilizando la clave secreta (secretKey)
  _jsonwebtoken["default"].verify(token, secretKey, function (err, user) {
    if (err) {
      // Si el token es inválido, responde con un código de estado 403 (Prohibido)
      // y un mensaje indicando que el token es inválido
      return res.status(403).json({
        error: 'Token inválido'
      });
    }

    // Si el token es válido, almacena los datos del usuario decodificado en el objeto de solicitud (req.user)
    // para que estén disponibles en rutas protegidas
    req.user = user;

    // Continúa con la solicitud
    next();
  });
};
exports.authenticateToken = authenticateToken;