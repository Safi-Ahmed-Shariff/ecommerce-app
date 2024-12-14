const express = require("express");
const cors = require("cors");  // Import CORS
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(cors());  // Enable CORS globally
app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

