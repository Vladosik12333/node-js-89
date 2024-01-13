import { Request, Response } from "express";

const wrapper =
  (controller: (req: Request, res: Response) => void) =>
  async (req: Request, res: Response) => {
    try {
      await controller(req, res);
    } catch (error) {
      res.status(401).json({ message: "Error" });
    }
  };

module.exports = wrapper;
