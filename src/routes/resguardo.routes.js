import { Router } from "express";
import {
    getAllResguardosController,
    getResguardoController,
    createResguardoController,
    updateResguardoController,
    deleteResguardoController,
} from "../controllers/resguardo.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Resguardo
 *   description: API para la gestión de resguardos
 */

/**
 * @swagger
 * /api/resguardo/get-resguardos:
 *   get:
 *     summary: Obtener todos los resguardos
 *     description: Retorna una lista con todos los resguardos almacenados en el sistema.
 *     tags: [Resguardo]
 *     responses:
 *       200:
 *         description: Lista de resguardos obtenida exitosamente.
 *       500:
 *         description: Error al obtener los resguardos.
 */
router.get("/get-resguardos", getAllResguardosController);

/**
 * @swagger
 * /api/resguardo/get-resguardo/{id}:
 *   get:
 *     summary: Obtener un resguardo por ID
 *     description: Retorna los datos de un resguardo específico según el ID proporcionado.
 *     tags: [Resguardo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del resguardo
 *     responses:
 *       200:
 *         description: Resguardo obtenido exitosamente.
 *       404:
 *         description: Resguardo no encontrado.
 *       500:
 *         description: Error al obtener el resguardo.
 */
router.get("/get-resguardo/:id", getResguardoController);

/**
 * @swagger
 * /api/resguardo/create-resguardo:
 *   post:
 *     summary: Crear un nuevo resguardo
 *     description: Crea un nuevo resguardo en el sistema con los datos proporcionados.
 *     tags: [Resguardo]
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
 *               ubicacion:
 *                 type: string
 *                 example: "Oficina central"
 *               id_bien:
 *                 type: integer
 *                 example: 1
 *               id_empleado:
 *                 type: integer
 *                 example: 2
 *               id_direccion:
 *                 type: integer
 *                 example: 3
 *               id_usuario:
 *                 type: integer
 *                 example: 4
 *     responses:
 *       201:
 *         description: Resguardo creado exitosamente.
 *       500:
 *         description: Error al crear el resguardo.
 */
router.post("/create-resguardo", createResguardoController);

/**
 * @swagger
 * /api/resguardo/update-resguardo/{id}:
 *   put:
 *     summary: Actualizar un resguardo existente
 *     description: Actualiza los datos de un resguardo existente según el ID proporcionado.
 *     tags: [Resguardo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del resguardo a actualizar
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
 *               ubicacion:
 *                 type: string
 *               id_bien:
 *                 type: integer
 *               id_empleado:
 *                 type: integer
 *               id_direccion:
 *                 type: integer
 *               id_usuario:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Resguardo actualizado exitosamente.
 *       404:
 *         description: Resguardo no encontrado.
 *       500:
 *         description: Error al actualizar el resguardo.
 */
router.put("/update-resguardo/:id", updateResguardoController);

/**
 * @swagger
 * /api/resguardo/delete-resguardo/{id}:
 *   delete:
 *     summary: Eliminar un resguardo
 *     description: Elimina un resguardo del sistema según el ID proporcionado.
 *     tags: [Resguardo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del resguardo a eliminar
 *     responses:
 *       200:
 *         description: Resguardo eliminado exitosamente.
 *       404:
 *         description: Resguardo no encontrado.
 *       500:
 *         description: Error al eliminar el resguardo.
 */
router.delete("/delete-resguardo/:id", deleteResguardoController);

export default router;
