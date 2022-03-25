
import express, {json} from 'express';
import morgan from 'morgan';

//Importing routes
import proyectRoutes from './routes/proyects';
import taskRoutes from './routes/tasks';

//Initialization
const app = express();

//middlewares
app.use(morgan('dev')); // para ir viendo por consola las peticiones que van llegando
app.use(json()); // para poder entender los archivos json que van llegando

//routes
app.use('/api/projects', proyectRoutes);
app.use('/api/tasks', taskRoutes);

export default app;