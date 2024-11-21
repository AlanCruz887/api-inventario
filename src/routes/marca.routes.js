import { Router } from "express";
import {
    getAllMarcasController,
    getMarcaController,
    createMarcaController,
    updateMarcaController,
    deleteMarcaController,
} from "../controllers/marca.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Marca
 *   description: API para la gestión de marcas
 */

/**
 * @swagger
 * /api/marca/get-marcas:
 *   get:
 *     summary: Obtener todas las marcas
 *     description: Retorna una lista con todas las marcas almacenadas en el sistema.
 *     tags: [Marca]
 *     responses:
 *       200:
 *         description: Lista de marcas obtenida exitosamente.
 *       500:
 *         description: Error al obtener las marcas.
 */
router.get("/get-marcas", getAllMarcasController);

/**
 * @swagger
 * /api/marca/get-marca/{id}:
 *   get:
 *     summary: Obtener una marca por ID
 *     description: Retorna los datos de una marca específica según el ID proporcionado.
 *     tags: [Marca]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único de la marca
 *     responses:
 *       200:
 *         description: Marca obtenida exitosamente.
 *       404:
 *         description: Marca no encontrada.
 *       500:
 *         description: Error al obtener la marca.
 */
router.get("/get-marca/:id", getMarcaController);

/**
 * @swagger
 * /api/marca/create-marca:
 *   post:
 *     summary: Crear una nueva marca
 *     description: Crea una nueva marca en el sistema con los datos proporcionados.
 *     tags: [Marca]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_marca:
 *                 type: string
 *                 example: "Marca ejemplo"
 *               status_marca:
 *                 type: string
 *                 example: "Activo"
 *     responses:
 *       201:
 *         description: Marca creada exitosamente.
 *       500:
 *         description: Error al crear la marca.
 */
router.post("/create-marca", createMarcaController);

/**
 * @swagger
 * /api/marca/update-marca/{id}:
 *   put:
 *     summary: Actualizar una marca existente
 *     description: Actualiza los datos de una marca existente según el ID proporcionado.
 *     tags: [Marca]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único de la marca a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_marca:
 *                 type: string
 *               status_marca:
 *                 type: string
 *     responses:
 *       200:
 *         description: Marca actualizada exitosamente.
 *       404:
 *         description: Marca no encontrada.
 *       500:
 *         description: Error al actualizar la marca.
 */
router.put("/update-marca/:id", updateMarcaController);

/**
 * @swagger
 * /api/marca/delete-marca/{id}:
 *   delete:
 *     summary: Eliminar una marca
 *     description: Elimina una marca del sistema según el ID proporcionado.
 *     tags: [Marca]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único de la marca a eliminar
 *     responses:
 *       200:
 *         description: Marca eliminada exitosamente.
 *       404:
 *         description: Marca no encontrada.
 *       500:
 *         description: Error al eliminar la marca.
 */
router.delete("/delete-marca/:id", deleteMarcaController);

export default router;
