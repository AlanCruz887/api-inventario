import { Router } from "express";
import {
    getAllTiposAltaController,
    getTipoAltaController,
    createTipoAltaController,
    updateTipoAltaController,
    deleteTipoAltaController,
} from "../controllers/tipoAlta.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: TipoAlta
 *   description: API para la gestión de tipos de alta
 */

/**
 * @swagger
 * /api/tipo-alta/get-tipos-alta:
 *   get:
 *     summary: Obtener todos los tipos de alta
 *     description: Retorna una lista con todos los tipos de alta almacenados en el sistema.
 *     tags: [TipoAlta]
 *     responses:
 *       200:
 *         description: Lista de tipos de alta obtenida exitosamente.
 *       500:
 *         description: Error al obtener los tipos de alta.
 */
router.get("/get-tipos-alta", getAllTiposAltaController);

/**
 * @swagger
 * /api/tipo-alta/get-tipo-alta/{id}:
 *   get:
 *     summary: Obtener un tipo de alta por ID
 *     description: Retorna los datos de un tipo de alta específico según el ID proporcionado.
 *     tags: [TipoAlta]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del tipo de alta
 *     responses:
 *       200:
 *         description: Tipo de alta obtenido exitosamente.
 *       404:
 *         description: Tipo de alta no encontrado.
 *       500:
 *         description: Error al obtener el tipo de alta.
 */
router.get("/get-tipo-alta/:id", getTipoAltaController);

/**
 * @swagger
 * /api/tipo-alta/create-tipo-alta:
 *   post:
 *     summary: Crear un nuevo tipo de alta
 *     description: Crea un nuevo tipo de alta en el sistema con los datos proporcionados.
 *     tags: [TipoAlta]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descripcion_alta:
 *                 type: string
 *                 example: "Compra"
 *     responses:
 *       201:
 *         description: Tipo de alta creado exitosamente.
 *       500:
 *         description: Error al crear el tipo de alta.
 */
router.post("/create-tipo-alta", createTipoAltaController);

/**
 * @swagger
 * /api/tipo-alta/update-tipo-alta/{id}:
 *   put:
 *     summary: Actualizar un tipo de alta existente
 *     description: Actualiza los datos de un tipo de alta existente según el ID proporcionado.
 *     tags: [TipoAlta]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del tipo de alta a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descripcion_alta:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tipo de alta actualizado exitosamente.
 *       404:
 *         description: Tipo de alta no encontrado.
 *       500:
 *         description: Error al actualizar el tipo de alta.
 */
router.put("/update-tipo-alta/:id", updateTipoAltaController);

/**
 * @swagger
 * /api/tipo-alta/delete-tipo-alta/{id}:
 *   delete:
 *     summary: Eliminar un tipo de alta
 *     description: Elimina un tipo de alta del sistema según el ID proporcionado.
 *     tags: [TipoAlta]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del tipo de alta a eliminar
 *     responses:
 *       200:
 *         description: Tipo de alta eliminado exitosamente.
 *       404:
 *         description: Tipo de alta no encontrado.
 *       500:
 *         description: Error al eliminar el tipo de alta.
 */
router.delete("/delete-tipo-alta/:id", deleteTipoAltaController);

export default router;
