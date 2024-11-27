export const checkRole = (requiredRoles) => {
    return (req, res, next) => {
        // Verificar que el usuario esté autenticado
        if (!req.user || !req.user.role) {
            return res.status(403).json({
                success: false,
                message: "Acceso denegado. No se proporcionó un rol.",
            });
        }

        // Verificar si el rol del usuario está en la lista de roles permitidos
        if (!requiredRoles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: "Acceso denegado. No tienes el rol necesario.",
            });
        }

        next(); // Continuar si el rol es válido
    };
};
