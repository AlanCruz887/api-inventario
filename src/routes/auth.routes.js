import { Router } from "express";
import bcrypt from "bcrypt";
import { generateToken } from "../config/JWT.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = Router();

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Iniciar sesión
 *     description: Autentica a un usuario y devuelve un token JWT si las credenciales son correctas.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: string
 *                 example: "admin"
 *               contrasena:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso.
 *       401:
 *         description: Credenciales incorrectas.
 */
router.post("/login", async (req, res) => {
    const { usuario, contrasena } = req.body;

    try {
        const user = await prisma.usuario.findFirst({
            where: { usuario },
            include: { Rol: true }, // Incluye el rol del usuario
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Usuario o contraseña incorrectos.",
            });
        }

        const isPasswordValid = await bcrypt.compare(contrasena, user.contrasena);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Usuario o contraseña incorrectos.",
            });
        }

        // Generar el token JWT
        const token = generateToken({
            id: user.id_usuario,
            usuario: user.usuario,
            role: user.Rol.nombre_rol, // Incluye el rol en el token
        });

        res.status(200).json({
            success: true,
            token,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error al iniciar sesión."
        });
    }
});




/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registrar un nuevo usuario
 *     description: Crea un nuevo usuario en el sistema con el rol predeterminado (ID 2) y devuelve un token JWT.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               usuario:
 *                 type: string
 *                 example: "nuevoUsuario"
 *               contrasena:
 *                 type: string
 *                 example: "password123"
 *               id_empleado:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente.
 *       400:
 *         description: Error en la solicitud (datos inválidos).
 *       500:
 *         description: Error al registrar el usuario.
 */
router.post("/register", async (req, res) => {
    const { usuario, contrasena, id_empleado } = req.body;

    try {
        // Verificar si el usuario ya existe
        const existingUser = await prisma.usuario.findFirst({
            where: { usuario },
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "El usuario ya existe.",
            });
        }

        // Hashear la contraseña antes de almacenarla
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

        // Crear el nuevo usuario con el rol predeterminado (ID 2)
        const newUser = await prisma.usuario.create({
            data: {
                usuario,
                contrasena: hashedPassword,
                id_empleado, // Opcional
                id_rol: 2,   // Siempre asignar el rol predeterminado
            },
        });

        // Generar un token JWT
        const token = generateToken({
            id: newUser.id_usuario,
            usuario: newUser.usuario,
            role: "user", // Puedes ajustar este valor al nombre real del rol 2
        });

        res.status(201).json({
            success: true,
            message: "Usuario registrado exitosamente.",
            token,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: `Error al registrar el usuario. ${error.message}`,
        });
    }
});

export default router;
