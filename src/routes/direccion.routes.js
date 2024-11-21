import { Router } from "express";
import {
    getAllDireccionesController,
    getDireccionController,
    createDireccionController,
    updateDireccionController,
    deleteDireccionController,
} from "../controllers/direccion.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Direccion
 *   description: API para la gestión de direcciones
 */

/**
 * @swagger
 * /api/direccion/get-direcciones:
 *   get:
 *     summary: Obtener todas las direcciones
 *     description: Retorna una lista con todas las direcciones almacenadas en el sistema.
 *     tags: [Direccion]
 *     responses:
 *       200:
 *         description: Lista de direcciones obtenida exitosamente.
 *       500:
 *         description: Error al obtener las direcciones.
 */
router.get("/get-direcciones", getAllDireccionesController);

/**
 * @swagger
 * /api/direccion/get-direccion/{id}:
 *   get:
 *     summary: Obtener una dirección por ID
 *     description: Retorna los datos de una dirección específica según el ID proporcionado.
 *     tags: [Direccion]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único de la dirección
 *     responses:
 *       200:
 *         description: Dirección obtenida exitosamente.
 *       404:
 *         description: Dirección no encontrada.
 *       500:
 *         description: Error al obtener la dirección.
 */
router.get("/get-direccion/:id", getDireccionController);

/**
 * @swagger
 * /api/direccion/create-direccion:
 *   post:
 *     summary: Crear una nueva dirección
 *     description: Crea una nueva dirección en el sistema con los datos proporcionados.
 *     tags: [Direccion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_direccion:
 *                 type: string
 *                 example: "Dirección de Recursos Humanos"
 *     responses:
 *       201:
 *         description: Dirección creada exitosamente.
 *       500:
 *         description: Error al crear la dirección.
 */
router.post("/create-direccion", createDireccionController);

/**
 * @swagger
 * /api/direccion/update-direccion/{id}:
 *   put:
 *     summary: Actualizar una dirección existente
 *     description: Actualiza los datos de una dirección existente según el ID proporcionado.
 *     tags: [Direccion]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único de la dirección a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_direccion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Dirección actualizada exitosamente.
 *       404:
 *         description: Dirección no encontrada.
 *       500:
 *         description: Error al actualizar la dirección.
 */
router.put("/update-direccion/:id", updateDireccionController);

/**
 * @swagger
 * /api/direccion/delete-direccion/{id}:
 *   delete:
 *     summary: Eliminar una dirección
 *     description: Elimina una dirección del sistema según el ID proporcionado.
 *     tags: [Direccion]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único de la dirección a eliminar
 *     responses:
 *       200:
 *         description: Dirección eliminada exitosamente.
 *       404:
 *         description: Dirección no encontrada.
 *       500:
 *         description: Error al eliminar la dirección.
 */
router.delete("/delete-direccion/:id", deleteDireccionController);

export default router;
