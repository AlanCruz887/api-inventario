import { CODES_HTTP } from "../constants/global.js";
import {
    getAllDocumentos,
    getDocumentoById,
    createDocumento,
    updateDocumento,
    deleteDocumento,
} from "../DAO/documentos.DAO.js";

// Obtener todos los documentos
export const getAllDocumentosController = async (req, res) => {
    try {
        const documentos = await getAllDocumentos();
        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Documentos obtenidos con éxito:",
            data: documentos,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener los documentos.",
        });
    }
};

// Obtener un documento por ID
export const getDocumentoController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const documento = await getDocumentoById(id);

        if (!documento) {
            return res.status(CODES_HTTP.NOT_FOUND).json({
                success: false,
                message: "Documento no encontrado.",
            });
        }

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Documento obtenido con éxito:",
            data: documento,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al obtener el documento.",
        });
    }
};

// Crear un nuevo documento
export const createDocumentoController = async (req, res) => {
    try {
        const newDocumento = await createDocumento(req.body);
        res.status(CODES_HTTP.CREATED).json({
            success: true,
            message: "Documento creado con éxito:",
            data: newDocumento,
        });
    } catch (error) {
        console.log(error)
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al crear el documento.",
        });
    }
};

// Actualizar un documento existente
export const updateDocumentoController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updatedDocumento = await updateDocumento(id, req.body);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Documento actualizado con éxito:",
            data: updatedDocumento,
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al actualizar el documento.",
        });
    }
};

// Eliminar un documento por ID
export const deleteDocumentoController = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await deleteDocumento(id);

        res.status(CODES_HTTP.OK).json({
            success: true,
            message: "Documento eliminado con éxito.",
        });
    } catch (error) {
        res.status(CODES_HTTP.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Error al eliminar el documento.",
        });
    }
};
