import { Router } from "express";
import {
    getAllStatusBienController,
    getStatusBienController,
    createStatusBienController,
    updateStatusBienController,
    deleteStatusBienController,
} from "../controllers/statusBien.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: StatusBien
 *   description: API para la gestión de estados de bienes
 */

/**
 * @swagger
 * /api/status-bien/get-status-bien:
 *   get:
 *     summary: Obtener todos los estados de bienes
 *     description: Retorna una lista con todos los estados de bienes almacenados en el sistema.
 *     tags: [StatusBien]
 *     responses:
 *       200:
 *         description: Lista de estados de bienes obtenida exitosamente.
 *       500:
 *         description: Error al obtener los estados de bienes.
 */
router.get("/get-status-bien", getAllStatusBienController);

/**
 * @swagger
 * /api/status-bien/get-status-bien/{id}:
 *   get:
 *     summary: Obtener un estado de bien por ID
 *     description: Retorna los datos de un estado de bien específico según el ID proporcionado.
 *     tags: [StatusBien]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del estado de bien
 *     responses:
 *       200:
 *         description: Estado de bien obtenido exitosamente.
 *       404:
 *         description: Estado de bien no encontrado.
 *       500:
 *         description: Error al obtener el estado de bien.
 */
router.get("/get-status-bien/:id", getStatusBienController);

/**
 * @swagger
 * /api/status-bien/create-status-bien:
 *   post:
 *     summary: Crear un nuevo estado de bien
 *     description: Crea un nuevo estado de bien en el sistema con los datos proporcionados.
 *     tags: [StatusBien]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descripcion_status:
 *                 type: string
 *                 example: "Asignado"
 *     responses:
 *       201:
 *         description: Estado de bien creado exitosamente.
 *       500:
 *         description: Error al crear el estado de bien.
 */
router.post("/create-status-bien", createStatusBienController);

/**
 * @swagger
 * /api/status-bien/update-status-bien/{id}:
 *   put:
 *     summary: Actualizar un estado de bien existente
 *     description: Actualiza los datos de un estado de bien existente según el ID proporcionado.
 *     tags: [StatusBien]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del estado de bien a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descripcion_status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Estado de bien actualizado exitosamente.
 *       404:
 *         description: Estado de bien no encontrado.
 *       500:
 *         description: Error al actualizar el estado de bien.
 */
router.put("/update-status-bien/:id", updateStatusBienController);

/**
 * @swagger
 * /api/status-bien/delete-status-bien/{id}:
 *   delete:
 *     summary: Eliminar un estado de bien
 *     description: Elimina un estado de bien del sistema según el ID proporcionado.
 *     tags: [StatusBien]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del estado de bien a eliminar
 *     responses:
 *       200:
 *         description: Estado de bien eliminado exitosamente.
 *       404:
 *         description: Estado de bien no encontrado.
 *       500:
 *         description: Error al eliminar el estado de bien.
 */
router.delete("/delete-status-bien/:id", deleteStatusBienController);

export default router;
