import { Request, Response } from "express";

const userLogin = async (req: Request, res: Response) => {
  throw new Error("My error");
  res.status(267).json({ message: "User logged in" });
};

module.exports = {
  userLogin,
};
