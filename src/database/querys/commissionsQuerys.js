

export const commissionData_queries = {

    newCommissionData: "EXEC StoredProcedure_AddNewDataCommissionData @batchDataDate, @idMonth, @userName", 
    getLastDataBatchAmount : "EXEC StoredProcedure_GetLastDataBatchTotalAmount",
    getTotalValueByCommissionType: "EXEC StoredProcedure_GetTotalValueByCommissionType"
};

export const dataCommissionDetail_queries = {
    
    newDataCommissionDetail : "EXEC StoredProcedure_AddNewDataCommissionDetail @reference, @idDataCommissionConcept, @description, @value, @idCommissionType",
    getLastaCommissionDataDetails : "EXEC StoredProcedure_GetLastCommissionDataDetails",
    deleteDataCommissionDetail: "EXEC StoredProcedure_DeleteDataCommissionDetail @idDataDetail",
    updateDataCommissionDetail: "EXEC StoredProcedure_UpdateDataCommissionDetail @idDataDetail, @reference, @idDataCommissionConcept, @description, @value, @idCommissionType",
    getCommissionDetailById : "EXEC StoredProcedure_GetCommissionDetailById @idDataDetail"
}


export const dataCommissionConcept_queries = {

    newDataCommissionConcept: "EXEC StoredProcedure_AddNewDataCommissionConcept @concept, @idCommissionType",
    updateDataCommissionConcecpt : "StoredProcedure_UpdateDataCommissionConcept @idDataCommissionConept, @concept",
    getAllDataCommissionsConcepts: "StoredProcedure_GetDataCommissionConcepts",
    deleteDataCommissionConcept : "StoredProcedure_DeleteDataCommissionConcept @idDataCommissionConept",
    getCommissionConceptByCommissionType : "StoredProcedure_GetCommissionConceptByCommissionType @idCommissionType",
    getCommissionConceptById: "StoredProcedure_SearchCommissionConceptById @idDataCommissionConcept"
}


export const commissionType_queries ={

    getAllCommissionType : "StoredProcedure_CommissionType"
}

