import { getConnection, sql } from "../../database";
import DataCommissionDetailModel from "../../models/dataCommissionDetail.model";
import DataCommissionDetailMappings from "../../mapping/dataCommissionDetailMapping"
import {dataCommissionDetail_queries} from "../../database/querys/commissionsQuerys"


export const newDataCommissionDetail = async (req, res) => {

    const dataCommissionDetailModel = new DataCommissionDetailModel(req.body);

    try {
        const pool = await getConnection();
        const request = pool.request();

        const dataCommissionDetailMapping = DataCommissionDetailMappings.getMappings();

        for(const fieldsdataCommissionDetail in dataCommissionDetailModel){
            request.input(fieldsdataCommissionDetail, dataCommissionDetailMapping[fieldsdataCommissionDetail], dataCommissionDetailModel[fieldsdataCommissionDetail]);    
        }

        const result = await request.query(dataCommissionDetail_queries.newDataCommissionDetail);

        if(result && result.recordset && result.recordset[0] && result.recordset[0].Message){
            const successMessage = result.recordset[0].Message;
            res.json({ message: successMessage});
        } else {
            res.json(dataCommissionDetailModel)
        }

    } catch (error) {
        if(error.originalError){
            const errorMessage = error.originalError.message ||  "Error al ingresar detalle de comisiones al lote";
            console.error("Error al ingresar detalle de comisiones al lote", error);
            
            res.status(500).json({ error: errorMessage });
        } else {
            const errorMessage = error.message || "Error al ingresar detalle de comisiones al lote";
            console.error("Error al ingresar detalle de comisiones al lote: " , error);
            res.status(500).json({
                error: errorMessage
            });
        }

    }
}