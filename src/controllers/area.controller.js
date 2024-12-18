import { CODES_HTTP } from "../constants/global.js";
import {
    getAllAreas,
    getAreaById,
    createArea,
    updateArea,
    deleteArea,
} from "../DAO/area.DAO.js";

// Obtener todas las áreas
export const getAllAreasController = async (req, res) => {
    try {
        const areas = await getAllAreas();
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Áreas obtenidas con éxito:",
            data: areas,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener las áreas.",
        });
    }
};

// Obtener un área por ID
export const getAreaController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const area = await getAreaById(id);

        if (!area) {
            return res.status(CODES_HTTP.NOT_FOUND).json({
                success: false,
                message: "Área no encontrada.",
            });
        }

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Área obtenida con éxito:",
            data: area,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el área.",
        });
    }
};

// Crear una nueva área
export const createAreaController = async (req, res) => {
    try {
        const newArea = await createArea(req.body);
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "Área creada con éxito:",
            data: newArea,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear el área.",
        });
    }
};

// Actualizar un área existente
export const updateAreaController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedArea = await updateArea(id, req.body);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Área actualizada con éxito:",
            data: updatedArea,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar el área.",
        });
    }
};

// Eliminar un área por ID
export const deleteAreaController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deleteArea(id);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Área eliminada con éxito.",
        });
    } catch (error) {
        console.log(error)
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar el área.",
        });
    }
};
