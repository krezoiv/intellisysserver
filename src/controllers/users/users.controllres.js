import { response } from "express";
import { getConnection, users_queries, sql } from "../../database";
import UsersFieldMapping from "../../mapping/usersMapping";
import UsuariosModel from "../../models/users.model";
import { generateJWT } from "../../helpers/jwt";
require("dotenv").config(); // Carga las variables de entorno desde el archivo .env

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); //se requiere el servicio de jsonwebtoken







/**
 * Crea un nuevo usuario en la base de datos.
 * @param req - La solicitud HTTP que contiene los datos del nuevo usuario.
 * @param res - La respuesta HTTP que se enviará al cliente.
 */
export const newUser = async (req, res) => {
  
  const userModel = new UsuariosModel(req.body);
  const idEmployee = req.body.idEmployee; // Asumiendo que tienes un campo idEmployee en la solicitud

  try {
    // Obtener firstName y firstLastName de la base de datos
    const pool = await getConnection();
    const request = pool.request();
    request.input('idEmployee', idEmployee);
    const employeeQuery = 'SELECT firstName, firstLastName FROM employee WHERE idEmployee = @idEmployee';
    const employeeResult = await request.query(employeeQuery);

    if (employeeResult.recordset.length > 0) {
      const firstName = employeeResult.recordset[0].firstName;
      const secondName = employeeResult.recordset[0].secondName;
      const firstLastName = employeeResult.recordset[0].firstLastName;
      const randomNumber = Math.floor(Math.random() * 10 );
    
      // Construir el valor de userName en mayúsculas
      const userName = `${firstName.charAt(0)}${firstLastName}${randomNumber}`.toUpperCase();

      // Actualizar el campo 'userName' en el objeto userModel
      userModel.userName = userName;

      // Generar un hash de la contraseña del usuario con bcrypt.
      const saltRounds = 10;
      const hashedPassword = bcrypt.hashSync(userModel.password, saltRounds);

      // Actualizar el campo 'password' del modelo de usuario con el hash.
      userModel.password = hashedPassword;

      // Continuar con el proceso de inserción del usuario en la base de datos
      const usersMapping = UsersFieldMapping.getMappings();
      const pool = await getConnection();
      const request = pool.request();

      for (const fieldsUser in usersMapping) {
        request.input(fieldsUser, usersMapping[fieldsUser], userModel[fieldsUser]);
      }

      const result = await request.query(users_queries.newUser);

      if (result && result.recordset && result.recordset[0] && result.recordset[0].Message) {
        const successMessage = result.recordset[0].Message;
        res.json({
          message: successMessage,
        });
      } else {
        res.json(userModel);
      }
    } else {
      res.status(404).json({ error: 'Empleado no encontrado' });
    }
  } catch (error) {
    // Manejo de errores
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ error: error.message || "Error al crear el usuario" });
  }
};


/**
 * @function getUsers
 * @description Obtiene la lista de usuarios desde la base de datos y responde con la lista en formato JSON.
 * @param {Object} req - Objeto de solicitud HTTP.
 * @param {Object} res - Objeto de respuesta HTTP.
 */
export const getUsers = async (req, res) => {
  
  try {
    const pool = await getConnection();
    const result = await pool.request().query(users_queries.getUsers);

    res.json(result.recordset);

  } catch (error) {
    res.status(500).send("Error al obtener lista de usuarios " + error.message);
    //console.error("Error al obtener lista de usuarios " + error.message);
  }
};

export const deactivateUser = async (req, res ) => {
  try {
    // Obtén el ID del empleado a desactivar desde la solicitud (req.params)
    const { idUser } = req.params;

    // Obtiene una conexión del pool de conexiones a la base de datos
    const pool = await getConnection();

    // Ejecuta el procedimiento almacenado para desactivar al empleado
    const result = await pool
      .request()
      .input('idUser', sql.Int, idUser)
      .query(users_queries.deactivateUser);

    if (result && result.recordset && result.recordset[0] && result.recordset[0].Message) {
      const successMessage = result.recordset[0].Message;
      res.json({ message: successMessage }); // Enviar el mensaje de éxito al cliente
    } else {
      res.json('Error al desactivar al usuario.'); // Enviar un mensaje de error si no hay mensaje de éxito
    }
  } catch (error) {
    // Manejar errores, registrar el error en la consola y responder con un código de estado 500 y el mensaje de error
    console.error('Error al desactivar al usuario:', error);
    res.status(500).json({ error: 'Error al desactivar al usuario: ' + error.message });
  }
};


export const updateUserPassword = async (req, res) => {
  const userId = req.params.userId; // Supongo que estás pasando el ID del usuario a través de la URL o del cuerpo de la solicitud
  const newPassword = req.body.newPassword; // La nueva contraseña proporcionada en la solicitud

  try {
    // Generar un hash de la nueva contraseña del usuario con bcrypt.
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(newPassword, saltRounds);

    // Actualizar la contraseña en la base de datos
    const pool = await getConnection();
    const request = pool.request();
    request.input('userId', userId);
    request.input('newPassword', hashedPassword);

    const updatePasswordQuery = 'UPDATE users SET password = @newPassword WHERE idUser = @userId';
    await request.query(updatePasswordQuery);

    res.json({ message: 'Contraseña actualizada con éxito' });
  } catch (error) {
    // Manejo de errores
    console.error("Error al actualizar la contraseña:", error);
    res.status(500).json({ error: error.message || "Error al actualizar la contraseña" });
  }
};


export const resetUserPassword = async (req, res) => {
  const idUser = req.params.idUser; // Supongo que estás pasando el ID del usuario a través de la URL o del cuerpo de la solicitud

  try {
    // Generar una nueva contraseña aleatoria
    const newPassword = generateRandomPassword();

    // Generar un hash de la nueva contraseña del usuario con bcrypt.
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(newPassword, saltRounds);

    // Actualizar la contraseña en la base de datos
    const pool = await getConnection();
    const request = pool.request();
    request.input('idUser', idUser);
    request.input('newPassword', hashedPassword);

    const updatePasswordQuery = 'UPDATE users SET password = @newPassword WHERE idUser = @idUser';
    await request.query(updatePasswordQuery);

    // Enviar la nueva contraseña al usuario (por ejemplo, a través de correo electrónico)
    // Aquí debes implementar el código para enviar la contraseña al usuario.

    res.json({ message: 'Contraseña reseteada con éxito' , newPassword , idUser});
  } catch (error) {
    // Manejo de errores
    console.error("Error al resetear la contraseña:", error);
    res.status(500).json({ error: error.message || "Error al resetear la contraseña" });
  }
};

// Función para generar una contraseña aleatoria
const generateRandomPassword = () => {
  // Lógica para generar una contraseña aleatoria, por ejemplo, usando caracteres alfanuméricos
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let newPassword = '';

  for (let i = 0; i < 10; i++) { // Generar una contraseña de 10 caracteres, puedes ajustar el tamaño
    const randomIndex = Math.floor(Math.random() * characters.length);
    newPassword += characters.charAt(randomIndex);
  }

  return newPassword;
};

