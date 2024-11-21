import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todas las subcuentas
export async function getAllSubcuentas() {
    const subcuentas = await prisma.subcuentaArmonizada.findMany();
    await prisma.$disconnect();
    return subcuentas;
}

// Obtener una subcuenta por ID
export async function getSubcuentaById(id) {
    const subcuenta = await prisma.subcuentaArmonizada.findUnique({
        where: {
            id_subcuenta: id,
        },
    });
    await prisma.$disconnect();
    return subcuenta;
}

// Crear una nueva subcuenta
export async function createSubcuenta(data) {
    const newSubcuenta = await prisma.subcuentaArmonizada.create({
        data: {
            nombre_subcuenta: data.nombre_subcuenta,
            status_subcuenta: data.status_subcuenta,
            borrador_subcuenta: data.borrador_subcuenta,
        },
    });
    await prisma.$disconnect();
    return newSubcuenta;
}

// Actualizar una subcuenta existente
export async function updateSubcuenta(id, data) {
    const updatedSubcuenta = await prisma.subcuentaArmonizada.update({
        where: { id_subcuenta: id },
        data: {
            nombre_subcuenta: data.nombre_subcuenta,
            status_subcuenta: data.status_subcuenta,
            borrador_subcuenta: data.borrador_subcuenta,
        },
    });
    await prisma.$disconnect();
    return updatedSubcuenta;
}

// Eliminar una subcuenta por ID
export async function deleteSubcuentaById(id) {
    const deletedSubcuenta = await prisma.subcuentaArmonizada.delete({
        where: { id_subcuenta: id },
    });
    await prisma.$disconnect();
    return deletedSubcuenta;
}
