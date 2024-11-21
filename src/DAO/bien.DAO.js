import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todos los bienes
export async function getAllBienes() {
    const bienes = await prisma.bien.findMany({
        include: {
            Producto: true,
            TipoPosesion: true,
            SubcuentaArmonizada: true,
            CodigoPartidaEspecifica: true,
            StatusBien: true,
            TipoAlta: true,
            RecursoOrigen: true,
        },
    });
    await prisma.$disconnect();
    return bienes;
}

// Obtener un bien por ID
export async function getBienById(id) {
    const bien = await prisma.bien.findUnique({
        where: {
            id_bien: id,
        },
        include: {
            Producto: true,
            TipoPosesion: true,
            SubcuentaArmonizada: true,
            CodigoPartidaEspecifica: true,
            StatusBien: true,
            TipoAlta: true,
            RecursoOrigen: true,
        },
    });
    await prisma.$disconnect();
    return bien;
}

// Crear un nuevo bien
export async function createBien(data) {
    const newBien = await prisma.bien.create({
        data: {
            costo: data.costo,
            fecha_adquisicion: data.fecha_adquisicion,
            serie: data.serie,
            estado_bien: data.estado_bien,
            no_inventario: data.no_inventario,
            codificacion_objeto_gasto: data.codificacion_objeto_gasto,
            propuesto_baja: data.propuesto_baja,
            reparacion_baja: data.reparacion_baja,
            motivo_no_asignado: data.motivo_no_asignado,
            id_producto: data.id_producto,
            id_tipo_posesion: data.id_tipo_posesion,
            id_subcuenta: data.id_subcuenta,
            id_partida: data.id_partida,
            id_status_bien: data.id_status_bien,
            id_tipo_alta: data.id_tipo_alta,
            id_recurso_origen: data.id_recurso_origen,
        },
    });
    await prisma.$disconnect();
    return newBien;
}

// Actualizar un bien existente
export async function updateBien(id, data) {
    const updatedBien = await prisma.bien.update({
        where: { id_bien: id },
        data: {
            costo: data.costo,
            fecha_adquisicion: data.fecha_adquisicion,
            serie: data.serie,
            estado_bien: data.estado_bien,
            no_inventario: data.no_inventario,
            codificacion_objeto_gasto: data.codificacion_objeto_gasto,
            propuesto_baja: data.propuesto_baja,
            reparacion_baja: data.reparacion_baja,
            motivo_no_asignado: data.motivo_no_asignado,
            id_producto: data.id_producto,
            id_tipo_posesion: data.id_tipo_posesion,
            id_subcuenta: data.id_subcuenta,
            id_partida: data.id_partida,
            id_status_bien: data.id_status_bien,
            id_tipo_alta: data.id_tipo_alta,
            id_recurso_origen: data.id_recurso_origen,
        },
    });
    await prisma.$disconnect();
    return updatedBien;
}

// Eliminar un bien por ID
export async function deleteBien(id) {
    const deletedBien = await prisma.bien.delete({
        where: { id_bien: id },
    });
    await prisma.$disconnect();
    return deletedBien;
}
