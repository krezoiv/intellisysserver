import sql from 'mssql';

class CommissionDataFieldsMappings {

    constructor(){
        this.fieldMappings = {
            idDataBatch : sql.Int,
            batchDataDate : sql.Date,
            idMonth : sql.Int,
            totalAmount : sql.Decimal(18,2),
            userName : sql.VarChar(50)
        };
    }

    getMappings(){
        return this.fieldMappings;
    }
}

export default new CommissionDataFieldsMappings();