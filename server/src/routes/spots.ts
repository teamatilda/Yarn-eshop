import express from "express";
import Database from "better-sqlite3";
import { Spot } from "../models/spot.js";

const router = express.Router();
const db = new Database('./eshop.db');

router.get('/', (req, res) => {
    const spots = db.prepare('SELECT * FROM spots ORDER BY sort_order ASC'). all() as Spot[];

    res.json(spots);
});

export default router;