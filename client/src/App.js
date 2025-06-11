import React, { useState } from "react";
import Hero from "./components/Hero";
import Report from "./components/Report";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

export default function App() {
  const [report, setReport] = useState(null);

  return (
    <div className="app">
      <ThemeToggle />
      <Hero setReport={setReport} />
      {report && <Report data={report} />}
    </div>
  );
}