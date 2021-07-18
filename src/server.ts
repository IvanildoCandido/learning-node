import express, { Request, Response } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import mainRoutes from './routes/index';

dotenv.config();
const PORT = process.env.PORT;

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({ extended: true }));

server.use(mainRoutes);

server.use((req: Request, res: Response) => {
  res.status(404).send('Página não encontrada!');
});

server.listen(PORT, () => {
  console.log('Servidor rodando na porta:', PORT);
});
