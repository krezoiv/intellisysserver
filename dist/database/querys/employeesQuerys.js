"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.employees_queries = void 0;
/**
 * @constant employees_queries
 * @description Contiene consultas SQL para interactuar con la tabla de empleados en la base de datos.
 */
var employees_queries = {
  /**
   * @property {string} getEmployees
   * Consulta SQL para obtener la lista de todos los empleados.
   */
  getEmployeesDetails: "EXEC StoredProcedure_GetEmployeeDetails;",
  /**
   * @property {string} addNewEmployee
   * Consulta SQL para agregar un nuevo empleado a la base de datos.
   * Utiliza parámetros: @codigo, @primerNombre, @segundoNombre, @primerApellido, @segundoApellido, @fechaAlta, @idSede, @idTipoEmpleado, @idStatus, @idCargo.
   */
  addNewEmployee: "EXEC StoredProcedure_AddNewEmployee " + "@code, @firstName, @secondName, " + "@firstLastName, @secondLastName, " + "@hireDate, @idCampus," + "@idWorkposition, @idMunicipality, @addressReference," + "@BACaccount, @BAMaccount, @dpi",
  /**
   * @property {string} getEmployeeById
   * Consulta SQL para buscar un empleado por su código.
   * Utiliza un parámetro: @codigo.
   */
  getEmployeeById: "EXEC StoredProcedure_SearchEmployeeByCode @code",
  searchEmployee: "EXEC StoredProcedure_SearchEmployee @searchTerm",
  updateEmployee: "EXEC StoredProcedure_UpdateEmployee " + "@idEmployee = @idEmployee, " + "@firstName = @firstName, " + "@secondName = @secondName, " + "@firstLastName = @firstLastName, " + "@secondLastName = @secondLastName, " + "@hireDate = @hireDate, " + "@idCampus = @idCampus, " + "@idWorkposition = @idWorkposition, " + "@idMunicipality = @idMunicipality, " + "@addressReference = @addressReference, " + "@BACaccount = @BACaccount, " + "@BAMaccount = @BAMaccount, " + "@dpi = @dpi",
  deleteEmployee: "StoredProcedure_DeleteEmployee @idEmployee",
  deactivateEmployee: "StoredProcedure_Deactivatemployee @idEmployee",
  searchEmployecampusRouts: "EXEC StoredProcedure_SearchEmployeeRoutes @code"
};
exports.employees_queries = employees_queries;