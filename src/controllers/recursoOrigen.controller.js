import { CODES_HTTP } from "../constants/global.js";
import {
    getAllRecursosOrigen,
    getRecursoOrigenById,
    createRecursoOrigen,
    updateRecursoOrigen,
    deleteRecursoOrigen,
} from "../DAO/recursoOrigen.DAO.js";

// Obtener todos los recursos de origen
export const getAllRecursosOrigenController = async (req, res) => {
    try {
        const recursos = await getAllRecursosOrigen();
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Recursos de origen obtenidos con éxito:",
            data: recursos,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener los recursos de origen.",
        });
    }
};

// Obtener un recurso de origen por ID
export const getRecursoOrigenController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const recurso = await getRecursoOrigenById(id);

        if (!recurso) {
            return res.status(CODES_HTTP.NOT_FOUND).json({
                success: false,
                message: "Recurso de origen no encontrado.",
            });
        }

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Recurso de origen obtenido con éxito:",
            data: recurso,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el recurso de origen.",
        });
    }
};

// Crear un nuevo recurso de origen
export const createRecursoOrigenController = async (req, res) => {
    try {
        const newRecurso = await createRecursoOrigen(req.body);
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "Recurso de origen creado con éxito:",
            data: newRecurso,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear el recurso de origen.",
        });
    }
};

// Actualizar un recurso de origen existente
export const updateRecursoOrigenController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedRecurso = await updateRecursoOrigen(id, req.body);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Recurso de origen actualizado con éxito:",
            data: updatedRecurso,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar el recurso de origen.",
        });
    }
};

// Eliminar un recurso de origen por ID
export const deleteRecursoOrigenController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deleteRecursoOrigen(id);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Recurso de origen eliminado con éxito.",
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar el recurso de origen.",
        });
    }
};
