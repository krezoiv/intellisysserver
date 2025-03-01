"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.campus_queries = void 0;
/**
 * campus_queries: Un objeto que almacena consultas SQL relacionadas con campus.
 */
var campus_queries = {
  /**
   * getCampus: Una propiedad que almacena una consulta SQL para obtener información sobre campus.
   * 
   * @type {string}
   */
  getCampus: 'EXEC StoredProcedure_GetCampus;',
  getCampusByEmployee: 'EXEC StoredProcedure_SearchEmployeeRoutesCampus @code, @idCampus ;'
};
exports.campus_queries = campus_queries;