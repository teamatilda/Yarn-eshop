import { Product } from "../models/Product.js";

const products: Product[] = [
    {
    id: 1, title: "Jacka", price: 200
    },
    {
    id: 2, title: "Tröja", price: 300
    }
];

export function getProducts() {
    // Skapa ny array som består av alla element
    return [...products];
};