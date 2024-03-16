import 'reflect-metadata';
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import roomRoutes from './routes/roomRoutes';

const app: Express = express();
app.use(express.json());
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
app.use('/api/v1/rooms', roomRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('Express and TypeScript Server');
});
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on port ${port}`);
});
