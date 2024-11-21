import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todos los estados de bienes
export async function getAllStatusBien() {
    const statusBienes = await prisma.statusBien.findMany();
    await prisma.$disconnect();
    return statusBienes;
}

// Obtener un estado de bien por ID
export async function getStatusBienById(id) {
    const statusBien = await prisma.statusBien.findUnique({
        where: {
            id_status_bien: id,
        },
    });
    await prisma.$disconnect();
    return statusBien;
}

// Crear un nuevo estado de bien
export async function createStatusBien(data) {
    const newStatusBien = await prisma.statusBien.create({
        data: {
            descripcion_status: data.descripcion_status,
        },
    });
    await prisma.$disconnect();
    return newStatusBien;
}

// Actualizar un estado de bien existente
export async function updateStatusBien(id, data) {
    const updatedStatusBien = await prisma.statusBien.update({
        where: { id_status_bien: id },
        data: {
            descripcion_status: data.descripcion_status,
        },
    });
    await prisma.$disconnect();
    return updatedStatusBien;
}

// Eliminar un estado de bien por ID
export async function deleteStatusBien(id) {
    const deletedStatusBien = await prisma.statusBien.delete({
        where: { id_status_bien: id },
    });
    await prisma.$disconnect();
    return deletedStatusBien;
}
