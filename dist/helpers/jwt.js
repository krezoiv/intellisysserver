"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateJWT = void 0;
// Importa la biblioteca 'jsonwebtoken' para trabajar con tokens JWT
var jwt = require('jsonwebtoken');

// Carga las variables de entorno desde el archivo .env
require('dotenv').config();

/**
 * @function generateJWT
 * @description Genera un token JWT (JSON Web Token) con la información del usuario proporcionada.
 * @param {Object} usuario - Los datos del usuario que se incluirán en el token JWT.
 * @returns {Promise<string>} Una promesa que resuelve en el token JWT generado.
 * @throws {string} Un mensaje de error si no se puede generar el JWT.
 */
var generateJWT = function generateJWT(usuario) {
  return new Promise(function (resolve, reject) {
    // Crea un objeto 'payload' que contiene la información del usuario a incluir en el token
    var payload = {
      usuario: usuario
    };

    // Genera el token JWT con el 'payload', la clave secreta y un tiempo de expiración de 1 hora
    jwt.sign({
      usuario: usuario
    }, process.env.SECRET_KEY, {
      expiresIn: '1h'
    }, function (err, token) {
      if (err) {
        // Si ocurre un error al generar el token, rechaza la promesa con un mensaje de error
        console.error(err);
        reject('No se pudo generar el JWT');
      } else {
        // Si se genera el token con éxito, resuelve la promesa con el token generado
        resolve(token);
      }
    });
  });
};
exports.generateJWT = generateJWT;