import productsRouter from '@modules/products/routes/products.routes';
import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.use('/products', productsRouter);

router.get('/', (req: Request, res: Response) => {
  res.send('Teste');
});

export default router;
