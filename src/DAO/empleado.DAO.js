import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todos los empleados
export async function getAllEmpleados() {
    const empleados = await prisma.empleado.findMany({
        include: {
            Area: true, // Incluir información de la tabla relacionada (opcional)
        },
    });
    await prisma.$disconnect();
    return empleados;
}

// Obtener un empleado por ID
export async function getEmpleadoById(id) {
    const empleado = await prisma.empleado.findUnique({
        where: {
            id_empleado: id,
        },
        include: {
            Area: true, // Incluir información de la tabla relacionada (opcional)
        },
    });
    await prisma.$disconnect();
    return empleado;
}

// Crear un nuevo empleado
export async function createEmpleado(data) {
    const newEmpleado = await prisma.empleado.create({
        data: {
            nombre_empleado: data.nombre_empleado,
            correo_electronico: data.correo_electronico,
            rfc: data.rfc,
            numero_contacto: data.numero_contacto,
            status_empleado: data.status_empleado,
            id_area: data.id_area,
        },
    });
    await prisma.$disconnect();
    return newEmpleado;
}

// Actualizar un empleado existente
export async function updateEmpleado(id, data) {
    const updatedEmpleado = await prisma.empleado.update({
        where: { id_empleado: id },
        data: {
            nombre_empleado: data.nombre_empleado,
            correo_electronico: data.correo_electronico,
            rfc: data.rfc,
            numero_contacto: data.numero_contacto,
            status_empleado: data.status_empleado,
            id_area: data.id_area,
        },
    });
    await prisma.$disconnect();
    return updatedEmpleado;
}

// Eliminar un empleado por ID
export async function deleteEmpleado(id) {
    const deletedEmpleado = await prisma.empleado.delete({
        where: { id_empleado: id },
    });
    await prisma.$disconnect();
    return deletedEmpleado;
}
