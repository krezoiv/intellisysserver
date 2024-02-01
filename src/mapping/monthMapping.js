import sql from 'mssql';

class MonthFieldMappings {

    constructor(){
        this.fieldMappings = {
            idMonth : sql.Int,
            monthName : sql.VarChar(50)
        };
    }

    getMappings(){
        return this.fieldMappings;
    }
}

export default new MonthFieldMappings();