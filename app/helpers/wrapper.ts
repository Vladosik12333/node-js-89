import { Request, Response } from 'express';
import Icontroller from '../interfaces/controller';

type Iwrapper = (
    controller: Icontroller
) => (req: Request, res: Response) => Promise<void>;

const wrapper: Iwrapper = (controller: Icontroller) => async (req, res) => {
    try {
        await controller(req, res);
    } catch (error) {
        res.status(401).json({ message: 'Error' });
    }
};

export default wrapper;
