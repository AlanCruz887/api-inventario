import { CODES_HTTP } from "../constants/global.js";
import {
    getAllEmpleados,
    getEmpleadoById,
    createEmpleado,
    updateEmpleado,
    deleteEmpleado,
} from "../DAO/empleado.DAO.js";

// Obtener todos los empleados
export const getAllEmpleadosController = async (req, res) => {
    try {
        const empleados = await getAllEmpleados();
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Empleados obtenidos con éxito:",
            data: empleados,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener los empleados.",
        });
    }
};

// Obtener un empleado por ID
export const getEmpleadoController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const empleado = await getEmpleadoById(id);

        if (!empleado) {
            return res.status(CODES_HTTP.NOT_FOUND).json({
                success: false,
                message: "Empleado no encontrado.",
            });
        }

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Empleado obtenido con éxito:",
            data: empleado,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el empleado.",
        });
    }
};

// Crear un nuevo empleado
export const createEmpleadoController = async (req, res) => {
    try {
        const newEmpleado = await createEmpleado(req.body);
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "Empleado creado con éxito:",
            data: newEmpleado,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear el empleado.",
        });
    }
};

// Actualizar un empleado existente
export const updateEmpleadoController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedEmpleado = await updateEmpleado(id, req.body);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Empleado actualizado con éxito:",
            data: updatedEmpleado,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar el empleado.",
        });
    }
};

// Eliminar un empleado por ID
export const deleteEmpleadoController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deleteEmpleado(id);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Empleado eliminado con éxito.",
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar el empleado.",
        });
    }
};
