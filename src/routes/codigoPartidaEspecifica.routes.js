import { Router } from "express";
import {
    getAllPartidasController,
    getPartidaController,
    createPartidaController,
    updatePartidaController,
    deletePartidaController,
} from "../controllers/codigoPartidaEspecifica.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: CodigoPartidaEspecifica
 *   description: API para la gestión de partidas específicas
 */

/**
 * @swagger
 * /api/codigo-partida-especifica/get-partidas:
 *   get:
 *     summary: Obtener todas las partidas específicas
 *     description: Retorna una lista con todas las partidas específicas almacenadas en el sistema.
 *     tags: [CodigoPartidaEspecifica]
 *     responses:
 *       200:
 *         description: Lista de partidas específicas obtenida exitosamente.
 *       500:
 *         description: Error al obtener las partidas.
 */
router.get("/get-partidas", getAllPartidasController);

/**
 * @swagger
 * /api/codigo-partida-especifica/get-partida/{id}:
 *   get:
 *     summary: Obtener una partida específica por ID
 *     description: Retorna los datos de una partida específica según el ID proporcionado.
 *     tags: [CodigoPartidaEspecifica]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único de la partida específica
 *     responses:
 *       200:
 *         description: Partida específica obtenida exitosamente.
 *       404:
 *         description: Partida específica no encontrada.
 *       500:
 *         description: Error al obtener la partida específica.
 */
router.get("/get-partida/:id", getPartidaController);

/**
 * @swagger
 * /api/codigo-partida-especifica/create-partida:
 *   post:
 *     summary: Crear una nueva partida específica
 *     description: Crea una nueva partida específica en el sistema con los datos proporcionados.
 *     tags: [CodigoPartidaEspecifica]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               codigo_partida:
 *                 type: string
 *                 example: "P001"
 *               nombre_partida:
 *                 type: string
 *                 example: "Partida ejemplo"
 *               borrador_partida:
 *                 type: boolean
 *                 example: true
 *               status_partida:
 *                 type: string
 *                 example: "Activo"
 *               id_subcuenta:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Partida creada exitosamente.
 *       500:
 *         description: Error al crear la partida.
 */
router.post("/create-partida", createPartidaController);

/**
 * @swagger
 * /api/codigo-partida-especifica/update-partida/{id}:
 *   put:
 *     summary: Actualizar una partida específica existente
 *     description: Actualiza los datos de una partida específica existente según el ID proporcionado.
 *     tags: [CodigoPartidaEspecifica]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único de la partida específica a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               codigo_partida:
 *                 type: string
 *               nombre_partida:
 *                 type: string
 *               borrador_partida:
 *                 type: boolean
 *               status_partida:
 *                 type: string
 *               id_subcuenta:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Partida actualizada exitosamente.
 *       404:
 *         description: Partida no encontrada.
 *       500:
 *         description: Error al actualizar la partida.
 */
router.put("/update-partida/:id", updatePartidaController);

/**
 * @swagger
 * /api/codigo-partida-especifica/delete-partida/{id}:
 *   delete:
 *     summary: Eliminar una partida específica
 *     description: Elimina una partida específica del sistema según el ID proporcionado.
 *     tags: [CodigoPartidaEspecifica]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único de la partida específica a eliminar
 *     responses:
 *       200:
 *         description: Partida eliminada exitosamente.
 *       404:
 *         description: Partida no encontrada.
 *       500:
 *         description: Error al eliminar la partida.
 */
router.delete("/delete-partida/:id", deletePartidaController);

export default router;
