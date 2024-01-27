import HttpError from '../helpers/httpError';
import Icontroller from '../interfaces/controller';

export const userLogin: Icontroller = async (req, res) => {

console.log(v)
    const v = 1;    


    const error = new HttpError(472, "asdasd");
res.status(267).json({ message: 'User logged in' });
};
