import { CODES_HTTP } from "../constants/global.js";
import {
    getAllHistorialesResguardo,
    getHistorialResguardoById,
    createHistorialResguardo,
    updateHistorialResguardo,
    deleteHistorialResguardo,
} from "../DAO/historialResguardo.DAO.js";

// Obtener todos los historiales de resguardo
export const getAllHistorialesResguardoController = async (req, res) => {
    try {
        const historialesResguardo = await getAllHistorialesResguardo();
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Historiales de resguardo obtenidos con éxito:",
            data: historialesResguardo,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener los historiales de resguardo.",
        });
    }
};

// Obtener un historial de resguardo por ID
export const getHistorialResguardoController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const historialResguardo = await getHistorialResguardoById(id);

        if (!historialResguardo) {
            return res.status(CODES_HTTP.NOT_FOUND).json({
                success: false,
                message: "Historial de resguardo no encontrado.",
            });
        }

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Historial de resguardo obtenido con éxito:",
            data: historialResguardo,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el historial de resguardo.",
        });
    }
};

// Crear un nuevo historial de resguardo
export const createHistorialResguardoController = async (req, res) => {
    try {
        const newHistorialResguardo = await createHistorialResguardo(req.body);
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "Historial de resguardo creado con éxito:",
            data: newHistorialResguardo,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear el historial de resguardo.",
        });
    }
};

// Actualizar un historial de resguardo existente
export const updateHistorialResguardoController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedHistorialResguardo = await updateHistorialResguardo(id, req.body);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Historial de resguardo actualizado con éxito:",
            data: updatedHistorialResguardo,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar el historial de resguardo.",
        });
    }
};

// Eliminar un historial de resguardo por ID
export const deleteHistorialResguardoController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deleteHistorialResguardo(id);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Historial de resguardo eliminado con éxito.",
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar el historial de resguardo.",
        });
    }
};
