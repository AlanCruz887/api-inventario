import { verifyToken } from "../config/JWT.js";

export const authenticateJWT = (req, res, next) => {
    // Extraer el token del encabezado `x-access-token`
    const token = req.headers["x-access-token"];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "No se proporcionó un token.",
        });
    }

    try {
        const decoded = verifyToken(token); // Verifica el token
        req.user = decoded; // Almacena los datos del usuario en la solicitud
        next(); // Continúa con la siguiente función
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: "Token inválido o expirado.",
        });
    }
};
