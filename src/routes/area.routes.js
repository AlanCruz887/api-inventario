import { Router } from "express";
import {
    getAllAreasController,
    getAreaController,
    createAreaController,
    updateAreaController,
    deleteAreaController,
} from "../controllers/area.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Area
 *   description: API para la gestión de áreas
 */

/**
 * @swagger
 * /api/area/get-areas:
 *   get:
 *     summary: Obtener todas las áreas
 *     description: Retorna una lista con todas las áreas almacenadas en el sistema.
 *     tags: [Area]
 *     responses:
 *       200:
 *         description: Lista de áreas obtenida exitosamente.
 *       500:
 *         description: Error al obtener las áreas.
 */
router.get("/get-areas", getAllAreasController);

/**
 * @swagger
 * /api/area/get-area/{id}:
 *   get:
 *     summary: Obtener un área por ID
 *     description: Retorna los datos de un área específica según el ID proporcionado.
 *     tags: [Area]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del área
 *     responses:
 *       200:
 *         description: Área obtenida exitosamente.
 *       404:
 *         description: Área no encontrada.
 *       500:
 *         description: Error al obtener el área.
 */
router.get("/get-area/:id", getAreaController);

/**
 * @swagger
 * /api/area/create-area:
 *   post:
 *     summary: Crear una nueva área
 *     description: Crea una nueva área en el sistema con los datos proporcionados.
 *     tags: [Area]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_area:
 *                 type: string
 *                 example: "Recursos Humanos"
 *     responses:
 *       201:
 *         description: Área creada exitosamente.
 *       500:
 *         description: Error al crear el área.
 */
router.post("/create-area", createAreaController);

/**
 * @swagger
 * /api/area/update-area/{id}:
 *   put:
 *     summary: Actualizar un área existente
 *     description: Actualiza los datos de un área existente según el ID proporcionado.
 *     tags: [Area]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del área a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_area:
 *                 type: string
 *     responses:
 *       200:
 *         description: Área actualizada exitosamente.
 *       404:
 *         description: Área no encontrada.
 *       500:
 *         description: Error al actualizar el área.
 */
router.put("/update-area/:id", updateAreaController);

/**
 * @swagger
 * /api/area/delete-area/{id}:
 *   delete:
 *     summary: Eliminar un área
 *     description: Elimina un área del sistema según el ID proporcionado.
 *     tags: [Area]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del área a eliminar
 *     responses:
 *       200:
 *         description: Área eliminada exitosamente.
 *       404:
 *         description: Área no encontrada.
 *       500:
 *         description: Error al eliminar el área.
 */
router.delete("/delete-area/:id", deleteAreaController);

export default router;
