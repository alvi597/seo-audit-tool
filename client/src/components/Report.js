import React from "react";
import html2pdf from "html2pdf.js";

export default function Report({ data }) {
  const handlePDF = () => {
    const element = document.getElementById("report");
    html2pdf().from(element).save("SEO_Report.pdf");
  };

  return (
    <div className="report" id="report">
      <h2>SEO Audit Report</h2>
      <ul>
        <li><strong>On-Page SEO:</strong> {data.onPageSEO}</li>
        <li><strong>Technical SEO:</strong> {data.technicalSEO}</li>
        <li><strong>Backlinks:</strong> {data.backlinks}</li>
        <li><strong>Competitors:</strong> {data.competitors.join(", ")}</li>
        <li><strong>Keywords:</strong> {data.keywords.join(", ")}</li>
        <li><strong>Meta Description:</strong> {data.metaDescription}</li>
        <li><strong>Sitemap:</strong> {data.sitemap ? "Yes" : "No"}</li>
        <li><strong>robots.txt:</strong> {data.robotsTxt ? "Yes" : "No"}</li>
        <li><strong>SSL:</strong> {data.ssl ? "Yes" : "No"}</li>
      </ul>
      <button onClick={handlePDF}>Export as PDF</button>
    </div>
  );
}


// === File: client/src/components/ThemeToggle.js ===
import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="theme-toggle">
      <label>
        <input
          type="checkbox"
          checked={dark}
          onChange={() => setDark(!dark)}
        />
        {dark ? "🌙" : "☀️"}
      </label>
    </div>
  );
}

