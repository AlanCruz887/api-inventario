import { CODES_HTTP } from "../constants/global.js";
import {
    getAllUsuarios,
    getUsuarioById,
    createUsuario,
    updateUsuario,
    deleteUsuario,
} from "../DAO/usuario.DAO.js";

// Obtener todos los usuarios
export const getAllUsuariosController = async (req, res) => {
    try {
        const usuarios = await getAllUsuarios();
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Usuarios obtenidos con éxito:",
            data: usuarios,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener los usuarios.",
        });
    }
};

// Obtener un usuario por ID
export const getUsuarioController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const usuario = await getUsuarioById(id);

        if (!usuario) {
            return res.status(CODES_HTTP.NOT_FOUND).json({
                success: false,
                message: "Usuario no encontrado.",
            });
        }

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Usuario obtenido con éxito:",
            data: usuario,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el usuario.",
        });
    }
};

// Crear un nuevo usuario
export const createUsuarioController = async (req, res) => {
    try {
        const newUsuario = await createUsuario(req.body);
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "Usuario creado con éxito:",
            data: newUsuario,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear el usuario.",
        });
    }
};

// Actualizar un usuario existente
export const updateUsuarioController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedUsuario = await updateUsuario(id, req.body);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Usuario actualizado con éxito:",
            data: updatedUsuario,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar el usuario.",
        });
    }
};

// Eliminar un usuario por ID
export const deleteUsuarioController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deleteUsuario(id);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Usuario eliminado con éxito.",
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar el usuario.",
        });
    }
};
