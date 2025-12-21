import express from "express";
import booksRoutes from "./routes/booksRoutes.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/books", booksRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
