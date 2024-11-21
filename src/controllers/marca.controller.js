import { CODES_HTTP } from "../constants/global.js";
import {
    getAllMarcas,
    getMarcaById,
    createMarca,
    updateMarca,
    deleteMarca,
} from "../DAO/marca.DAO.js";

// Obtener todas las marcas
export const getAllMarcasController = async (req, res) => {
    try {
        const marcas = await getAllMarcas();
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Marcas obtenidas con éxito:",
            data: marcas,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener las marcas.",
        });
    }
};

// Obtener una marca por ID
export const getMarcaController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const marca = await getMarcaById(id);

        if (!marca) {
            return res.status(CODES_HTTP.NOT_FOUND).json({
                success: false,
                message: "Marca no encontrada.",
            });
        }

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Marca obtenida con éxito:",
            data: marca,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener la marca.",
        });
    }
};

// Crear una nueva marca
export const createMarcaController = async (req, res) => {
    try {
        const newMarca = await createMarca(req.body);
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "Marca creada con éxito:",
            data: newMarca,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear la marca.",
        });
    }
};

// Actualizar una marca existente
export const updateMarcaController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedMarca = await updateMarca(id, req.body);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Marca actualizada con éxito:",
            data: updatedMarca,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar la marca.",
        });
    }
};

// Eliminar una marca por ID
export const deleteMarcaController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deleteMarca(id);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Marca eliminada con éxito.",
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar la marca.",
        });
    }
};
