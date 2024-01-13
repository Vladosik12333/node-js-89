import Icontroller from '../interfaces/controller';

export const userLogin: Icontroller = async (req, res) => {
    throw new Error('My error');
    res.status(267).json({ message: 'User logged in' });
};
