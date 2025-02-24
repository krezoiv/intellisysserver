"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _employees = require("../../controllers/employees/employees.controllers");
var _authenticateToken = require("../../middlewares/authenticateToken");
// Crea un enrutador Express
var router = (0, _express.Router)();

/**
 * @route GET /api/employees/employees
 * @description Ruta para obtener la lista de empleados.
 */
router.get('/employees', _employees.getEmployees);

/**
 * @route POST /api/employees/employees
 * @description Ruta para crear un nuevo empleado.
 */
router.post('/employees', _employees.creatNewEmployee);

/**
 * @route POST /api/employees/employeesById
 * @description Ruta para obtener un empleado por su ID.
 */
router.post('/employeesById', _employees.getEmployeesById);
router.post('/searchEmployee', _employees.searchEmployee);
router.put('/employee/:idEmployee', _employees.updateEmployee);
router.put('/employeeDeactivate/:idEmployee', _employees.deactivateEmployee);
router["delete"]('/employee/:idEmployee', _employees.deleteEmployee);
router.post('/employeeCampusRoutes', _employees.searchEmployeeRoutes);
var _default = router;
exports["default"] = _default;