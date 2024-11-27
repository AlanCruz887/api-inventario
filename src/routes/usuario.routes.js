import { Router } from "express";
import {
    getAllUsuariosController,
    getUsuarioController,
    createUsuarioController,
    updateUsuarioController,
    deleteUsuarioController,
} from "../controllers/usuario.controller.js";
import { authenticateJWT } from "../middlewares/authenticateJWT.js";
import { checkRole } from "../middlewares/roleCheck.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Usuario
 *   description: API para la gestión de usuarios
 */

/**
 * @swagger
 * /api/usuario/get-usuarios:
 *   get:
 *     summary: Obtener todos los usuarios
 *     description: Retorna una lista con todos los usuarios almacenados en el sistema.
 *     tags: [Usuario]
 *     responses:
 *       200:
 *         description: Lista de usuarios obtenida exitosamente.
 *       500:
 *         description: Error al obtener los usuarios.
 */
router.get("/get-usuarios",authenticateJWT,checkRole(["Admin","User"]), getAllUsuariosController);

/**
 * @swagger
 * /api/usuario/get-usuario/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     description: Retorna los datos de un usuario específico según el ID proporcionado.
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del usuario
 *     responses:
 *       200:
 *         description: Usuario obtenido exitosamente.
 *       404:
 *         description: Usuario no encontrado.
 *       500:
 *         description: Error al obtener el usuario.
 */
router.get("/get-usuario/:id",authenticateJWT,checkRole(["User"]), getUsuarioController);

/**
 * @swagger
 * /api/usuario/create-usuario:
 *   post:
 *     summary: Crear un nuevo usuario
 *     description: Crea un nuevo usuario en el sistema con los datos proporcionados.
 *     tags: [Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: string
 *                 example: "admin"
 *               contrasena:
 *                 type: string
 *                 example: "password123"
 *               id_empleado:
 *                 type: integer
 *                 example: 1
 *               id_rol:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente.
 *       500:
 *         description: Error al crear el usuario.
 */
router.post("/create-usuario", createUsuarioController);

/**
 * @swagger
 * /api/usuario/update-usuario/{id}:
 *   put:
 *     summary: Actualizar un usuario existente
 *     description: Actualiza los datos de un usuario existente según el ID proporcionado.
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del usuario a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: string
 *               contrasena:
 *                 type: string
 *               id_empleado:
 *                 type: integer
 *               id_rol:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente.
 *       404:
 *         description: Usuario no encontrado.
 *       500:
 *         description: Error al actualizar el usuario.
 */
router.put("/update-usuario/:id", updateUsuarioController);

/**
 * @swagger
 * /api/usuario/delete-usuario/{id}:
 *   delete:
 *     summary: Eliminar un usuario
 *     description: Elimina un usuario del sistema según el ID proporcionado.
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del usuario a eliminar
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente.
 *       404:
 *         description: Usuario no encontrado.
 *       500:
 *         description: Error al eliminar el usuario.
 */
router.delete("/delete-usuario/:id", deleteUsuarioController);

export default router;
