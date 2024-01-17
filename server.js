const express = require("express");

const app = express();

const PORT = 5001;

// Loading Engine
const jsxEngine = require("jsx-view-engine");

// Import Router
const pokemonRoutes = require("./routes/pokemonRoutes");

// Engine Setup
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// POST Request data format
app.use("/pokemon", pokemonRoutes);

// Root Route
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Pokemon App!</h1>");
});

// Listening Port
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});