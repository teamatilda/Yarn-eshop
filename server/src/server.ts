import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import productRouter from "./routes/products.js";

// Skapa express-applikationen
const app = express();


// Behövs för __dirname i ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Serving images from:", path.join(__dirname, "public/images"));

// Använd port 8000
const port = process.env.PORT || 8000;

// Servera statiska bilder från public/images
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Alla HTTP-anrop
// "/api/products" ska hanteras av issueRouter
app.use("/api/products", productRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});