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


// GET single product by id OR slug
router.get('/:idOrSlug', (req, res) => {
    const { idOrSlug } = req.params;
    const isNumeric = /^\d+$/.test(idOrSlug);

    const product = isNumeric
        ? db.prepare('SELECT * FROM products WHERE ID = ?').get(idOrSlug)
        : db.prepare('SELECT * FROM products WHERE Slug = ?').get(idOrSlug);

    if (!product) {
        return res.status(404).json({ error: 'Hittade ingen produkt' });
    }
    res.json(product);
})

router.post('/', (req, res) => {
    const { Title, Description, Price, Image_url } = req.body;

    if (!Title || Price === undefined) {
        return res.status(400).json({ error: 'Namn och pris krävs' });
    }

    const stmt = db.prepare(
        'INSERT INTO products (Title, Description, Price, Image_url) VALUES (?, ?, ?, ?)'
    );

    const result = stmt.run(Title, Description ?? '', Price, Image_url ?? '');

    const newProduct = db
    .prepare('SELECT * FROM products WHERE ID = ?')
    .get(result.lastInsertRowid);

    res.status(201).json(newProduct);
})

export default router;
