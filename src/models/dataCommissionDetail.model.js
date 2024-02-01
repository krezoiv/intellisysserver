class DataCommissionDetailModel {
    constructor({
        idDataDetail,
        reference,
        idDataCommissionConcept,
        description,
        value,
        idCommissionType,
        idDataBatch
    }){
        Object.assign(this, {
            idDataDetail,
            reference,
            idDataCommissionConcept,
            description,
            value,
            idCommissionType,
            idDataBatch
        });
    }
}

export default DataCommissionDetailModel;