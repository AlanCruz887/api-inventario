import { Router } from "express";
import {
    getAllRolesController,
    getRolController,
    createRolController,
    updateRolController,
    deleteRolController,
} from "../controllers/rol.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Rol
 *   description: API para la gestión de roles
 */

/**
 * @swagger
 * /api/rol/get-roles:
 *   get:
 *     summary: Obtener todos los roles
 *     description: Retorna una lista con todos los roles almacenados en el sistema.
 *     tags: [Rol]
 *     responses:
 *       200:
 *         description: Lista de roles obtenida exitosamente.
 *       500:
 *         description: Error al obtener los roles.
 */
router.get("/get-roles", getAllRolesController);

/**
 * @swagger
 * /api/rol/get-rol/{id}:
 *   get:
 *     summary: Obtener un rol por ID
 *     description: Retorna los datos de un rol específico según el ID proporcionado.
 *     tags: [Rol]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del rol
 *     responses:
 *       200:
 *         description: Rol obtenido exitosamente.
 *       404:
 *         description: Rol no encontrado.
 *       500:
 *         description: Error al obtener el rol.
 */
router.get("/get-rol/:id", getRolController);

/**
 * @swagger
 * /api/rol/create-rol:
 *   post:
 *     summary: Crear un nuevo rol
 *     description: Crea un nuevo rol en el sistema con los datos proporcionados.
 *     tags: [Rol]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_rol:
 *                 type: string
 *                 example: "Administrador"
 *               descripcion_rol:
 *                 type: string
 *                 example: "Rol con permisos completos."
 *     responses:
 *       201:
 *         description: Rol creado exitosamente.
 *       500:
 *         description: Error al crear el rol.
 */
router.post("/create-rol", createRolController);

/**
 * @swagger
 * /api/rol/update-rol/{id}:
 *   put:
 *     summary: Actualizar un rol existente
 *     description: Actualiza los datos de un rol existente según el ID proporcionado.
 *     tags: [Rol]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del rol a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_rol:
 *                 type: string
 *               descripcion_rol:
 *                 type: string
 *     responses:
 *       200:
 *         description: Rol actualizado exitosamente.
 *       404:
 *         description: Rol no encontrado.
 *       500:
 *         description: Error al actualizar el rol.
 */
router.put("/update-rol/:id", updateRolController);

/**
 * @swagger
 * /api/rol/delete-rol/{id}:
 *   delete:
 *     summary: Eliminar un rol
 *     description: Elimina un rol del sistema según el ID proporcionado.
 *     tags: [Rol]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del rol a eliminar
 *     responses:
 *       200:
 *         description: Rol eliminado exitosamente.
 *       404:
 *         description: Rol no encontrado.
 *       500:
 *         description: Error al eliminar el rol.
 */
router.delete("/delete-rol/:id", deleteRolController);

export default router;
