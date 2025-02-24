"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _campus = require("../../controllers/locations/campus.controllers");
var router = (0, _express.Router)();

/**
 * Rutas de las sedes
 */

// Ruta GET para obtener una lista de las sedes
router.get('/campus', _campus.geAllCampus);
router.post('/employeesByCodeCampus', _campus.getCampusByEmployee);

// Exportar el enrutador para su uso en otras partes de la aplicación
var _default = router;
exports["default"] = _default;