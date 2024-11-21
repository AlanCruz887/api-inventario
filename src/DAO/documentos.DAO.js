import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todos los documentos
export async function getAllDocumentos() {
    const documentos = await prisma.documentos.findMany({
        include: {
            Bien: true, // Incluir datos de la tabla relacionada Bien
        },
    });
    await prisma.$disconnect();
    return documentos;
}

// Obtener un documento por ID
export async function getDocumentoById(id) {
    const documento = await prisma.documentos.findUnique({
        where: {
            id_documento: id,
        },
        include: {
            Bien: true,
        },
    });
    await prisma.$disconnect();
    return documento;
}

// Crear un nuevo documento
export async function createDocumento(data) {
    const newDocumento = await prisma.documentos.create({
        data: {
            factura_documento: data.factura_documento,
            fecha_documento: data.fecha_documento,
            estatus_legal: data.estatus_legal,
            documento_ampare_propiedad: data.documento_ampare_propiedad,
            comentarios: data.comentarios,
            id_bien: data.id_bien,
        },
    });
    await prisma.$disconnect();
    return newDocumento;
}

// Actualizar un documento existente
export async function updateDocumento(id, data) {
    const updatedDocumento = await prisma.documentos.update({
        where: { id_documento: id },
        data: {
            factura_documento: data.factura_documento,
            fecha_documento: data.fecha_documento,
            estatus_legal: data.estatus_legal,
            documento_ampare_propiedad: data.documento_ampare_propiedad,
            comentarios: data.comentarios,
            id_bien: data.id_bien,
        },
    });
    await prisma.$disconnect();
    return updatedDocumento;
}

// Eliminar un documento por ID
export async function deleteDocumento(id) {
    const deletedDocumento = await prisma.documentos.delete({
        where: { id_documento: id },
    });
    await prisma.$disconnect();
    return deletedDocumento;
}
