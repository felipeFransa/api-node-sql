import express, { Request, Response } from 'express';
import userAdminRoutes from './routes/userAdmin';
import userClienteRoutes from './routes/userCliente';
import dotenv from 'dotenv';

dotenv.config();

const server = express();

server.use(userAdminRoutes);
server.use(userClienteRoutes);
server.use((req: Request, res: Response) => 
  {res.status(404).send('Página não encontrada!')
})

server.listen(process.env.PORT);