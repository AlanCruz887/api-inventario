import { CODES_HTTP } from "../constants/global.js";
import {
    getAllBajasBien,
    getBajaBienById,
    createBajaBien,
    updateBajaBien,
    deleteBajaBien,
} from "../DAO/bajaBien.DAO.js";

// Obtener todas las bajas de bienes
export const getAllBajasBienController = async (req, res) => {
    try {
        const bajasBien = await getAllBajasBien();
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Bajas de bienes obtenidas con éxito:",
            data: bajasBien,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener las bajas de bienes.",
        });
    }
};

// Obtener una baja de bien por ID
export const getBajaBienController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const bajaBien = await getBajaBienById(id);

        if (!bajaBien) {
            return res.status(CODES_HTTP.NOT_FOUND).json({
                success: false,
                message: "Baja de bien no encontrada.",
            });
        }

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Baja de bien obtenida con éxito:",
            data: bajaBien,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener la baja de bien.",
        });
    }
};

// Crear una nueva baja de bien
export const createBajaBienController = async (req, res) => {
    try {
        const newBajaBien = await createBajaBien(req.body);
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "Baja de bien creada con éxito:",
            data: newBajaBien,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear la baja de bien.",
        });
    }
};

// Actualizar una baja de bien existente
export const updateBajaBienController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedBajaBien = await updateBajaBien(id, req.body);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Baja de bien actualizada con éxito:",
            data: updatedBajaBien,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar la baja de bien.",
        });
    }
};

// Eliminar una baja de bien por ID
export const deleteBajaBienController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deleteBajaBien(id);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Baja de bien eliminada con éxito.",
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar la baja de bien.",
        });
    }
};
