import { getConnection, sql } from "../../database";
import DataCommissionDetailModel from "../../models/dataCommissionDetail.model";
import DataCommissionDetailMappings from "../../mapping/dataCommissionDetailMapping";
import { dataCommissionDetail_queries } from "../../database/querys/commissionsQuerys";

export const newDataCommissionDetail = async (req, res) => {
  const dataCommissionDetailModel = new DataCommissionDetailModel(req.body);

  try {
    const pool = await getConnection();
    const request = pool.request();

    const dataCommissionDetailMapping =
      DataCommissionDetailMappings.getMappings();

    for (const fieldsdataCommissionDetail in dataCommissionDetailModel) {
      request.input(
        fieldsdataCommissionDetail,
        dataCommissionDetailMapping[fieldsdataCommissionDetail],
        dataCommissionDetailModel[fieldsdataCommissionDetail]
      );
    }

    const result = await request.query(
      dataCommissionDetail_queries.newDataCommissionDetail
    );

    if (
      result &&
      result.recordset &&
      result.recordset[0] &&
      result.recordset[0].Message
    ) {
      const successMessage = result.recordset[0].Message;
      res.json({ message: successMessage });
    } else {
      res.json(dataCommissionDetailModel);
    }
  } catch (error) {
    if (error.originalError) {
      console.error("Error al ingresar detalle de comisiones al lote:", error);
      const errorMessage =
        error.originalError.message ||
        "Error al ingresar detalle de comisiones al lote";
      console.error("Error al ingresar detalle de comisiones al lote", error);

      res.status(500).json({ error: errorMessage });
    } else {
      const errorMessage =
        error.message || "Error al ingresar detalle de comisiones al lote";
      console.error("Error al ingresar detalle de comisiones al lote: ", error);
      res.status(500).json({
        error: errorMessage,
      });
    }
  }
};

export const getLastCommissionDataDetails = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(dataCommissionDetail_queries.getLastaCommissionDataDetails);

    res.json(result.recordset);
  } catch (error) {
    console.error(err);
    res.status(500).json({
      message: "Error al obtner detalle",
    });
  }
};

export const deleteDataCommissionDetail = async (req, res) => {
  try {
    const { idDataDetail } = req.params;
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("idDataDetail", sql.Int, idDataDetail)
      .query(dataCommissionDetail_queries.deleteDataCommissionDetail);
    if (
      result &&
      result.recordset &&
      result.recordset[0] &&
      result.recordset[0].Message
    ) {
      const successMessage = result.recordset[0].Message;
      res.json({ message: successMessage }); // Enviar el mensaje de éxito al cliente
    } else {
      res.json("Error al eliminar al eliminar detalle"); // Enviar el objeto roleModel si no hay mensaje de éxito
    }
  } catch (error) {
    console.error("Error al eliminar al eliminar detalle", error);
    res
      .status(500)
      .json({
        error: "Error al eliminar al eliminar detalle " + error.message,
      });
  }
};


export const updateDataCommissionDetail = async (req, res) => {
  const idDataDetail = req.params.idDataDetail;
  const updateDataDetail = req.body;

  try {
    const pool = await getConnection();
    const request = pool.request();

    const detailMapping = DataCommissionDetailMappings.getMappings();
    // Elimina esta línea: request.input("idDataDetail", idDataDetail);
    for (const fieldsDetail in updateDataDetail) {
      if (detailMapping[fieldsDetail]) {
        request.input(
          fieldsDetail,
          detailMapping[fieldsDetail],
          updateDataDetail[fieldsDetail]
        );
      }
    }
    const result = await request.query(
      dataCommissionDetail_queries.updateDataCommissionDetail
    );

    if (
      result &&
      result.recordset &&
      result.recordset[0] &&
      result.recordset[0].Message
    ) {
      const successMessage = result.recordset[0].Message;
      res.json({ message: successMessage }); // Enviar el mensaje de éxito al cliente
    }
  } catch (error) {
    if (error.originalError) {
      const errorMessage =
        error.originalError.message || "Error al actualizar el detalle";
      console.error("Error al actualizar el detalle:", error);
      res.status(500).json({ error: errorMessage });
    } else {
      const errorMessage = error.message || "Error al actualizar el detalle";
      console.error("Error al actualizar el empleado:", error);
      res.status(500).json({ error: errorMessage });
    }
  }
};


export const getCommissionDetailById = async (req, res) => {
  try {
    const { idDataDetail } = req.body;
    const dataCommissionDetailMapping =
      DataCommissionDetailMappings.getMappings();
    const pool = await getConnection();
    const result = await pool
      .request()
      .input(
        "idDataDetail",
        dataCommissionDetailMapping.idDataDetail,
        idDataDetail
      )
      .query(dataCommissionDetail_queries.getCommissionDetailById);

    if (result.recordset.length > 0) {
      res.json(result.recordset);
    } else {
      res.status(404).send("Detalle no encontrado");
    }
  } catch (error) {
    console.error("Error al obtener detalle:", error);
    res.status(500).send("Error al obtener detalle: " + error.message);
  }
};
