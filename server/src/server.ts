import express from 'express';
import productRouter from "./routes/products.js";

// Skapa express-applikationen
const app = express();

// Använd port 8000
const port = process.env.PORT || 8000;

// Alla HTTP-anrop
// "/api/products" ska hanteras av issueRouter
app.use("/api/products", productRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});