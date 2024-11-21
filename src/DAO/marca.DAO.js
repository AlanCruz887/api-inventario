import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todas las marcas
export async function getAllMarcas() {
    const marcas = await prisma.marca.findMany();
    await prisma.$disconnect();
    return marcas;
}

// Obtener una marca por ID
export async function getMarcaById(id) {
    const marca = await prisma.marca.findUnique({
        where: {
            id_marca: id,
        },
    });
    await prisma.$disconnect();
    return marca;
}

// Crear una nueva marca
export async function createMarca(data) {
    const newMarca = await prisma.marca.create({
        data: {
            nombre_marca: data.nombre_marca,
            status_marca: data.status_marca,
        },
    });
    await prisma.$disconnect();
    return newMarca;
}

// Actualizar una marca existente
export async function updateMarca(id, data) {
    const updatedMarca = await prisma.marca.update({
        where: { id_marca: id },
        data: {
            nombre_marca: data.nombre_marca,
            status_marca: data.status_marca,
        },
    });
    await prisma.$disconnect();
    return updatedMarca;
}

// Eliminar una marca por ID
export async function deleteMarca(id) {
    const deletedMarca = await prisma.marca.delete({
        where: { id_marca: id },
    });
    await prisma.$disconnect();
    return deletedMarca;
}
