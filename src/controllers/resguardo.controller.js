import { CODES_HTTP } from "../constants/global.js";
import {
    getAllResguardos,
    getResguardoById,
    createResguardo,
    updateResguardo,
    deleteResguardo,
} from "../DAO/resguardo.DAO.js";

// Obtener todos los resguardos
export const getAllResguardosController = async (req, res) => {
    try {
        const resguardos = await getAllResguardos();
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Resguardos obtenidos con éxito:",
            data: resguardos,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener los resguardos.",
        });
    }
};

// Obtener un resguardo por ID
export const getResguardoController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const resguardo = await getResguardoById(id);

        if (!resguardo) {
            return res.status(CODES_HTTP.NOT_FOUND).json({
                success: false,
                message: "Resguardo no encontrado.",
            });
        }

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Resguardo obtenido con éxito:",
            data: resguardo,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el resguardo.",
        });
    }
};

// Crear un nuevo resguardo
export const createResguardoController = async (req, res) => {
    try {
        const newResguardo = await createResguardo(req.body);
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "Resguardo creado con éxito:",
            data: newResguardo,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear el resguardo.",
        });
    }
};

// Actualizar un resguardo existente
export const updateResguardoController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedResguardo = await updateResguardo(id, req.body);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Resguardo actualizado con éxito:",
            data: updatedResguardo,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar el resguardo.",
        });
    }
};

// Eliminar un resguardo por ID
export const deleteResguardoController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deleteResguardo(id);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Resguardo eliminado con éxito.",
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar el resguardo.",
        });
    }
};
