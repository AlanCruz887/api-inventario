import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Obtener todos los productos
export async function getAllProductos() {
    const productos = await prisma.producto.findMany({
        include: {
            Marca: true, // Incluir datos de la tabla relacionada (opcional)
        },
    });
    await prisma.$disconnect();
    return productos;
}

// Obtener un producto por ID
export async function getProductoById(id) {
    const producto = await prisma.producto.findUnique({
        where: {
            id_producto: id,
        },
        include: {
            Marca: true, // Incluir datos de la tabla relacionada (opcional)
        },
    });
    await prisma.$disconnect();
    return producto;
}

// Crear un nuevo producto
export async function createProducto(data) {
    const newProducto = await prisma.producto.create({
        data: {
            nombre_producto: data.nombre_producto,
            modelo: data.modelo,
            ruta_imagen: data.ruta_imagen,
            caracteristicas: data.caracteristicas,
            id_marca: data.id_marca,
        },
    });
    await prisma.$disconnect();
    return newProducto;
}

// Actualizar un producto existente
export async function updateProducto(id, data) {
    const updatedProducto = await prisma.producto.update({
        where: { id_producto: id },
        data: {
            nombre_producto: data.nombre_producto,
            modelo: data.modelo,
            ruta_imagen: data.ruta_imagen,
            caracteristicas: data.caracteristicas,
            id_marca: data.id_marca,
        },
    });
    await prisma.$disconnect();
    return updatedProducto;
}

// Eliminar un producto por ID
export async function deleteProducto(id) {
    const deletedProducto = await prisma.producto.delete({
        where: { id_producto: id },
    });
    await prisma.$disconnect();
    return deletedProducto;
}
