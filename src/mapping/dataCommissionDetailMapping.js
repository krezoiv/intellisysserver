import sql from 'mssql';

class DataCommissionDetailFieldsMappings {
    
    constructor(){
        this.fieldMappings = {
            idDataDetail : sql.Int,
            reference : sql.VarChar(75),
            idDataCommissionConcept : sql.Int,
            description : sql.VarChar(200),
            value : sql.Decimal(18,2),
            idCommissionType : sql.Int,
            idDataBatch :sql.Int
        };
    }

    getMappings(){
        return this.fieldMappings;
    }
}

export default new DataCommissionDetailFieldsMappings();