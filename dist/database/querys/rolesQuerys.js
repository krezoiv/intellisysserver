"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roles_queries = void 0;
var roles_queries = {
  createNewRole: 'EXEC StoredProcedure_AddNewRole @roleName ;',
  getRolesList: 'EXEC StoredProcedure_GetRoles'
};
exports.roles_queries = roles_queries;