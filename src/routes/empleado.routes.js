import { Router } from "express";
import {
    getAllEmpleadosController,
    getEmpleadoController,
    createEmpleadoController,
    updateEmpleadoController,
    deleteEmpleadoController,
} from "../controllers/empleado.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Empleado
 *   description: API para la gestión de empleados
 */

/**
 * @swagger
 * /api/empleado/get-empleados:
 *   get:
 *     summary: Obtener todos los empleados
 *     description: Retorna una lista con todos los empleados almacenados en el sistema.
 *     tags: [Empleado]
 *     responses:
 *       200:
 *         description: Lista de empleados obtenida exitosamente.
 *       500:
 *         description: Error al obtener los empleados.
 */
router.get("/get-empleados", getAllEmpleadosController);

/**
 * @swagger
 * /api/empleado/get-empleado/{id}:
 *   get:
 *     summary: Obtener un empleado por ID
 *     description: Retorna los datos de un empleado específico según el ID proporcionado.
 *     tags: [Empleado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del empleado
 *     responses:
 *       200:
 *         description: Empleado obtenido exitosamente.
 *       404:
 *         description: Empleado no encontrado.
 *       500:
 *         description: Error al obtener el empleado.
 */
router.get("/get-empleado/:id", getEmpleadoController);

/**
 * @swagger
 * /api/empleado/create-empleado:
 *   post:
 *     summary: Crear un nuevo empleado
 *     description: Crea un nuevo empleado en el sistema con los datos proporcionados.
 *     tags: [Empleado]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_empleado:
 *                 type: string
 *                 example: "Juan Pérez"
 *               correo_electronico:
 *                 type: string
 *                 example: "juan.perez@example.com"
 *               rfc:
 *                 type: string
 *                 example: "PEMJ810101XYZ"
 *               numero_contacto:
 *                 type: string
 *                 example: "5551234567"
 *               status_empleado:
 *                 type: string
 *                 example: "Activo"
 *               id_area:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Empleado creado exitosamente.
 *       500:
 *         description: Error al crear el empleado.
 */
router.post("/create-empleado", createEmpleadoController);

/**
 * @swagger
 * /api/empleado/update-empleado/{id}:
 *   put:
 *     summary: Actualizar un empleado existente
 *     description: Actualiza los datos de un empleado existente según el ID proporcionado.
 *     tags: [Empleado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del empleado a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_empleado:
 *                 type: string
 *               correo_electronico:
 *                 type: string
 *               rfc:
 *                 type: string
 *               numero_contacto:
 *                 type: string
 *               status_empleado:
 *                 type: string
 *               id_area:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Empleado actualizado exitosamente.
 *       404:
 *         description: Empleado no encontrado.
 *       500:
 *         description: Error al actualizar el empleado.
 */
router.put("/update-empleado/:id", updateEmpleadoController);

/**
 * @swagger
 * /api/empleado/delete-empleado/{id}:
 *   delete:
 *     summary: Eliminar un empleado
 *     description: Elimina un empleado del sistema según el ID proporcionado.
 *     tags: [Empleado]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del empleado a eliminar
 *     responses:
 *       200:
 *         description: Empleado eliminado exitosamente.
 *       404:
 *         description: Empleado no encontrado.
 *       500:
 *         description: Error al eliminar el empleado.
 */
router.delete("/delete-empleado/:id", deleteEmpleadoController);

export default router;
