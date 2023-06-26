import { Request, Response } from "express";
import { connection } from "../config/database";

export const userController = {
  async show (req: Request, res: Response) {
    const users = await connection("users").select("*");
    return res.json(users);
  },
  async index (req: Request, res: Response) {
    const { id } = req.params;
    const [user] = await connection("users").select("*").where("id", id);
    return res.json(user);
  },
  async store (req: Request, res: Response) {
    const data = req.body;
    const [user] = await connection("users").insert(data);
    return res.json(user);
  },
  async update (req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    await connection("users").update(data).where("id", id);
    return res.sendStatus(200);
  },
  async destroy (req: Request, res: Response) {
    const { id } = req.params;
    await connection("users").delete().where("id", id);
    return res.sendStatus(200);
  },
};
