import { getConnection, month_queries, sql } from "../../database";
import { months_queries } from "../../database/querys/monthsQuerys";
import MonthFieldMappings from "../../mapping/monthMapping";
import MonthModel from "../../models/month.model";


export const getMonth = async (req, res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(months_queries.getMonths);

        res.json(result.recordset);

    } catch (error) {
        res.status(500).send("Error al obtener la lista de meses " + error.message);
    }
}