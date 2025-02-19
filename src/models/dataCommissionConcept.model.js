class DataCommissionConceptModel {
    constructor({
        idDataCommissionConcept,
        concept,
        idCommissionType
    }){
        Object.assign(this, {
            idDataCommissionConcept,
            concept,
            idCommissionType
        });
    }
}

export default DataCommissionConceptModel;