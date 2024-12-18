import { CODES_HTTP } from "../constants/global.js";
import {
    getAllProductos,
    getProductoById,
    createProducto,
    updateProducto,
    deleteProducto,
} from "../DAO/producto.DAO.js";

// Obtener todos los productos
export const getAllProductosController = async (req, res) => {
    try {
        const productos = await getAllProductos();
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Productos obtenidos con éxito:",
            data: productos,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener los productos.",
        });
    }
};

// Obtener un producto por ID
export const getProductoController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const producto = await getProductoById(id);

        if (!producto) {
            return res.status(CODES_HTTP.NOT_FOUND).json({
                success: false,
                message: "Producto no encontrado.",
            });
        }

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Producto obtenido con éxito:",
            data: producto,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el producto.",
        });
    }
};

// Crear un nuevo producto
export const createProductoController = async (req, res) => {
    try {
        const newProducto = await createProducto(req.body);
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "Producto creado con éxito:",
            data: newProducto,
        });
    } catch (error) {
        console.log(error)
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear el producto.",
        });
    }
};

// Actualizar un producto existente
export const updateProductoController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedProducto = await updateProducto(id, req.body);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Producto actualizado con éxito:",
            data: updatedProducto,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar el producto.",
        });
    }
};

// Eliminar un producto por ID
export const deleteProductoController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deleteProducto(id);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Producto eliminado con éxito.",
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar el producto.",
        });
    }
};
