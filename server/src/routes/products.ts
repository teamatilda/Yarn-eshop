import express from "express";
import { getProducts } from "../services/productService.js"; 

const router = express.Router();

router.get("/", (req, res) => {

    const products = getProducts();

    // Tar issue-arrayen och skapar en motsvarande JSON-array och skicka till användaren
    res.json(products);
});

export default router;
