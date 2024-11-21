import { CODES_HTTP } from "../constants/global.js";
import {
    getAllTiposAlta,
    getTipoAltaById,
    createTipoAlta,
    updateTipoAlta,
    deleteTipoAlta,
} from "../DAO/tipoAlta.DAO.js";

// Obtener todos los tipos de alta
export const getAllTiposAltaController = async (req, res) => {
    try {
        const tiposAlta = await getAllTiposAlta();
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Tipos de alta obtenidos con éxito:",
            data: tiposAlta,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener los tipos de alta.",
        });
    }
};

// Obtener un tipo de alta por ID
export const getTipoAltaController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const tipoAlta = await getTipoAltaById(id);

        if (!tipoAlta) {
            return res.status(CODES_HTTP.NOT_FOUND).json({
                success: false,
                message: "Tipo de alta no encontrado.",
            });
        }

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Tipo de alta obtenido con éxito:",
            data: tipoAlta,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el tipo de alta.",
        });
    }
};

// Crear un nuevo tipo de alta
export const createTipoAltaController = async (req, res) => {
    try {
        const newTipoAlta = await createTipoAlta(req.body);
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "Tipo de alta creado con éxito:",
            data: newTipoAlta,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear el tipo de alta.",
        });
    }
};

// Actualizar un tipo de alta existente
export const updateTipoAltaController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedTipoAlta = await updateTipoAlta(id, req.body);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Tipo de alta actualizado con éxito:",
            data: updatedTipoAlta,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar el tipo de alta.",
        });
    }
};

// Eliminar un tipo de alta por ID
export const deleteTipoAltaController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deleteTipoAlta(id);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Tipo de alta eliminado con éxito.",
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar el tipo de alta.",
        });
    }
};
