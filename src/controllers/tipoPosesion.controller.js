import { CODES_HTTP } from "../constants/global.js";
import {
    getAllPosesiones,
    getPosesionById,
    createPosesion,
    updatePosesion,
    deletePosesion,
} from "../DAO/tipoPosesion.DAO.js";

// Obtener todas las posesiones
export const getAllPosesionesController = async (req, res) => {
    try {
        const posesiones = await getAllPosesiones();
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Posesiones obtenidas con éxito:",
            data: posesiones,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener las posesiones.",
        });
    }
};

// Obtener una posesión por ID
export const getPosesionController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const posesion = await getPosesionById(id);

        if (!posesion) {
            return res.status(CODES_HTTP.NOT_FOUND).json({
                success: false,
                message: "Posesión no encontrada.",
            });
        }

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Posesión obtenida con éxito:",
            data: posesion,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener la posesión.",
        });
    }
};

// Crear una nueva posesión
export const createPosesionController = async (req, res) => {
    try {
        const newPosesion = await createPosesion(req.body);
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "Posesión creada con éxito:",
            data: newPosesion,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear la posesión.",
        });
    }
};

// Actualizar una posesión existente
export const updatePosesionController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedPosesion = await updatePosesion(id, req.body);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Posesión actualizada con éxito:",
            data: updatedPosesion,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar la posesión.",
        });
    }
};

// Eliminar una posesión por ID
export const deletePosesionController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deletePosesion(id);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Posesión eliminada con éxito.",
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar la posesión.",
        });
    }
};
