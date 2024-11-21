import { Router } from "express";
import {
    getAllProductosController,
    getProductoController,
    createProductoController,
    updateProductoController,
    deleteProductoController,
} from "../controllers/producto.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Producto
 *   description: API para la gestión de productos
 */

/**
 * @swagger
 * /api/producto/get-productos:
 *   get:
 *     summary: Obtener todos los productos
 *     description: Retorna una lista con todos los productos almacenados en el sistema.
 *     tags: [Producto]
 *     responses:
 *       200:
 *         description: Lista de productos obtenida exitosamente.
 *       500:
 *         description: Error al obtener los productos.
 */
router.get("/get-productos", getAllProductosController);

/**
 * @swagger
 * /api/producto/get-producto/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     description: Retorna los datos de un producto específico según el ID proporcionado.
 *     tags: [Producto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del producto
 *     responses:
 *       200:
 *         description: Producto obtenido exitosamente.
 *       404:
 *         description: Producto no encontrado.
 *       500:
 *         description: Error al obtener el producto.
 */
router.get("/get-producto/:id", getProductoController);

/**
 * @swagger
 * /api/producto/create-producto:
 *   post:
 *     summary: Crear un nuevo producto
 *     description: Crea un nuevo producto en el sistema con los datos proporcionados.
 *     tags: [Producto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_producto:
 *                 type: string
 *                 example: "Producto ejemplo"
 *               modelo:
 *                 type: string
 *                 example: "Modelo X"
 *               ruta_imagen:
 *                 type: string
 *                 example: "ruta/imagen.png"
 *               caracteristicas:
 *                 type: string
 *                 example: "Características del producto"
 *               id_marca:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Producto creado exitosamente.
 *       500:
 *         description: Error al crear el producto.
 */
router.post("/create-producto", createProductoController);

/**
 * @swagger
 * /api/producto/update-producto/{id}:
 *   put:
 *     summary: Actualizar un producto existente
 *     description: Actualiza los datos de un producto existente según el ID proporcionado.
 *     tags: [Producto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del producto a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre_producto:
 *                 type: string
 *               modelo:
 *                 type: string
 *               ruta_imagen:
 *                 type: string
 *               caracteristicas:
 *                 type: string
 *               id_marca:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente.
 *       404:
 *         description: Producto no encontrado.
 *       500:
 *         description: Error al actualizar el producto.
 */
router.put("/update-producto/:id", updateProductoController);

/**
 * @swagger
 * /api/producto/delete-producto/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     description: Elimina un producto del sistema según el ID proporcionado.
 *     tags: [Producto]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID único del producto a eliminar
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente.
 *       404:
 *         description: Producto no encontrado.
 *       500:
 *         description: Error al eliminar el producto.
 */
router.delete("/delete-producto/:id", deleteProductoController);

export default router;
