import { Router } from "express";
import {
    getAllBajasBienController,
    getBajaBienController,
    createBajaBienController,
    updateBajaBienController,
    deleteBajaBienController,
} from "../controllers/bajaBien.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: BajaBien
 *   description: API para la gestión de bajas de bienes
 */

/**
 * @swagger
 * /api/baja-bien/get-bajas-bien:
 *   get:
 *     summary: Obtener todas las bajas de bienes
 *     description: Retorna una lista con todas las bajas de bienes almacenadas en el sistema.
 *     tags: [BajaBien]
 *     responses:
 *       200:
 *         description: Lista de bajas de bienes obtenida exitosamente.
 *       500:
 *         description: Error al obtener las bajas de bienes.
 */
router.get("/get-bajas-bien", getAllBajasBienController);

/**
 * @swagger
 * /api/baja-bien/get-baja-bien/{id}:
 *   get:
 *     summary: Obtener una baja de bien por ID
 *     description: Retorna los datos de una baja de bien específica según el ID proporcionado.
 *     tags: [BajaBien]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único de la baja de bien
 *     responses:
 *       200:
 *         description: Baja de bien obtenida exitosamente.
 *       404:
 *         description: Baja de bien no encontrada.
 *       500:
 *         description: Error al obtener la baja de bien.
 */
router.get("/get-baja-bien/:id", getBajaBienController);

/**
 * @swagger
 * /api/baja-bien/create-baja-bien:
 *   post:
 *     summary: Crear una nueva baja de bien
 *     description: Crea una nueva baja de bien en el sistema con los datos proporcionados.
 *     tags: [BajaBien]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha_baja:
 *                 type: string
 *                 format: date
 *                 example: "2024-01-01"
 *               documento_ampare:
 *                 type: string
 *                 example: "Documento de respaldo"
 *               poliza_no:
 *                 type: string
 *                 example: "PZ123456"
 *               fecha_poliza:
 *                 type: string
 *                 format: date
 *                 example: "2024-02-01"
 *               id_bien:
 *                 type: integer
 *                 example: 1
 *               id_usuario:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Baja de bien creada exitosamente.
 *       500:
 *         description: Error al crear la baja de bien.
 */
router.post("/create-baja-bien", createBajaBienController);

/**
 * @swagger
 * /api/baja-bien/update-baja-bien/{id}:
 *   put:
 *     summary: Actualizar una baja de bien existente
 *     description: Actualiza los datos de una baja de bien existente según el ID proporcionado.
 *     tags: [BajaBien]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único de la baja de bien a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fecha_baja:
 *                 type: string
 *                 format: date
 *               documento_ampare:
 *                 type: string
 *               poliza_no:
 *                 type: string
 *               fecha_poliza:
 *                 type: string
 *                 format: date
 *               id_bien:
 *                 type: integer
 *               id_usuario:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Baja de bien actualizada exitosamente.
 *       404:
 *         description: Baja de bien no encontrada.
 *       500:
 *         description: Error al actualizar la baja de bien.
 */
router.put("/update-baja-bien/:id", updateBajaBienController);

/**
 * @swagger
 * /api/baja-bien/delete-baja-bien/{id}:
 *   delete:
 *     summary: Eliminar una baja de bien
 *     description: Elimina una baja de bien del sistema según el ID proporcionado.
 *     tags: [BajaBien]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único de la baja de bien a eliminar
 *     responses:
 *       200:
 *         description: Baja de bien eliminada exitosamente.
 *       404:
 *         description: Baja de bien no encontrada.
 *       500:
 *         description: Error al eliminar la baja de bien.
 */
router.delete("/delete-baja-bien/:id", deleteBajaBienController);

export default router;
