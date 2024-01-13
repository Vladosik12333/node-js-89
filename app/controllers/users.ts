import { Request, Response } from 'express';

export const userLogin = async (req: Request, res: Response) => {
    throw new Error('My error');
    res.status(267).json({ message: 'User logged in' });
};
