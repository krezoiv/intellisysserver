"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.municipalities_queries = exports.department_queries = void 0;
var department_queries = {
  getListDepartments: 'EXEC StoredProcedure_GetDepartments;'
};
exports.department_queries = department_queries;
var municipalities_queries = {
  getListMunicipalities: 'EXEC StoredProcedure_GetMunicipalities;',
  getMunicipalitiesListByDepartments: 'EXEC StoredProcedure_GetMunicipalitiesByDepartments @idDepartment;',
  getMunicipalityById: 'EXEC StoredProcedure_SearchMunicipalityById @idMunicipality;',
  getMunicipalitiesOnCampus: 'EXEC StoredProcedure_GetMunicipalitiesCampus;'
};
exports.municipalities_queries = municipalities_queries;