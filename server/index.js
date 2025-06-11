const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/audit", (req, res) => {
  const dummyReport = {
    onPageSEO: "Good",
    technicalSEO: "Average",
    backlinks: 124,
    competitors: ["site1.com", "site2.com"],
    keywords: ["seo", "audit", "technical seo"],
    metaDescription: "This is a dummy meta description",
    sitemap: true,
    robotsTxt: true,
    ssl: true
  };
  res.json(dummyReport);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
