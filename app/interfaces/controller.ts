import { Request, Response } from 'express';

type Icontroller = (req: Request, res: Response) => void;

export default Icontroller;
