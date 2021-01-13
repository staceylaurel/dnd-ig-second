import { Router } from "express";
import { createToken } from "../../utils/tokens";
import { generateHash } from "../../utils/passwords";
import db from "../../db";

const router = Router();

//POST
router.post("/", async (req: any, res) => {
  const newPlayer = req.body;

  newPlayer.password = generateHash(newPlayer.password);
  try {
    const validName = /^[a-z0-9_]{3,16}$/.test(newPlayer.username);
    if (!validName) {
      throw new Error(
        "username breaks: alphanumeric string that may include _  having a length of 3 to 16 characters"
      );
    }
    const results = await db.player.insert(newPlayer);
    const token = createToken({ userid: results.insertId });
    res.json(token);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "code bad at server, routes, auth, register, POST",
      error: error.message,
    });
  }
});

export default router;