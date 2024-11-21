import { CODES_HTTP } from "../constants/global.js";
import {
    getAllStatusBien,
    getStatusBienById,
    createStatusBien,
    updateStatusBien,
    deleteStatusBien,
} from "../DAO/statusBien.DAO.js";

// Obtener todos los estados de bienes
export const getAllStatusBienController = async (req, res) => {
    try {
        const statusBienes = await getAllStatusBien();
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Estados de bienes obtenidos con éxito:",
            data: statusBienes,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener los estados de bienes.",
        });
    }
};

// Obtener un estado de bien por ID
export const getStatusBienController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const statusBien = await getStatusBienById(id);

        if (!statusBien) {
            return res.status(CODES_HTTP.NOT_FOUND).json({
                success: false,
                message: "Estado de bien no encontrado.",
            });
        }

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Estado de bien obtenido con éxito:",
            data: statusBien,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el estado de bien.",
        });
    }
};

// Crear un nuevo estado de bien
export const createStatusBienController = async (req, res) => {
    try {
        const newStatusBien = await createStatusBien(req.body);
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "Estado de bien creado con éxito:",
            data: newStatusBien,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear el estado de bien.",
        });
    }
};

// Actualizar un estado de bien existente
export const updateStatusBienController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedStatusBien = await updateStatusBien(id, req.body);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Estado de bien actualizado con éxito:",
            data: updatedStatusBien,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar el estado de bien.",
        });
    }
};

// Eliminar un estado de bien por ID
export const deleteStatusBienController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deleteStatusBien(id);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Estado de bien eliminado con éxito.",
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar el estado de bien.",
        });
    }
};
