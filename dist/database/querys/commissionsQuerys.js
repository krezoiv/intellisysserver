"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataCommissionDetail_queries = exports.dataCommissionConcept_queries = exports.commissionType_queries = exports.commissionData_queries = void 0;
var commissionData_queries = {
  newCommissionData: "EXEC StoredProcedure_AddNewDataCommissionData @batchDataDate, @idMonth, @userName",
  getLastDataBatchAmount: "EXEC StoredProcedure_GetLastDataBatchTotalAmount",
  getTotalValueByCommissionType: "EXEC StoredProcedure_GetTotalValueByCommissionType"
};
exports.commissionData_queries = commissionData_queries;
var dataCommissionDetail_queries = {
  newDataCommissionDetail: "EXEC StoredProcedure_AddNewDataCommissionDetail @reference, @idDataCommissionConcept, @description, @value, @idCommissionType",
  getLastaCommissionDataDetails: "EXEC StoredProcedure_GetLastCommissionDataDetails",
  deleteDataCommissionDetail: "EXEC StoredProcedure_DeleteDataCommissionDetail @idDataDetail",
  updateDataCommissionDetail: "EXEC StoredProcedure_UpdateDataCommissionDetail @idDataDetail, @reference, @idDataCommissionConcept, @description, @value, @idCommissionType",
  getCommissionDetailById: "EXEC StoredProcedure_GetCommissionDetailById @idDataDetail"
};
exports.dataCommissionDetail_queries = dataCommissionDetail_queries;
var dataCommissionConcept_queries = {
  newDataCommissionConcept: "EXEC StoredProcedure_AddNewDataCommissionConcept @concept, @idCommissionType",
  updateDataCommissionConcecpt: "StoredProcedure_UpdateDataCommissionConcept @idDataCommissionConept, @concept",
  getAllDataCommissionsConcepts: "StoredProcedure_GetDataCommissionConcepts",
  deleteDataCommissionConcept: "StoredProcedure_DeleteDataCommissionConcept @idDataCommissionConept",
  getCommissionConceptByCommissionType: "StoredProcedure_GetCommissionConceptByCommissionType @idCommissionType",
  getCommissionConceptById: "StoredProcedure_SearchCommissionConceptById @idDataCommissionConcept"
};
exports.dataCommissionConcept_queries = dataCommissionConcept_queries;
var commissionType_queries = {
  getAllCommissionType: "StoredProcedure_CommissionType"
};
exports.commissionType_queries = commissionType_queries;