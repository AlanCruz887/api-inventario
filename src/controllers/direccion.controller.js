import { CODES_HTTP } from "../constants/global.js";
import {
    getAllDirecciones,
    getDireccionById,
    createDireccion,
    updateDireccion,
    deleteDireccion,
} from "../DAO/direccion.DAO.js";

// Obtener todas las direcciones
export const getAllDireccionesController = async (req, res) => {
    try {
        const direcciones = await getAllDirecciones();
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Direcciones obtenidas con éxito:",
            data: direcciones,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener las direcciones.",
        });
    }
};

// Obtener una dirección por ID
export const getDireccionController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const direccion = await getDireccionById(id);

        if (!direccion) {
            return res.status(CODES_HTTP.NOT_FOUND).json({
                success: false,
                message: "Dirección no encontrada.",
            });
        }

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Dirección obtenida con éxito:",
            data: direccion,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener la dirección.",
        });
    }
};

// Crear una nueva dirección
export const createDireccionController = async (req, res) => {
    try {
        const newDireccion = await createDireccion(req.body);
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "Dirección creada con éxito:",
            data: newDireccion,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear la dirección.",
        });
    }
};

// Actualizar una dirección existente
export const updateDireccionController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedDireccion = await updateDireccion(id, req.body);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Dirección actualizada con éxito:",
            data: updatedDireccion,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar la dirección.",
        });
    }
};

// Eliminar una dirección por ID
export const deleteDireccionController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deleteDireccion(id);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Dirección eliminada con éxito.",
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar la dirección.",
        });
    }
};
