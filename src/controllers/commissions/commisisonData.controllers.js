import { getConnection, sql } from "../../database";
import CommissionDataModel from '../../models/comissionData.model';
import CommissionDataMappings from '../../mapping/commissionDataMapping';
import { commissionData_queries } from "../../database/querys/commissionsQuerys";

export const newCommissionData = async (req, res) => {
    
    const commissionDataModel = new CommissionDataModel(req.body);

    try {
        const pool = await getConnection();
        const request = pool.request();

        const commissionDataMapping = CommissionDataMappings.getMappings();

        for(const fieldsCommissionData in commissionDataModel){
            request.input(fieldsCommissionData, commissionDataMapping[fieldsCommissionData], commissionDataModel[fieldsCommissionData]);    
        }

        const result = await request.query(commissionData_queries.newCommissionData);

        if(result && result.recordset && result.recordset[0] && result.recordset[0].Message){
            const successMessage = result.recordset[0].Message;
            res.json({ message: successMessage});
        } else {
            res.json(commissionDataModel)
        }

    } catch (error) {
        if(error.originalError){
            const errorMessage = error.originalError.message ||  "Error al crear lote de comisiones";
            console.error("Error al crear lote de comisiones", error);
            
            res.status(500).json({ error: errorMessage });
        } else {
            const errorMessage = error.message || "Error al crear lote de comisiones";
            console.error("Error al crear lote de comisiones: " , error);
            res.status(500).json({
                error: errorMessage
            });
        }
    }
};


export const getLastDataBatchTotalAmount = async (req, res) => {
   
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(commissionData_queries.getLastDataBatchAmount);

        res.json(result.recordset);
    } catch (error) {
        console.error(err);
        res.status(500).json({
            message: 'Error al obtner detalle'
        })
    }
}

export const getTotalValueByCommisionType = async (req, res) => {
   
    try {
        const pool = await getConnection();
        const result = await pool.request()
        .query(commissionData_queries.getTotalValueByCommissionType);

        res.json(result.recordset);
    } catch (error) {
        console.error(err);
        res.status(500).json({
            message: 'Error al obtner detalle'
        })
    }
}