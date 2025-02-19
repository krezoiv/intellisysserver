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

export const updateDataCommissionConcept = async (req, res) => {

    const { idDataCommissionConcept } = req.params;
    const dataCommissionConceptModel = new DataCommissionConceptModel(req.body);
  
    try {
      const pool = await getConnection();
      const request = pool.request();
      const dataCommissionConceptMapping = DataCommissionConceptMappings.getMappings();
  
      request.input("idDataCommissionConcept", dataCommissionConceptMapping["idDataCommissionConcept"], idDataCommissionConcept);
  
      for (const fieldsdataCommissionConcept in dataCommissionConceptModel) {
        request.input(
          fieldsdataCommissionConcept,
          dataCommissionConceptMapping[fieldsdataCommissionConcept],
          dataCommissionConceptModel[fieldsdataCommissionConcept]
        );
      }
  
      const result = await request.query(dataCommissionConcept_queries.updateDataCommissionConcecpt);
  
      if (result && result.rowsAffected && result.rowsAffected[0] > 0) {
        res.json({ message: "Concepto de comisiones actualizado exitosamente" });
      } else {
        res.status(404).json({ error: "No se encontró el concepto de comisiones" });
      }
    } catch (error) {
      if (error.originalError) {
        const errorMessage =
          error.originalError.message || "Error al actualizar el concepto de comisiones";
        console.error("Error al actualizar el concepto de comisiones", error);
        res.status(500).json({ error: errorMessage });
      } else {
        const errorMessage = error.message || "Error al actualizar el concepto de comisiones";
        console.error("Error al actualizar el concepto de comisiones: ", error);
        res.status(500).json({ error: errorMessage });
      }
    }
}

export const getAllDataCommissionConcepts = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool
        .request()
        .execute(dataCommissionConcept_queries.getAllDataCommissionsConcepts);
  
      const dataCommissionConcepts = result.recordset;
  
      res.json(dataCommissionConcepts);
    } catch (error) {
      console.error("Error al obtener los conceptos de comisiones:", error);
      res.status(500).json({ error: "Error al obtener los conceptos de comisiones" });
    }
  };

  export const deleteDataCommissionConcept = async (req, res) => {
    const { idDataCommissionConcept } = req.params;
  
    try {
      const pool = await getConnection();
      const result = await pool
        .request()
        .input("idDataCommissionConcept", idDataCommissionConcept)
        .execute(dataCommissionConcept_queries.deleteDataCommissionConcept);
  
      if (result.returnValue === 0) {
        res.json({ message: "Concepto de comisiones eliminado exitosamente" });
      } else {
        res.status(404).json({ error: "No se encontró el concepto de comisiones" });
      }
    } catch (error) {
      console.error("Error al eliminar el concepto de comisiones:", error);
      res.status(500).json({ error: "Error al eliminar el concepto de comisiones" });
    }
  };


  export const getCommissionConceptByCommissionType = async (req, res) => {
    const idCommissionType = req.params.idCommissionType;

    try {
      const pool = await getConnection();
      const result = await pool.request().input('idCommissionType', sql.Int, idCommissionType)
      .query(dataCommissionConcept_queries.getCommissionConceptByCommissionType);

      res.json(result.recordset);
    } catch (error) {
      console.error(err);
      res.status(500).json({
        message: 'Error al obtener lista de conceptos'
      })
    }
  }

  export const getCommissionConceptById = async (req, res) => {
    const idDataCommissionConcept = req.params.idDataCommissionConcept;
    try {
      const pool = await getConnection();
      const result = await pool.request().input('idDataCommissionConcept', sql.Int,  idDataCommissionConcept)
      .query(dataCommissionConcept_queries.getCommissionConceptById);
      res.json(result.recordset);
    } catch (error) {
      console.error(error);
        res.status(500).json({ message: 'Error al obtener lista de conceptos' });
    }
  }