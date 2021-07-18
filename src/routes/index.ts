import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.render('pages/home', {
    name: 'Ivanildo',
    languages: ['node', 'php', 'react', 'java'],
    emptyList: ['Item 1', ' Item 2'],
    show: true,
  });
});

export default router;
