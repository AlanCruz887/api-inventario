import { Router } from "express";
import {
    getAllSubcuentasController,
    getSubcuentaController,
    createSubcuentaController,
    updateSubcuentaController,
    deleteSubcuentaController,
} from "../controllers/subcuentaArmonizada.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: SubcuentaArmonizada
 *   description: Endpoints para la gestión de subcuentas armonizadas
 */

/**
 * @swagger
 * /api/subcuenta-armonizada/get-subcuentas:
 *   get:
 *     summary: Obtener todas las subcuentas armonizadas
 *     description: Retorna una lista de todas las subcuentas armonizadas almacenadas en el sistema.
 *     tags: [SubcuentaArmonizada]
 *     responses:
 *       200:
 *         description: Lista de todas las subcuentas obtenidas exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Subcuentas obtenidas con éxito:"
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id_subcuenta:
 *                         type: integer
 *                         example: 1
 *                       nombre_subcuenta:
 *                         type: string
 *                         example: "Subcuenta ejemplo"
 *                       status_subcuenta:
 *                         type: string
 *                         example: "Activo"
 *                       borrador_subcuenta:
 *                         type: boolean
 *                         example: false
 *       500:
 *         description: Error al obtener las subcuentas.
 */
router.get("/get-subcuentas", getAllSubcuentasController);

/**
 * @swagger
 * /api/subcuenta-armonizada/get-subcuenta/{id}:
 *   get:
 *     summary: Obtener una subcuenta por ID
 *     description: Retorna los datos de una subcuenta específica según el ID proporcionado.
 *     tags: [SubcuentaArmonizada]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único de la subcuenta
 *     responses:
 *       200:
 *         description: Datos de la subcuenta obtenidos exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Subcuenta obtenida con éxito:"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id_subcuenta:
 *                       type: integer
 *                       example: 1
 *                     nombre_subcuenta:
 *                       type: string
 *                       example: "Subcuenta ejemplo"
 *                     status_subcuenta:
 *                       type: string
 *                       example: "Activo"
 *                     borrador_subcuenta:
 *                       type: boolean
 *                       example: false
 *       404:
 *         description: Subcuenta no encontrada.
 *       500:
 *         description: Error al obtener la subcuenta.
 */
router.get("/get-subcuenta/:id", getSubcuentaController);

/**
 * @swagger
 * /api/subcuenta-armonizada/create-subcuenta:
 *   post:
 *     summary: Crear una nueva subcuenta armonizada
 *     description: Crea una nueva subcuenta armonizada en el sistema con los datos proporcionados.
 *     tags: [SubcuentaArmonizada]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_subcuenta:
 *                 type: string
 *                 example: "Subcuenta nueva"
 *               status_subcuenta:
 *                 type: string
 *                 example: "Activo"
 *               borrador_subcuenta:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Subcuenta creada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: "Subcuenta creada con éxito:"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id_subcuenta:
 *                       type: integer
 *                       example: 1
 *       500:
 *         description: Error al crear la subcuenta.
 */
router.post("/create-subcuenta", createSubcuentaController);

/**
 * @swagger
 * /api/subcuenta-armonizada/update-subcuenta/{id}:
 *   put:
 *     summary: Actualizar una subcuenta existente
 *     description: Actualiza los datos de una subcuenta existente según el ID proporcionado.
 *     tags: [SubcuentaArmonizada]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único de la subcuenta a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_subcuenta:
 *                 type: string
 *               status_subcuenta:
 *                 type: string
 *               borrador_subcuenta:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Subcuenta actualizada exitosamente.
 *       404:
 *         description: Subcuenta no encontrada.
 *       500:
 *         description: Error al actualizar la subcuenta.
 */
router.put("/update-subcuenta/:id", updateSubcuentaController);

/**
 * @swagger
 * /api/subcuenta-armonizada/delete-subcuenta/{id}:
 *   delete:
 *     summary: Eliminar una subcuenta
 *     description: Elimina una subcuenta específica del sistema según el ID proporcionado.
 *     tags: [SubcuentaArmonizada]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único de la subcuenta a eliminar
 *     responses:
 *       200:
 *         description: Subcuenta eliminada exitosamente.
 *       404:
 *         description: Subcuenta no encontrada.
 *       500:
 *         description: Error al eliminar la subcuenta.
 */
router.delete("/delete-subcuenta/:id", deleteSubcuentaController);

export default router;
