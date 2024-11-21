import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todas las bajas de bienes
export async function getAllBajasBien() {
    const bajasBien = await prisma.bajaBien.findMany({
        include: {
            Bien: true, // Incluir datos de la tabla relacionada Bien
            Usuario: true, // Incluir datos de la tabla relacionada Usuario
        },
    });
    await prisma.$disconnect();
    return bajasBien;
}

// Obtener una baja de bien por ID
export async function getBajaBienById(id) {
    const bajaBien = await prisma.bajaBien.findUnique({
        where: {
            id_baja_bien: id,
        },
        include: {
            Bien: true,
            Usuario: true,
        },
    });
    await prisma.$disconnect();
    return bajaBien;
}

// Crear una nueva baja de bien
export async function createBajaBien(data) {
    const newBajaBien = await prisma.bajaBien.create({
        data: {
            fecha_baja: data.fecha_baja,
            documento_ampare: data.documento_ampare,
            poliza_no: data.poliza_no,
            fecha_poliza: data.fecha_poliza,
            id_bien: data.id_bien,
            id_usuario: data.id_usuario,
        },
    });
    await prisma.$disconnect();
    return newBajaBien;
}

// Actualizar una baja de bien existente
export async function updateBajaBien(id, data) {
    const updatedBajaBien = await prisma.bajaBien.update({
        where: { id_baja_bien: id },
        data: {
            fecha_baja: data.fecha_baja,
            documento_ampare: data.documento_ampare,
            poliza_no: data.poliza_no,
            fecha_poliza: data.fecha_poliza,
            id_bien: data.id_bien,
            id_usuario: data.id_usuario,
        },
    });
    await prisma.$disconnect();
    return updatedBajaBien;
}

// Eliminar una baja de bien por ID
export async function deleteBajaBien(id) {
    const deletedBajaBien = await prisma.bajaBien.delete({
        where: { id_baja_bien: id },
    });
    await prisma.$disconnect();
    return deletedBajaBien;
}
