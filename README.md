# 🔍 Hasnain SEO Audit Tool

A MERN-Stack NEXT.Js built, SEO Audit Tool that analyzes websites for SEO performance, accessibility, metadata structure, keyword usage, and performance insights using third-party APIs.
Built using the MERN stack with Tailwind CSS and deployed on Vercel.


### 🌐 Live Demo

👉 [https://hasnain-seo-audit-tool.vercel.app](https://hasnain-seo-audit-tool.vercel.app)

---

## 🚀 Features

- ✅ SEO meta tag and Open Graph tag analysis
- ⚡ Google PageSpeed Insights integration for performance scoring
- 🔍 Keyword analysis using [Serpstack API](https://serpstack.com/)
- 📋 Heading tag structure & hierarchy validation
- 🌈 Light/Dark mode UI
- 📄 PDF export of audit reports
- 📊 Visual representation of audit results
- 🧩 Modular and extensible architecture
- 🎨 Responsive UI built with Tailwind CSS and Framer Motion

---

## 🔗 External APIs Used

- **[Serpstack API](https://serpstack.com/)**  
  Used for extracting keyword data, SERP positions, and keyword metrics.

- **[Google PageSpeed Insights API](https://developers.google.com/speed/docs/insights/v5/get-started)**  
  Used for analyzing page speed, performance, accessibility, best practices, and SEO score.

---

## 🛠️ Tech Stack

- **Frontend**: React.js,Next.js, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js
- **PDF Generation**: Puppeteer / html-pdf
- **Database**: MongoDB (optional for storing audit history)
- **Deployment**: Vercel (Frontend), Render/Heroku (Backend)

---

## 📦 Installation

```bash
git clone https://github.com/your-username/seo-audit-tool.git
cd seo-audit-tool

# Install client
cd client
npm install

# Install server
cd ../server
npm install
