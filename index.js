import express from "express";
import productsRouter from "./src/routes/products.router.js";

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "API REST" });
});


app.use("/products", productsRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
