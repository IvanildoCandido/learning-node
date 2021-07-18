import { Request, Response } from 'express';
import { Product } from '../models/Product';
export const home = (req: Request, res: Response) => {
  res.render('pages/home', {
    name: 'Ivanildo',
    languages: ['node', 'php', 'react', 'java'],
    emptyList: ['Item 1', ' Item 2'],
    products: Product.getAll(),
    show: true,
  });
};
