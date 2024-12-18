import express from 'express';
import morgan from 'morgan';
import subcuentaArmonizadaRoutes from "./routes/subcuentaArmonizada.routes.js";
import tipoPosesionRoutes from "./routes/tipoPosesion.routes.js";
import codigoPartidaRoutes from "./routes/codigoPartidaEspecifica.routes.js";
import productoRoutes from "./routes/producto.routes.js";
import marcaRoutes from "./routes/marca.routes.js";
import recursoOrigenRoutes from "./routes/recursoOrigen.routes.js";
import bienRoutes from "./routes/bien.routes.js";
import statusBienRoutes from "./routes/statusBien.routes.js";
import tipoAltaRoutes from "./routes/tipoAlta.routes.js";
import resguardoRoutes from "./routes/resguardo.routes.js";
import empleadoRoutes from "./routes/empleado.routes.js";
import areaRoutes from "./routes/area.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";
import rolRoutes from "./routes/rol.routes.js";
import direccionRoutes from "./routes/direccion.routes.js";
import bajaBienRoutes from "./routes/bajaBien.routes.js";
import documentosRoutes from "./routes/documentos.routes.js";
import historialResguardo from './routes/historialResguardo.routes.js';
import authRoutes from './routes/auth.routes.js';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
//usar cors
app.use(cors());

app.use('/api/subcuenta-armonizada', subcuentaArmonizadaRoutes);
app.use('/api/tipo-posesion', tipoPosesionRoutes);
app.use('/api/codigo-partida-especifica', codigoPartidaRoutes);
app.use('/api/producto', productoRoutes);
app.use('/api/marca', marcaRoutes);
app.use('/api/recurso-origen', recursoOrigenRoutes);
app.use('/api/bien', bienRoutes);
app.use('/api/status-bien', statusBienRoutes);
app.use('/api/tipo-alta', tipoAltaRoutes);
app.use('/api/resguardo', resguardoRoutes);
app.use('/api/empleado', empleadoRoutes);
app.use('/api/area', areaRoutes);
app.use('/api/usuario', usuarioRoutes);
app.use('/api/rol', rolRoutes);
app.use('/api/direccion', direccionRoutes);
app.use('/api/baja-bien', bajaBienRoutes);
app.use('/api/documentos', documentosRoutes);
app.use('/api/historial-Resguardo', historialResguardo);
app.use('/auth',authRoutes)

export default app;