

export const users_queries = {
    getUsers :'EXEC StoredProcedure_GetUsersDetails',
    userLogin : 'EXEC spBuscarUsuarioLogin @usuario, @password',
    newUser: 'StoredProcedure_AddNewUser @userName, @password, @idRole, @idStatus, @idEmployee, @userCode',
    deactivateUser : "StoredProcedure_DeactivateUser @idUser",
}