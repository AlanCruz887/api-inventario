import jwt from "jsonwebtoken";

const SECRET_KEY = "TuClaveSecretaSuperSegura";

// Generar un token JWT
export const generateToken = (userData) => {
    return jwt.sign(userData, SECRET_KEY, { expiresIn: "24h" }); // Token válido por 24 horas
};

// Verificar un token JWT
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        throw new Error("Token inválido o expirado.");
    }
};
