import { Router } from "express";
import {
    getAllBienesController,
    getBienController,
    createBienController,
    updateBienController,
    deleteBienController,
} from "../controllers/bien.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Bien
 *   description: API para la gestión de bienes
 */

/**
 * @swagger
 * /api/bien/get-bienes:
 *   get:
 *     summary: Obtener todos los bienes
 *     description: Retorna una lista con todos los bienes almacenados en el sistema.
 *     tags: [Bien]
 *     responses:
 *       200:
 *         description: Lista de bienes obtenida exitosamente.
 *       500:
 *         description: Error al obtener los bienes.
 */
router.get("/get-bienes", getAllBienesController);

/**
 * @swagger
 * /api/bien/get-bien/{id}:
 *   get:
 *     summary: Obtener un bien por ID
 *     description: Retorna los datos de un bien específico según el ID proporcionado.
 *     tags: [Bien]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del bien
 *     responses:
 *       200:
 *         description: Bien obtenido exitosamente.
 *       404:
 *         description: Bien no encontrado.
 *       500:
 *         description: Error al obtener el bien.
 */
router.get("/get-bien/:id", getBienController);

/**
 * @swagger
 * /api/bien/create-bien:
 *   post:
 *     summary: Crear un nuevo bien
 *     description: Crea un nuevo bien en el sistema con los datos proporcionados.
 *     tags: [Bien]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               costo:
 *                 type: number
 *                 example: 5000.50
 *               fecha_adquisicion:
 *                 type: string
 *                 format: date
 *                 example: "2024-01-01"
 *               serie:
 *                 type: string
 *                 example: "12345ABC"
 *               estado_bien:
 *                 type: string
 *                 example: "Asignado"
 *               no_inventario:
 *                 type: string
 *                 example: "INV001"
 *               codificacion_objeto_gasto:
 *                 type: string
 *                 example: "GAST001"
 *               propuesto_baja:
 *                 type: string
 *                 example: "No"
 *               reparacion_baja:
 *                 type: string
 *                 example: "Reparacion"
 *               motivo_no_asignado:
 *                 type: string
 *                 example: "Motivo de ejemplo"
 *               id_producto:
 *                 type: integer
 *                 example: 1
 *               id_tipo_posesion:
 *                 type: integer
 *                 example: 2
 *               id_subcuenta:
 *                 type: integer
 *                 example: 3
 *               id_partida:
 *                 type: integer
 *                 example: 4
 *               id_status_bien:
 *                 type: integer
 *                 example: 5
 *               id_tipo_alta:
 *                 type: integer
 *                 example: 6
 *               id_recurso_origen:
 *                 type: integer
 *                 example: 7
 *     responses:
 *       201:
 *         description: Bien creado exitosamente.
 *       500:
 *         description: Error al crear el bien.
 */
router.post("/create-bien", createBienController);

/**
 * @swagger
 * /api/bien/update-bien/{id}:
 *   put:
 *     summary: Actualizar un bien existente
 *     description: Actualiza los datos de un bien existente según el ID proporcionado.
 *     tags: [Bien]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del bien a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               costo:
 *                 type: number
 *               fecha_adquisicion:
 *                 type: string
 *                 format: date
 *               serie:
 *                 type: string
 *               estado_bien:
 *                 type: string
 *               no_inventario:
 *                 type: string
 *               codificacion_objeto_gasto:
 *                 type: string
 *               propuesto_baja:
 *                 type: string
 *               reparacion_baja:
 *                 type: string
 *               motivo_no_asignado:
 *                 type: string
 *               id_producto:
 *                 type: integer
 *               id_tipo_posesion:
 *                 type: integer
 *               id_subcuenta:
 *                 type: integer
 *               id_partida:
 *                 type: integer
 *               id_status_bien:
 *                 type: integer
 *               id_tipo_alta:
 *                 type: integer
 *               id_recurso_origen:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Bien actualizado exitosamente.
 *       404:
 *         description: Bien no encontrado.
 *       500:
 *         description: Error al actualizar el bien.
 */
router.put("/update-bien/:id", updateBienController);

/**
 * @swagger
 * /api/bien/delete-bien/{id}:
 *   delete:
 *     summary: Eliminar un bien
 *     description: Elimina un bien del sistema según el ID proporcionado.
 *     tags: [Bien]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del bien a eliminar
 *     responses:
 *       200:
 *         description: Bien eliminado exitosamente.
 *       404:
 *         description: Bien no encontrado.
 *       500:
 *         description: Error al eliminar el bien.
 */
router.delete("/delete-bien/:id", deleteBienController);

export default router;
