import { CODES_HTTP } from "../constants/global.js";
import {
    getAllSubcuentas,
    getSubcuentaById,
    createSubcuenta,
    updateSubcuenta,
    deleteSubcuentaById,
} from "../DAO/subcuentaArmonizada.DAO.js";

// Obtener todas las subcuentas
export const getAllSubcuentasController = async (req, res) => {
    try {
        const subcuentas = await getAllSubcuentas();
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Subcuentas obtenidas con éxito:",
            data: subcuentas,
        });
    } catch (error) {
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Hubo un error al obtener las subcuentas.",
        });
    }
};

// Obtener una subcuenta por ID
export const getSubcuentaController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const subcuenta = await getSubcuentaById(id);

        if (!subcuenta) {
            return res.status(CODES_HTTP.NOT_FOUND).json({
                success: false,
                message: "Subcuenta no encontrada.",
            });
        }

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Subcuenta obtenida con éxito:",
            data: subcuenta,
        });
    } catch (error) {
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Hubo un error al obtener la subcuenta.",
        });
    }
};

// Crear una nueva subcuenta
export const createSubcuentaController = async (req, res) => {
    try {
        const newSubcuenta = await createSubcuenta(req.body);
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "Subcuenta creada con éxito:",
            data: newSubcuenta,
        });
    } catch (error) {
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Hubo un error al crear la subcuenta.",
        });
    }
};

// Actualizar una subcuenta existente
export const updateSubcuentaController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedSubcuenta = await updateSubcuenta(id, req.body);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Subcuenta actualizada con éxito:",
            data: updatedSubcuenta,
        });
    } catch (error) {
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Hubo un error al actualizar la subcuenta.",
        });
    }
};

// Eliminar una subcuenta por ID
export const deleteSubcuentaController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deleteSubcuentaById(id);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Subcuenta eliminada con éxito.",
        });
    } catch (error) {
        return res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Hubo un error al eliminar la subcuenta.",
        });
    }
};
