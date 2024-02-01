import { getConnection, sql } from "../../database";
import DataCommissionConceptModel from '../../models/dataCommissionConcept.model';
import DataCommissionConceptMappings from '../../mapping/dataCommissionConceptMapping';
import { dataCommissionConcept_queries } from "../../database/querys/commissionsQuerys";


export const newDataCommissionConcept = async ( req, res ) => {

    const dataCommissionConceptModel = new DataCommissionConceptModel(req.body);

    try {
        const pool = await getConnection();
        const request = pool.request();

        const dataCommissionConceptMapping = DataCommissionConceptMappings.getMappings();

        for(const fieldsdataCommissionConcept in dataCommissionConceptModel){
            request.input(fieldsdataCommissionConcept, dataCommissionConceptMapping[fieldsdataCommissionConcept], dataCommissionConceptModel[fieldsdataCommissionConcept]);    
        }

        const result = await request.query(dataCommissionConcept_queries.newDataCommissionConcept);

        if(result && result.recordset && result.recordset[0] && result.recordset[0].Message){
            const successMessage = result.recordset[0].Message;
            res.json({ message: successMessage});
        } else {
            res.json(dataCommissionConceptModel)
        }


    } catch (error) {
        if(error.originalError){
            const errorMessage = error.originalError.message ||  "Error al crear nuevo concepto de comisiones";
            console.error("Error al crear nuevo concepto de comisiones", error);
            
            res.status(500).json({ error: errorMessage });
        } else {
            const errorMessage = error.message || "Error al crear nuevo concepto de comisiones";
            console.error("Error al crear nuevo concepto de comisiones: " , error);
            res.status(500).json({
                error: errorMessage
            });
        }
    }
}