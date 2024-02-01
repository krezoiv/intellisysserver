

export const commissionData_queries = {

    newCommissionData: "EXEC StoredProcedure_AddNewDataCommissionData @batchDataDate, @idMonth, @idUser", 

};

export const dataCommissionDetail_queries = {
    
    newDataCommissionDetail : "EXEC StoredProcedure_AddNewDataCommissionDetail @reference, @idDataCommissionConcept, @description, @value, @idCommissionType"
};


export const dataCommissionConcept_queries = {

    newDataCommissionConcept: "EXEC StoredProcedure_AddNewDataCommissionConcept @concept"

}