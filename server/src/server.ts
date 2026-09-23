import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import productRouter from "./routes/products.js";
import spotsRouter from "./routes/spots.js";

// Skapa express-applikationen
const app = express();
app.use(express.json());

// Behövs för __dirname i ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Använd port 8000
const port = process.env.PORT || 8000;

// Statiska images från public/images
app.use("/images", express.static(path.join(__dirname, "public/images")));

// "/api/products" handled by productRouter
app.use("/api/products", productRouter);

// /api/spots handled by spotsRouter
app.use("/api/spots", spotsRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});