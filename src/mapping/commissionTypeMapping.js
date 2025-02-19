import sql from 'mssql';

class CommisionTypeFieldsMappings {

    constructor(){
        this.fieldMappings = {
            idCommissionType : sql.Int,
            commissionType : sql.VarChar(50)
        };
    }

    getMappings(){
        return this.fieldMappings;
    }
}

export default new CommisionTypeFieldsMappings();