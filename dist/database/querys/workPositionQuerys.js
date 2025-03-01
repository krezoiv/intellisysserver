"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.workPosition_queries = void 0;
/**
* @constant workPosition_queries
* @description Contiene consultas SQL para interactuar con la tabla de workPosition en la base de datos.
*/
var workPosition_queries = {
  /**
  * @property {string} getListWorkPosition
  * Consulta SQL para obtener la lista de todos los cargos de trabajo.
  */
  getListWorkPosition: 'EXEC StoredProcedure_GetWorkPosition ;',
  getWorkPositionByEmployee: 'EXEC StoredProcedure_GetWorkPositionByEmployeesType @idEmployeeType ;',
  getWorkPositionById: 'EXEC StoredProcedure_SearchWorkPositionById @idWorkposition ;'
};
exports.workPosition_queries = workPosition_queries;