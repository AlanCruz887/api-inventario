-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS InventarioBienes;
USE InventarioBienes;

-- Desactivar temporalmente las claves foráneas
SET FOREIGN_KEY_CHECKS = 0;

-- Tabla SubcuentaArmonizada
CREATE TABLE IF NOT EXISTS SubcuentaArmonizada (
    id_subcuenta INT AUTO_INCREMENT PRIMARY KEY,
    nombre_subcuenta VARCHAR(255) NOT NULL,
    status_subcuenta ENUM('Activo', 'Inactivo'),
    borrador_subcuenta BOOLEAN
);

-- Tabla TipoPosesion
CREATE TABLE IF NOT EXISTS TipoPosesion (
    id_tipo_posesion INT AUTO_INCREMENT PRIMARY KEY,
    descripcion_posesion VARCHAR(255) NOT NULL,
    clave_posesion VARCHAR(50),
    status_posesion ENUM('Activo', 'Inactivo')
);

-- Tabla CodigoPartidaEspecifica
CREATE TABLE IF NOT EXISTS CodigoPartidaEspecifica (
    id_partida INT AUTO_INCREMENT PRIMARY KEY,
    codigo_partida VARCHAR(50) NOT NULL,
    nombre_partida VARCHAR(255) NOT NULL,
    borrador_partida BOOLEAN,
    status_partida ENUM('Activo', 'Inactivo'),
    id_subcuenta INT,
    FOREIGN KEY (id_subcuenta) REFERENCES SubcuentaArmonizada(id_subcuenta)
);

-- Tabla Producto
CREATE TABLE IF NOT EXISTS Producto (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre_producto VARCHAR(255) NOT NULL,
    modelo VARCHAR(100),
    ruta_imagen TEXT,
    caracteristicas TEXT,
    id_marca INT,
    FOREIGN KEY (id_marca) REFERENCES Marca(id_marca)
);

-- Tabla Marca
CREATE TABLE IF NOT EXISTS Marca (
    id_marca INT AUTO_INCREMENT PRIMARY KEY,
    nombre_marca VARCHAR(255) NOT NULL,
    status_marca ENUM('Activo', 'Inactivo')
);

-- Tabla RecursoOrigen
CREATE TABLE IF NOT EXISTS RecursoOrigen (
    id_recurso_origen INT AUTO_INCREMENT PRIMARY KEY,
    descripcion_recurso ENUM('Estatal', 'FASP')
);

-- Tabla Bien
CREATE TABLE IF NOT EXISTS Bien (
    id_bien INT AUTO_INCREMENT PRIMARY KEY,
    costo DECIMAL(10, 2) NOT NULL,
    fecha_adquisicion DATE,
    serie VARCHAR(255),
    estado_bien ENUM('Asignado', 'Extraviado', 'Reasignado', 'Dado de baja'),
    no_inventario VARCHAR(50),
    codificacion_objeto_gasto VARCHAR(50),
    propuesto_baja ENUM('Sí', 'No'),
    reparacion_baja ENUM('Reparacion', 'Baja'),
    motivo_no_asignado TEXT,
    id_producto INT,
    id_tipo_posesion INT,
    id_subcuenta INT,
    id_partida INT,
    id_status_bien INT,
    id_tipo_alta INT,
    id_recurso_origen INT,
    FOREIGN KEY (id_producto) REFERENCES Producto(id_producto),
    FOREIGN KEY (id_tipo_posesion) REFERENCES TipoPosesion(id_tipo_posesion),
    FOREIGN KEY (id_subcuenta) REFERENCES SubcuentaArmonizada(id_subcuenta),
    FOREIGN KEY (id_partida) REFERENCES CodigoPartidaEspecifica(id_partida),
    FOREIGN KEY (id_status_bien) REFERENCES StatusBien(id_status_bien),
    FOREIGN KEY (id_tipo_alta) REFERENCES TipoAlta(id_tipo_alta),
    FOREIGN KEY (id_recurso_origen) REFERENCES RecursoOrigen(id_recurso_origen)
);

