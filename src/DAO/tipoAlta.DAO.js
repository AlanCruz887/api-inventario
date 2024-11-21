import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todos los tipos de alta
export async function getAllTiposAlta() {
    const tiposAlta = await prisma.tipoAlta.findMany();
    await prisma.$disconnect();
    return tiposAlta;
}

// Obtener un tipo de alta por ID
export async function getTipoAltaById(id) {
    const tipoAlta = await prisma.tipoAlta.findUnique({
        where: {
            id_tipo_alta: id,
        },
    });
    await prisma.$disconnect();
    return tipoAlta;
}

// Crear un nuevo tipo de alta
export async function createTipoAlta(data) {
    const newTipoAlta = await prisma.tipoAlta.create({
        data: {
            descripcion_alta: data.descripcion_alta,
        },
    });
    await prisma.$disconnect();
    return newTipoAlta;
}

// Actualizar un tipo de alta existente
export async function updateTipoAlta(id, data) {
    const updatedTipoAlta = await prisma.tipoAlta.update({
        where: { id_tipo_alta: id },
        data: {
            descripcion_alta: data.descripcion_alta,
        },
    });
    await prisma.$disconnect();
    return updatedTipoAlta;
}

// Eliminar un tipo de alta por ID
export async function deleteTipoAlta(id) {
    const deletedTipoAlta = await prisma.tipoAlta.delete({
        where: { id_tipo_alta: id },
    });
    await prisma.$disconnect();
    return deletedTipoAlta;
}
