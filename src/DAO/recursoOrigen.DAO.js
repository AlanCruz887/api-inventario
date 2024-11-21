import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todos los recursos de origen
export async function getAllRecursosOrigen() {
    const recursos = await prisma.recursoOrigen.findMany();
    await prisma.$disconnect();
    return recursos;
}

// Obtener un recurso de origen por ID
export async function getRecursoOrigenById(id) {
    const recurso = await prisma.recursoOrigen.findUnique({
        where: {
            id_recurso_origen: id,
        },
    });
    await prisma.$disconnect();
    return recurso;
}

// Crear un nuevo recurso de origen
export async function createRecursoOrigen(data) {
    const newRecurso = await prisma.recursoOrigen.create({
        data: {
            descripcion_recurso: data.descripcion_recurso,
        },
    });
    await prisma.$disconnect();
    return newRecurso;
}

// Actualizar un recurso de origen existente
export async function updateRecursoOrigen(id, data) {
    const updatedRecurso = await prisma.recursoOrigen.update({
        where: { id_recurso_origen: id },
        data: {
            descripcion_recurso: data.descripcion_recurso,
        },
    });
    await prisma.$disconnect();
    return updatedRecurso;
}

// Eliminar un recurso de origen por ID
export async function deleteRecursoOrigen(id) {
    const deletedRecurso = await prisma.recursoOrigen.delete({
        where: { id_recurso_origen: id },
    });
    await prisma.$disconnect();
    return deletedRecurso;
}
