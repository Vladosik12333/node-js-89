import { Request, Response } from 'express';

type Icontroller = (req: Request, res: Response) => Promise<void>;

export default Icontroller;
