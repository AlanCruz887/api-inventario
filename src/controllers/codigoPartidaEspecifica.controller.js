import { CODES_HTTP } from "../constants/global.js";
import {
    getAllPartidas,
    getPartidaById,
    createPartida,
    updatePartida,
    deletePartida,
} from "../DAO/codigoPartidaEspecifica.DAO.js";

// Obtener todas las partidas específicas
export const getAllPartidasController = async (req, res) => {
    try {
        const partidas = await getAllPartidas();
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Partidas obtenidas con éxito:",
            data: partidas,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener las partidas.",
        });
    }
};

// Obtener una partida específica por ID
export const getPartidaController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const partida = await getPartidaById(id);

        if (!partida) {
            return res.status(CODES_HTTP.NOT_FOUND).json({
                success: false,
                message: "Partida no encontrada.",
            });
        }

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Partida obtenida con éxito:",
            data: partida,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener la partida.",
        });
    }
};

// Crear una nueva partida específica
export const createPartidaController = async (req, res) => {
    try {
        const newPartida = await createPartida(req.body);
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "Partida creada con éxito:",
            data: newPartida,
        });
    } catch (error) {
        console.log(error)
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear la partida.",
        });
    }
};

// Actualizar una partida específica existente
export const updatePartidaController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedPartida = await updatePartida(id, req.body);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Partida actualizada con éxito:",
            data: updatedPartida,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar la partida.",
        });
    }
};

// Eliminar una partida específica por ID
export const deletePartidaController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deletePartida(id);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Partida eliminada con éxito.",
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar la partida.",
        });
    }
};
