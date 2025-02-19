import { getConnection } from "../../database";

import CommissionTypeModel from "../../models/commissionType.model";
import commissionTypeMapping from "../../mapping/commissionTypeMapping";
import { commissionData_queries, commissionType_queries } from "../../database/querys/commissionsQuerys";

export const getAllCommissionTypes = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().execute(commissionType_queries.getAllCommissionType);

        const commissionType = result.recordset;

        res.json(commissionType);
    } catch (error) {
        console.error("Error al obtner tipo de documento", error);
        res.status(500).json({error: "Error al obtner tipo de documento"});

    }
}

