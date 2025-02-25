"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConnection = getConnection;
Object.defineProperty(exports, "sql", {
  enumerable: true,
  get: function get() {
    return _mssql["default"];
  }
});
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mssql = _interopRequireDefault(require("mssql"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _getConnection; // Importar los módulos necesarios
// Cargar las variables de entorno desde el archivo .env
_dotenv["default"].config();

// Configuración de la conexión a la base de datos
var dbSettings = {
  user: "sa",
  // Nombre de usuario de la base de datos
  password: "krezoiv@1984",
  // Contraseña de la base de datos
  //server: "192.168.1.63",     // Servidor de la base de datos casa
  server: "192.168.1.20",
  // Servidor de la base de datos oficina
  database: "IntelliSys_DB",
  port: 1433,
  // Nombre de la base de datos
  options: {
    encrypt: true,
    // Habilitar el cifrado de la conexión
    trustServerCertificate: true // Confiar en el certificado del servidor (seguro para desarrollo)
  }
};

// Función para obtener una conexión a la base de datos
function getConnection() {
  return (_getConnection = _getConnection || (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var pool;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _mssql["default"].connect(dbSettings);
        case 3:
          pool = _context.sent;
          return _context.abrupt("return", pool);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0); // Registrar errores en la consola en caso de problemas de conexión
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }))).apply(this, arguments);
} // Exportar el módulo de sql para su uso en otras partes de la aplicación
//aumento de velocidad 353274