-- Tabla StatusBien
CREATE TABLE IF NOT EXISTS StatusBien (
    id_status_bien INT AUTO_INCREMENT PRIMARY KEY,
    descripcion_status ENUM('Asignado', 'Extraviado', 'Dado de baja', 'Reasignado')
);

-- Tabla TipoAlta
CREATE TABLE IF NOT EXISTS TipoAlta (
    id_tipo_alta INT AUTO_INCREMENT PRIMARY KEY,
    descripcion_alta ENUM('Compra', 'Asignacion', 'Donacion', 'Comodato')
);

-- Tabla Resguardo
CREATE TABLE IF NOT EXISTS Resguardo (
    id_resguardo INT AUTO_INCREMENT PRIMARY KEY,
    fecha_resguardo DATE NOT NULL,
    ubicacion TEXT,
    id_bien INT,
    id_empleado INT,
    id_direccion INT,
    id_usuario INT,
    FOREIGN KEY (id_bien) REFERENCES Bien(id_bien),
    FOREIGN KEY (id_empleado) REFERENCES Empleado(id_empleado),
    FOREIGN KEY (id_direccion) REFERENCES Direccion(id_direccion),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);

-- Tabla Empleado
CREATE TABLE IF NOT EXISTS Empleado (
    id_empleado INT AUTO_INCREMENT PRIMARY KEY,
    nombre_empleado VARCHAR(255) NOT NULL,
    correo_electronico VARCHAR(255),
    rfc VARCHAR(50),
    numero_contacto VARCHAR(50),
    status_empleado ENUM('Activo', 'Inactivo'),
    id_area INT,
    FOREIGN KEY (id_area) REFERENCES Area(id_area)
);

-- Tabla Area
CREATE TABLE IF NOT EXISTS Area (
    id_area INT AUTO_INCREMENT PRIMARY KEY,
    nombre_area VARCHAR(255) NOT NULL
);

-- Tabla Usuario
CREATE TABLE IF NOT EXISTS Usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    id_empleado INT,
    id_rol INT,
    FOREIGN KEY (id_empleado) REFERENCES Empleado(id_empleado),
    FOREIGN KEY (id_rol) REFERENCES Rol(id_rol)
);

-- Tabla Rol
CREATE TABLE IF NOT EXISTS Rol (
    id_rol INT AUTO_INCREMENT PRIMARY KEY,
    nombre_rol VARCHAR(50) NOT NULL,
    descripcion_rol TEXT
);

-- Tabla Direccion
CREATE TABLE IF NOT EXISTS Direccion (
    id_direccion INT AUTO_INCREMENT PRIMARY KEY,
    nombre_direccion VARCHAR(255) NOT NULL
);

-- Tabla BajaBien
CREATE TABLE IF NOT EXISTS BajaBien (
    id_baja_bien INT AUTO_INCREMENT PRIMARY KEY,
    fecha_baja DATE NOT NULL,
    documento_ampare TEXT,
    poliza_no VARCHAR(50),
    fecha_poliza DATE,
    id_bien INT,
    id_usuario INT,
    FOREIGN KEY (id_bien) REFERENCES Bien(id_bien),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);

-- Tabla Documentos
CREATE TABLE IF NOT EXISTS Documentos (
    id_documento INT AUTO_INCREMENT PRIMARY KEY,
    factura_documento TEXT,
    fecha_documento DATE,
    estatus_legal TEXT,
    documento_ampare_propiedad TEXT,
    comentarios TEXT,
    id_bien INT,
    FOREIGN KEY (id_bien) REFERENCES Bien(id_bien)
);

-- Tabla HistorialResguardo
CREATE TABLE IF NOT EXISTS HistorialResguardo (
    id_historial_resguardo INT AUTO_INCREMENT PRIMARY KEY,
    fecha_resguardo DATE NOT NULL,
    id_bien INT,
    id_empleado INT,
    id_usuario INT,
    FOREIGN KEY (id_bien) REFERENCES Bien(id_bien),
    FOREIGN KEY (id_empleado) REFERENCES Empleado(id_empleado),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
);

-- Reactivar las claves foráneas
SET FOREIGN_KEY_CHECKS = 1;
