class CommissionDataModel {
    constructor({
        idDataBatch,
        batchDataDate,
        idMonth,
        totalAmount,
        userName
    }){
        Object.assign(this, {
            idDataBatch,
            batchDataDate,
            idMonth,
            totalAmount,
            userName
        });
    }
}

export default CommissionDataModel;