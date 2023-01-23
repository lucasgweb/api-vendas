import 'reflect-metadata';
import AppError from '@shared/errors/AppError';
import router from '@shared/routes';
import cors from 'cors';
import { errors } from 'celebrate';
import express, { NextFunction, Response, Request } from 'express';
import 'express-async-errors';
import '@shared/typeorm';

const app = express();

app.use(cors());
app.use(express.json());

app.use(router);

app.use(errors());

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('Aplicação rodando na porta 3333!');
});
