const express = require("express");

const app = express();

const PORT = 5001;

// Loading Engine
const jsxEngine = require("jsx-view-engine");

// Engine Setup
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

// Root Route
app.get("/", (req, res) => {
    res.send("<h1>'Sup World</h1>");
});

// Listening Port
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});