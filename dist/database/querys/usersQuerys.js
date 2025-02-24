"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.users_queries = void 0;
var users_queries = {
  getUsers: 'EXEC StoredProcedure_GetUsersDetails',
  userLogin: 'EXEC spBuscarUsuarioLogin @usuario, @password',
  newUser: 'StoredProcedure_AddNewUser @userName, @password, @idRole, @idStatus, @idEmployee, @userCode',
  deactivateUser: "StoredProcedure_DeactivateUser @idUser"
};
exports.users_queries = users_queries;