import sql from 'mssql';

class DataCommissionConceptMapping {

    constructor(){
        this.fieldMappings = {
            idDataCommissionConcept : sql.Int,
            concept : sql.VarChar(200),
            idCommissionType : sql.Int
        };
    }

    getMappings(){
        return this.fieldMappings;
    }
}

export default new DataCommissionConceptMapping();