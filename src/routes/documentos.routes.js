import { Router } from "express";
import {
    getAllDocumentosController,
    getDocumentoController,
    createDocumentoController,
    updateDocumentoController,
    deleteDocumentoController,
} from "../controllers/documentos.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Documentos
 *   description: API para la gestión de documentos
 */

/**
 * @swagger
 * /api/documentos/get-documentos:
 *   get:
 *     summary: Obtener todos los documentos
 *     description: Retorna una lista con todos los documentos almacenados en el sistema.
 *     tags: [Documentos]
 *     responses:
 *       200:
 *         description: Lista de documentos obtenida exitosamente.
 *       500:
 *         description: Error al obtener los documentos.
 */
router.get("/get-documentos", getAllDocumentosController);

/**
 * @swagger
 * /api/documentos/get-documento/{id}:
 *   get:
 *     summary: Obtener un documento por ID
 *     description: Retorna los datos de un documento específico según el ID proporcionado.
 *     tags: [Documentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del documento
 *     responses:
 *       200:
 *         description: Documento obtenido exitosamente.
 *       404:
 *         description: Documento no encontrado.
 *       500:
 *         description: Error al obtener el documento.
 */
router.get("/get-documento/:id", getDocumentoController);

/**
 * @swagger
 * /api/documentos/create-documento:
 *   post:
 *     summary: Crear un nuevo documento
 *     description: Crea un nuevo documento en el sistema con los datos proporcionados.
 *     tags: [Documentos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               factura_documento:
 *                 type: string
 *                 example: "Factura #12345"
 *               fecha_documento:
 *                 type: string
 *                 format: date
 *                 example: "2024-01-01"
 *               estatus_legal:
 *                 type: string
 *                 example: "Propiedad legal"
 *               documento_ampare_propiedad:
 *                 type: string
 *                 example: "Documento XYZ"
 *               comentarios:
 *                 type: string
 *                 example: "Documento relacionado con la compra"
 *               id_bien:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Documento creado exitosamente.
 *       500:
 *         description: Error al crear el documento.
 */
router.post("/create-documento", createDocumentoController);

/**
 * @swagger
 * /api/documentos/update-documento/{id}:
 *   put:
 *     summary: Actualizar un documento existente
 *     description: Actualiza los datos de un documento existente según el ID proporcionado.
 *     tags: [Documentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del documento a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               factura_documento:
 *                 type: string
 *               fecha_documento:
 *                 type: string
 *                 format: date
 *               estatus_legal:
 *                 type: string
 *               documento_ampare_propiedad:
 *                 type: string
 *               comentarios:
 *                 type: string
 *               id_bien:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Documento actualizado exitosamente.
 *       404:
 *         description: Documento no encontrado.
 *       500:
 *         description: Error al actualizar el documento.
 */
router.put("/update-documento/:id", updateDocumentoController);

/**
 * @swagger
 * /api/documentos/delete-documento/{id}:
 *   delete:
 *     summary: Eliminar un documento
 *     description: Elimina un documento del sistema según el ID proporcionado.
 *     tags: [Documentos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del documento a eliminar
 *     responses:
 *       200:
 *         description: Documento eliminado exitosamente.
 *       404:
 *         description: Documento no encontrado.
 *       500:
 *         description: Error al eliminar el documento.
 */
router.delete("/delete-documento/:id", deleteDocumentoController);

export default router;
