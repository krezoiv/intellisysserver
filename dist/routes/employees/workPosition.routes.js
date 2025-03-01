"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _workPosition = require("../../controllers/employees/workPosition.controllers");
// Crear una instancia del enrutador Express
var router = (0, _express.Router)();

/**
 * Rutas de Posiciones de Trabajo
 */

// Ruta GET para obtener una lista de posiciones de trabajo
router.get('/workPosition', _workPosition.getListWorkPosition);
router.get('/workPosition/:idWorkposition', _workPosition.getWorkPositionById);
router.get('/workPositions/:idEmployeeType', _workPosition.getWorkPositionByEmployeesType);

// Exportar el enrutador para su uso en otras partes de la aplicación
var _default = router;
exports["default"] = _default;