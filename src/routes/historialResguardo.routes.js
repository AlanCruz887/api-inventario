import { Router } from "express";
import {
    getAllHistorialesResguardoController,
    getHistorialResguardoController,
    createHistorialResguardoController,
    updateHistorialResguardoController,
    deleteHistorialResguardoController,
} from "../controllers/historialResguardo.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: HistorialResguardo
 *   description: API para la gestión de historiales de resguardo
 */

/**
 * @swagger
 * /api/historial-resguardo/get-historiales-resguardo:
 *   get:
 *     summary: Obtener todos los historiales de resguardo
 *     description: Retorna una lista con todos los historiales de resguardo almacenados en el sistema.
 *     tags: [HistorialResguardo]
 *     responses:
 *       200:
 *         description: Lista de historiales de resguardo obtenida exitosamente.
 *       500:
 *         description: Error al obtener los historiales de resguardo.
 */
router.get("/get-historiales-resguardo", getAllHistorialesResguardoController);

/**
 * @swagger
 * /api/historial-resguardo/get-historial-resguardo/{id}:
 *   get:
 *     summary: Obtener un historial de resguardo por ID
 *     description: Retorna los datos de un historial de resguardo específico según el ID proporcionado.
 *     tags: [HistorialResguardo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del historial de resguardo
 *     responses:
 *       200:
 *         description: Historial de resguardo obtenido exitosamente.
 *       404:
 *         description: Historial de resguardo no encontrado.
 *       500:
 *         description: Error al obtener el historial de resguardo.
 */
router.get("/get-historial-resguardo/:id", getHistorialResguardoController);

/**
 * @swagger
 * /api/historial-resguardo/create-historial-resguardo:
 *   post:
 *     summary: Crear un nuevo historial de resguardo
 *     description: Crea un nuevo historial de resguardo en el sistema con los datos proporcionados.
 *     tags: [HistorialResguardo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha_resguardo:
 *                 type: string
 *                 format: date
 *                 example: "2024-01-01"
 *               id_bien:
 *                 type: integer
 *                 example: 1
 *               id_empleado:
 *                 type: integer
 *                 example: 2
 *               id_usuario:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       201:
 *         description: Historial de resguardo creado exitosamente.
 *       500:
 *         description: Error al crear el historial de resguardo.
 */
router.post("/create-historial-resguardo", createHistorialResguardoController);

/**
 * @swagger
 * /api/historial-resguardo/update-historial-resguardo/{id}:
 *   put:
 *     summary: Actualizar un historial de resguardo existente
 *     description: Actualiza los datos de un historial de resguardo existente según el ID proporcionado.
 *     tags: [HistorialResguardo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del historial de resguardo a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha_resguardo:
 *                 type: string
 *                 format: date
 *               id_bien:
 *                 type: integer
 *               id_empleado:
 *                 type: integer
 *               id_usuario:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Historial de resguardo actualizado exitosamente.
 *       404:
 *         description: Historial de resguardo no encontrado.
 *       500:
 *         description: Error al actualizar el historial de resguardo.
 */
router.put("/update-historial-resguardo/:id", updateHistorialResguardoController);

/**
 * @swagger
 * /api/historial-resguardo/delete-historial-resguardo/{id}:
 *   delete:
 *     summary: Eliminar un historial de resguardo
 *     description: Elimina un historial de resguardo del sistema según el ID proporcionado.
 *     tags: [HistorialResguardo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del historial de resguardo a eliminar
 *     responses:
 *       200:
 *         description: Historial de resguardo eliminado exitosamente.
 *       404:
 *         description: Historial de resguardo no encontrado.
 *       500:
 *         description: Error al eliminar el historial de resguardo.
 */
router.delete("/delete-historial-resguardo/:id", deleteHistorialResguardoController);

export default router;
