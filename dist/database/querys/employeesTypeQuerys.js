"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employeesType_queries = void 0;
/**
* @constant employeesType_queries
* @description Contiene consultas SQL para interactuar con la tabla de workPosition en la base de datos.
*/
var employeesType_queries = {
  /**
  * @property {string} getListEmployeeType
  * Consulta SQL para obtener la lista de todos los tipo de empleado.
  */
  getListEmployeeType: 'EXEC StoredProcedure_GetEmployeeType ;'
};
exports.employeesType_queries = employeesType_queries;