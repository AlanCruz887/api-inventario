import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todas las áreas
export async function getAllAreas() {
    const areas = await prisma.area.findMany();
    await prisma.$disconnect();
    return areas;
}

// Obtener un área por ID
export async function getAreaById(id) {
    const area = await prisma.area.findUnique({
        where: {
            id_area: id,
        },
    });
    await prisma.$disconnect();
    return area;
}

// Crear una nueva área
export async function createArea(data) {
    const newArea = await prisma.area.create({
        data: {
            nombre_area: data.nombre_area,
        },
    });
    await prisma.$disconnect();
    return newArea;
}

// Actualizar un área existente
export async function updateArea(id, data) {
    const updatedArea = await prisma.area.update({
        where: { id_area: id },
        data: {
            nombre_area: data.nombre_area,
        },
    });
    await prisma.$disconnect();
    return updatedArea;
}

// Eliminar un área por ID
export async function deleteArea(id) {
    const deletedArea = await prisma.area.delete({
        where: { id_area: id },
    });
    await prisma.$disconnect();
    return deletedArea;
}
