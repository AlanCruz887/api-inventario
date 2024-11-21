import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todos los resguardos
export async function getAllResguardos() {
    const resguardos = await prisma.resguardo.findMany({
        include: {
            Bien: true,
            Empleado: true,
            Direccion: true,
            Usuario: true,
        },
    });
    await prisma.$disconnect();
    return resguardos;
}

// Obtener un resguardo por ID
export async function getResguardoById(id) {
    const resguardo = await prisma.resguardo.findUnique({
        where: {
            id_resguardo: id,
        },
        include: {
            Bien: true,
            Empleado: true,
            Direccion: true,
            Usuario: true,
        },
    });
    await prisma.$disconnect();
    return resguardo;
}

// Crear un nuevo resguardo
export async function createResguardo(data) {
    const newResguardo = await prisma.resguardo.create({
        data: {
            fecha_resguardo: data.fecha_resguardo,
            ubicacion: data.ubicacion,
            id_bien: data.id_bien,
            id_empleado: data.id_empleado,
            id_direccion: data.id_direccion,
            id_usuario: data.id_usuario,
        },
    });
    await prisma.$disconnect();
    return newResguardo;
}

// Actualizar un resguardo existente
export async function updateResguardo(id, data) {
    const updatedResguardo = await prisma.resguardo.update({
        where: { id_resguardo: id },
        data: {
            fecha_resguardo: data.fecha_resguardo,
            ubicacion: data.ubicacion,
            id_bien: data.id_bien,
            id_empleado: data.id_empleado,
            id_direccion: data.id_direccion,
            id_usuario: data.id_usuario,
        },
    });
    await prisma.$disconnect();
    return updatedResguardo;
}

// Eliminar un resguardo por ID
export async function deleteResguardo(id) {
    const deletedResguardo = await prisma.resguardo.delete({
        where: { id_resguardo: id },
    });
    await prisma.$disconnect();
    return deletedResguardo;
}
