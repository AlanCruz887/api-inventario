import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todas las posesiones
export async function getAllPosesiones() {
    const posesiones = await prisma.tipoPosesion.findMany();
    await prisma.$disconnect();
    return posesiones;
}

// Obtener una posesión por ID
export async function getPosesionById(id) {
    const posesion = await prisma.tipoPosesion.findUnique({
        where: {
            id_tipo_posesion: id,
        },
    });
    await prisma.$disconnect();
    return posesion;
}

// Crear una nueva posesión
export async function createPosesion(data) {
    const newPosesion = await prisma.tipoPosesion.create({
        data: {
            descripcion_posesion: data.descripcion_posesion,
            clave_posesion: data.clave_posesion,
            status_posesion: data.status_posesion,
        },
    });
    await prisma.$disconnect();
    return newPosesion;
}

// Actualizar una posesión existente
export async function updatePosesion(id, data) {
    const updatedPosesion = await prisma.tipoPosesion.update({
        where: { id_tipo_posesion: id },
        data: {
            descripcion_posesion: data.descripcion_posesion,
            clave_posesion: data.clave_posesion,
            status_posesion: data.status_posesion,
        },
    });
    await prisma.$disconnect();
    return updatedPosesion;
}

// Eliminar una posesión por ID
export async function deletePosesion(id) {
    const deletedPosesion = await prisma.tipoPosesion.delete({
        where: { id_tipo_posesion: id },
    });
    await prisma.$disconnect();
    return deletedPosesion;
}
