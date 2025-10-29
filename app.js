const express = require("express");
const satellite = require("./src/satellite");
const iridium = require("./src/iridium");

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("🚀 Heavens Above app is running successfully!");
});

// Example endpoint to trigger your existing logic
app.get("/generate", async (req, res) => {
  try {
    await satellite.getTable({
      target: 25544,
      pages: 4,
      root: "./public/data/"
    });
    res.send("✅ Satellite data generated successfully!");
  } catch (err) {
    console.error(err);
    res.status(500).send("❌ Error generating satellite data.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
