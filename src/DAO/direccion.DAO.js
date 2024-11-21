import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todas las direcciones
export async function getAllDirecciones() {
    const direcciones = await prisma.direccion.findMany();
    await prisma.$disconnect();
    return direcciones;
}

// Obtener una dirección por ID
export async function getDireccionById(id) {
    const direccion = await prisma.direccion.findUnique({
        where: {
            id_direccion: id,
        },
    });
    await prisma.$disconnect();
    return direccion;
}

// Crear una nueva dirección
export async function createDireccion(data) {
    const newDireccion = await prisma.direccion.create({
        data: {
            nombre_direccion: data.nombre_direccion,
        },
    });
    await prisma.$disconnect();
    return newDireccion;
}

// Actualizar una dirección existente
export async function updateDireccion(id, data) {
    const updatedDireccion = await prisma.direccion.update({
        where: { id_direccion: id },
        data: {
            nombre_direccion: data.nombre_direccion,
        },
    });
    await prisma.$disconnect();
    return updatedDireccion;
}

// Eliminar una dirección por ID
export async function deleteDireccion(id) {
    const deletedDireccion = await prisma.direccion.delete({
        where: { id_direccion: id },
    });
    await prisma.$disconnect();
    return deletedDireccion;
}
