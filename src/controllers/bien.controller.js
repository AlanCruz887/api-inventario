import { CODES_HTTP } from "../constants/global.js";
import {
    getAllBienes,
    getBienById,
    createBien,
    updateBien,
    deleteBien,
} from "../DAO/bien.DAO.js";

// Obtener todos los bienes
export const getAllBienesController = async (req, res) => {
    try {
        const bienes = await getAllBienes();
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Bienes obtenidos con éxito:",
            data: bienes,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener los bienes.",
        });
    }
};

// Obtener un bien por ID
export const getBienController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const bien = await getBienById(id);

        if (!bien) {
            return res.status(CODES_HTTP.NOT_FOUND).json({
                success: false,
                message: "Bien no encontrado.",
            });
        }

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Bien obtenido con éxito:",
            data: bien,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el bien.",
        });
    }
};

// Crear un nuevo bien
export const createBienController = async (req, res) => {
    try {
        const newBien = await createBien(req.body);
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "Bien creado con éxito:",
            data: newBien,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear el bien.",
        });
    }
};

// Actualizar un bien existente
export const updateBienController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedBien = await updateBien(id, req.body);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Bien actualizado con éxito:",
            data: updatedBien,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar el bien.",
        });
    }
};

// Eliminar un bien por ID
export const deleteBienController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deleteBien(id);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Bien eliminado con éxito.",
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar el bien.",
        });
    }
};
