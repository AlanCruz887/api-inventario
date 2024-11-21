import { Router } from "express";
import {
    getAllPosesionesController,
    getPosesionController,
    createPosesionController,
    updatePosesionController,
    deletePosesionController,
} from "../controllers/tipoPosesion.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: TipoPosesion
 *   description: API para la gestión de tipos de posesión
 */

/**
 * @swagger
 * /api/tipo-posesion/get-posesiones:
 *   get:
 *     summary: Obtener todos los tipos de posesión
 *     description: Retorna una lista con todos los tipos de posesión almacenados en el sistema.
 *     tags: [TipoPosesion]
 *     responses:
 *       200:
 *         description: Lista de tipos de posesión obtenida exitosamente.
 *       500:
 *         description: Error al obtener los tipos de posesión.
 */
router.get("/get-posesiones", getAllPosesionesController);

/**
 * @swagger
 * /api/tipo-posesion/get-posesion/{id}:
 *   get:
 *     summary: Obtener un tipo de posesión por ID
 *     description: Retorna los datos de un tipo de posesión específico según el ID proporcionado.
 *     tags: [TipoPosesion]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del tipo de posesión
 *     responses:
 *       200:
 *         description: Tipo de posesión obtenido exitosamente.
 *       404:
 *         description: Tipo de posesión no encontrado.
 *       500:
 *         description: Error al obtener el tipo de posesión.
 */
router.get("/get-posesion/:id", getPosesionController);

/**
 * @swagger
 * /api/tipo-posesion/create-posesion:
 *   post:
 *     summary: Crear un nuevo tipo de posesión
 *     description: Crea un nuevo tipo de posesión en el sistema con los datos proporcionados.
 *     tags: [TipoPosesion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descripcion_posesion:
 *                 type: string
 *                 example: "Posesión ejemplo"
 *               clave_posesion:
 *                 type: string
 *                 example: "PE001"
 *               status_posesion:
 *                 type: string
 *                 example: "Activo"
 *     responses:
 *       201:
 *         description: Tipo de posesión creado exitosamente.
 *       500:
 *         description: Error al crear el tipo de posesión.
 */
router.post("/create-posesion", createPosesionController);

/**
 * @swagger
 * /api/tipo-posesion/update-posesion/{id}:
 *   put:
 *     summary: Actualizar un tipo de posesión existente
 *     description: Actualiza los datos de un tipo de posesión existente según el ID proporcionado.
 *     tags: [TipoPosesion]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del tipo de posesión a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descripcion_posesion:
 *                 type: string
 *               clave_posesion:
 *                 type: string
 *               status_posesion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tipo de posesión actualizado exitosamente.
 *       404:
 *         description: Tipo de posesión no encontrado.
 *       500:
 *         description: Error al actualizar el tipo de posesión.
 */
router.put("/update-posesion/:id", updatePosesionController);

/**
 * @swagger
 * /api/tipo-posesion/delete-posesion/{id}:
 *   delete:
 *     summary: Eliminar un tipo de posesión
 *     description: Elimina un tipo de posesión específico del sistema según el ID proporcionado.
 *     tags: [TipoPosesion]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del tipo de posesión a eliminar
 *     responses:
 *       200:
 *         description: Tipo de posesión eliminado exitosamente.
 *       404:
 *         description: Tipo de posesión no encontrado.
 *       500:
 *         description: Error al eliminar el tipo de posesión.
 */
router.delete("/delete-posesion/:id", deletePosesionController);

export default router;
