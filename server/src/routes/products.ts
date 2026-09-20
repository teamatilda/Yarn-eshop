import express from "express";
import Database from 'better-sqlite3';

const router = express.Router();
const db = new Database('./eshop.db');

// GET all products
router.get("/", (req, res) => {
    const products = db.prepare('SELECT * from products').all();
    res.json(products);
});

// GET products matching search query 
router.get('/search', (req, res) => {
    const query= req.query.q as string;

    if (!query || query.trim() === '') {
        return res.json([]);
    }

    const stmt = db.prepare('SELECT * FROM products WHERE Title LIKE ?');
    const results = stmt.all(`%${query}%`);

    res.json(results);
})

// GET single product by id
router.get('/:id', (req, res) => {
    const product = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
    if (!product) {
        return res.status(404).json({ error: 'Hittade ingen produkt' });
    }
    res.json(product);
});

export default router;
