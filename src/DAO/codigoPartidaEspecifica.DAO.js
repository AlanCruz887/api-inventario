import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todas las partidas específicas
export async function getAllPartidas() {
    const partidas = await prisma.codigoPartidaEspecifica.findMany({
        include: {
            SubcuentaArmonizada: true, // Incluir datos de la tabla relacionada (si necesario)
        },
    });
    await prisma.$disconnect();
    return partidas;
}

// Obtener una partida específica por ID
export async function getPartidaById(id) {
    const partida = await prisma.codigoPartidaEspecifica.findUnique({
        where: {
            id_partida: id,
        },
        include: {
            SubcuentaArmonizada: true, // Incluir datos de la tabla relacionada (si necesario)
        },
    });
    await prisma.$disconnect();
    return partida;
}

// Crear una nueva partida específica
export async function createPartida(data) {
    const newPartida = await prisma.codigoPartidaEspecifica.create({
        data: {
            codigo_partida: data.codigo_partida,
            nombre_partida: data.nombre_partida,
            borrador_partida: data.borrador_partida,
            status_partida: data.status_partida,
            id_subcuenta: data.id_subcuenta,
        },
    });
    await prisma.$disconnect();
    return newPartida;
}

// Actualizar una partida específica existente
export async function updatePartida(id, data) {
    const updatedPartida = await prisma.codigoPartidaEspecifica.update({
        where: { id_partida: id },
        data: {
            codigo_partida: data.codigo_partida,
            nombre_partida: data.nombre_partida,
            borrador_partida: data.borrador_partida,
            status_partida: data.status_partida,
            id_subcuenta: data.id_subcuenta,
        },
    });
    await prisma.$disconnect();
    return updatedPartida;
}

// Eliminar una partida específica por ID
export async function deletePartida(id) {
    const deletedPartida = await prisma.codigoPartidaEspecifica.delete({
        where: { id_partida: id },
    });
    await prisma.$disconnect();
    return deletedPartida;
}
