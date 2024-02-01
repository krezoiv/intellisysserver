class CommissionDataModel {
    constructor({
        idDataBatch,
        batchDataDate,
        idMonth,
        totalAmount,
        idUser
    }){
        Object.assign(this, {
            idDataBatch,
            batchDataDate,
            idMonth,
            totalAmount,
            idUser
        });
    }
}

export default CommissionDataModel;