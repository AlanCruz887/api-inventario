import { CODES_HTTP } from "../constants/global.js";
import {
    getAllRoles,
    getRolById,
    createRol,
    updateRol,
    deleteRol,
} from "../DAO/rol.DAO.js";

// Obtener todos los roles
export const getAllRolesController = async (req, res) => {
    try {
        const roles = await getAllRoles();
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Roles obtenidos con éxito:",
            data: roles,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener los roles.",
        });
    }
};

// Obtener un rol por ID
export const getRolController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const rol = await getRolById(id);

        if (!rol) {
            return res.status(CODES_HTTP.NOT_FOUND).json({
                success: false,
                message: "Rol no encontrado.",
            });
        }

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Rol obtenido con éxito:",
            data: rol,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el rol.",
        });
    }
};

// Crear un nuevo rol
export const createRolController = async (req, res) => {
    try {
        const newRol = await createRol(req.body);
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "Rol creado con éxito:",
            data: newRol,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear el rol.",
        });
    }
};

// Actualizar un rol existente
export const updateRolController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedRol = await updateRol(id, req.body);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Rol actualizado con éxito:",
            data: updatedRol,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar el rol.",
        });
    }
};

// Eliminar un rol por ID
export const deleteRolController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deleteRol(id);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Rol eliminado con éxito.",
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar el rol.",
        });
    }
};
