import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todos los usuarios
export async function getAllUsuarios() {
    const usuarios = await prisma.usuario.findMany({
        include: {
            Empleado: true, // Incluir datos de la tabla relacionada Empleado
            Rol: true,      // Incluir datos de la tabla relacionada Rol
        },
    });
    await prisma.$disconnect();
    return usuarios;
}

// Obtener un usuario por ID
export async function getUsuarioById(id) {
    const usuario = await prisma.usuario.findUnique({
        where: {
            id_usuario: id,
        },
        include: {
            Empleado: true, // Incluir datos de la tabla relacionada Empleado
            Rol: true,      // Incluir datos de la tabla relacionada Rol
        },
    });
    await prisma.$disconnect();
    return usuario;
}

// Crear un nuevo usuario
export async function createUsuario(data) {
    const newUsuario = await prisma.usuario.create({
        data: {
            usuario: data.usuario,
            contrasena: data.contrasena,
            id_empleado: data.id_empleado,
            id_rol: data.id_rol,
        },
    });
    await prisma.$disconnect();
    return newUsuario;
}

// Actualizar un usuario existente
export async function updateUsuario(id, data) {
    const updatedUsuario = await prisma.usuario.update({
        where: { id_usuario: id },
        data: {
            usuario: data.usuario,
            contrasena: data.contrasena,
            id_empleado: data.id_empleado,
            id_rol: data.id_rol,
        },
    });
    await prisma.$disconnect();
    return updatedUsuario;
}

// Eliminar un usuario por ID
export async function deleteUsuario(id) {
    const deletedUsuario = await prisma.usuario.delete({
        where: { id_usuario: id },
    });
    await prisma.$disconnect();
    return deletedUsuario;
}
