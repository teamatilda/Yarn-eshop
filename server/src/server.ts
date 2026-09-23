import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import productRouter from "./routes/products.js";
import spotsRouter from "./routes/spots.js";

const app = express();
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 8000;


app.use("/images", express.static(path.join(__dirname, "public/images")));

app.use("/api/products", productRouter);

app.use("/api/spots", spotsRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});