import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todos los roles
export async function getAllRoles() {
    const roles = await prisma.rol.findMany();
    await prisma.$disconnect();
    return roles;
}

// Obtener un rol por ID
export async function getRolById(id) {
    const rol = await prisma.rol.findUnique({
        where: {
            id_rol: id,
        },
    });
    await prisma.$disconnect();
    return rol;
}

// Crear un nuevo rol
export async function createRol(data) {
    const newRol = await prisma.rol.create({
        data: {
            nombre_rol: data.nombre_rol,
            descripcion_rol: data.descripcion_rol,
        },
    });
    await prisma.$disconnect();
    return newRol;
}

// Actualizar un rol existente
export async function updateRol(id, data) {
    const updatedRol = await prisma.rol.update({
        where: { id_rol: id },
        data: {
            nombre_rol: data.nombre_rol,
            descripcion_rol: data.descripcion_rol,
        },
    });
    await prisma.$disconnect();
    return updatedRol;
}

// Eliminar un rol por ID
export async function deleteRol(id) {
    const deletedRol = await prisma.rol.delete({
        where: { id_rol: id },
    });
    await prisma.$disconnect();
    return deletedRol;
}
