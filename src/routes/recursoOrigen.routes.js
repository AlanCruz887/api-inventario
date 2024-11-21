import { Router } from "express";
import {
    getAllRecursosOrigenController,
    getRecursoOrigenController,
    createRecursoOrigenController,
    updateRecursoOrigenController,
    deleteRecursoOrigenController,
} from "../controllers/recursoOrigen.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: RecursoOrigen
 *   description: API para la gestión de recursos de origen
 */

/**
 * @swagger
 * /api/recurso-origen/get-recursos-origen:
 *   get:
 *     summary: Obtener todos los recursos de origen
 *     description: Retorna una lista con todos los recursos de origen almacenados en el sistema.
 *     tags: [RecursoOrigen]
 *     responses:
 *       200:
 *         description: Lista de recursos de origen obtenida exitosamente.
 *       500:
 *         description: Error al obtener los recursos de origen.
 */
router.get("/get-recursos-origen", getAllRecursosOrigenController);

/**
 * @swagger
 * /api/recurso-origen/get-recurso-origen/{id}:
 *   get:
 *     summary: Obtener un recurso de origen por ID
 *     description: Retorna los datos de un recurso de origen específico según el ID proporcionado.
 *     tags: [RecursoOrigen]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del recurso de origen
 *     responses:
 *       200:
 *         description: Recurso de origen obtenido exitosamente.
 *       404:
 *         description: Recurso de origen no encontrado.
 *       500:
 *         description: Error al obtener el recurso de origen.
 */
router.get("/get-recurso-origen/:id", getRecursoOrigenController);

/**
 * @swagger
 * /api/recurso-origen/create-recurso-origen:
 *   post:
 *     summary: Crear un nuevo recurso de origen
 *     description: Crea un nuevo recurso de origen en el sistema con los datos proporcionados.
 *     tags: [RecursoOrigen]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descripcion_recurso:
 *                 type: string
 *                 example: "Estatal"
 *     responses:
 *       201:
 *         description: Recurso de origen creado exitosamente.
 *       500:
 *         description: Error al crear el recurso de origen.
 */
router.post("/create-recurso-origen", createRecursoOrigenController);

/**
 * @swagger
 * /api/recurso-origen/update-recurso-origen/{id}:
 *   put:
 *     summary: Actualizar un recurso de origen existente
 *     description: Actualiza los datos de un recurso de origen existente según el ID proporcionado.
 *     tags: [RecursoOrigen]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del recurso de origen a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descripcion_recurso:
 *                 type: string
 *     responses:
 *       200:
 *         description: Recurso de origen actualizado exitosamente.
 *       404:
 *         description: Recurso de origen no encontrado.
 *       500:
 *         description: Error al actualizar el recurso de origen.
 */
router.put("/update-recurso-origen/:id", updateRecursoOrigenController);

/**
 * @swagger
 * /api/recurso-origen/delete-recurso-origen/{id}:
 *   delete:
 *     summary: Eliminar un recurso de origen
 *     description: Elimina un recurso de origen del sistema según el ID proporcionado.
 *     tags: [RecursoOrigen]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del recurso de origen a eliminar
 *     responses:
 *       200:
 *         description: Recurso de origen eliminado exitosamente.
 *       404:
 *         description: Recurso de origen no encontrado.
 *       500:
 *         description: Error al eliminar el recurso de origen.
 */
router.delete("/delete-recurso-origen/:id", deleteRecursoOrigenController);

export default router;
