import { NextFunction, Request, Response } from 'express';
import Icontroller from '../interfaces/controller';
import IHttpError from '../interfaces/httpError';

type Iwrapper = (
    controller: Icontroller
) => (req: Request, res: Response, next:NextFunction) => Promise<void>;

const wrapper: Iwrapper = (controller: Icontroller) => async (req, res, next) => {
    try {
        await controller(req, res);
    } catch (error: IHttpError | Error | any) {
        next(error)
    }
};

export default wrapper;
