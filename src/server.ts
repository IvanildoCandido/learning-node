import express, { Request, Response } from 'express';
import mainRoutes from './routes/index';

const server = express();

server.use(mainRoutes);

server.listen(3000, () => {
  console.log('Servidor rodando na porta:', 3000);
});
