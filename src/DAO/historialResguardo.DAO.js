import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todos los historiales de resguardo
export async function getAllHistorialesResguardo() {
    const historialesResguardo = await prisma.historialResguardo.findMany({
        include: {
            Bien: true, // Incluir datos de la tabla relacionada Bien
            Empleado: true, // Incluir datos de la tabla relacionada Empleado
            Usuario: true, // Incluir datos de la tabla relacionada Usuario
        },
    });
    await prisma.$disconnect();
    return historialesResguardo;
}

// Obtener un historial de resguardo por ID
export async function getHistorialResguardoById(id) {
    const historialResguardo = await prisma.historialResguardo.findUnique({
        where: {
            id_historial_resguardo: id,
        },
        include: {
            Bien: true,
            Empleado: true,
            Usuario: true,
        },
    });
    await prisma.$disconnect();
    return historialResguardo;
}

// Crear un nuevo historial de resguardo
export async function createHistorialResguardo(data) {
    const newHistorialResguardo = await prisma.historialResguardo.create({
        data: {
            fecha_resguardo: data.fecha_resguardo,
            id_bien: data.id_bien,
            id_empleado: data.id_empleado,
            id_usuario: data.id_usuario,
        },
    });
    await prisma.$disconnect();
    return newHistorialResguardo;
}

// Actualizar un historial de resguardo existente
export async function updateHistorialResguardo(id, data) {
    const updatedHistorialResguardo = await prisma.historialResguardo.update({
        where: { id_historial_resguardo: id },
        data: {
            fecha_resguardo: data.fecha_resguardo,
            id_bien: data.id_bien,
            id_empleado: data.id_empleado,
            id_usuario: data.id_usuario,
        },
    });
    await prisma.$disconnect();
    return updatedHistorialResguardo;
}

// Eliminar un historial de resguardo por ID
export async function deleteHistorialResguardo(id) {
    const deletedHistorialResguardo = await prisma.historialResguardo.delete({
        where: { id_historial_resguardo: id },
    });
    await prisma.$disconnect();
    return deletedHistorialResguardo;
}
