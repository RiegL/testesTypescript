import type {Request, Response} from 'express'
import * as express from 'express';
import * as produtoModel from './produto.model'

const router = express.Router();

router.get('/', async (_:Request, res:any) => {
  const data = await produtoModel.getAll();
  return res.status(200).json({ data });
});

router.post('/', async (req: Request, res:any ) => {
  const data = await produtoModel.store(req.body);
  return res.status(200).json({ data });
});

export default router;
