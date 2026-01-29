"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const roadmapSections = [
  {
    id: "foundations",
    title: "Milestone 1 – Foundations | יסודות",
    estimate: "⏱️ כאן הזינו הערכת זמן כוללת לשלב זה",
    color: "from-indigo-500 to-violet-500",
    items: [
      { label: "כאן הגדירו ידע בסיסי שכל חברי הצוות חייבים לחלוק", time: "טווח זמן משוער" },
      { label: "כאן הגדירו הבנה בסיסית של התחום או המערכת", time: "טווח זמן משוער" },
      { label: "כאן סמנו פערים קריטיים שחייבים להיסגר מוקדם", time: "טווח זמן משוער" },
    ],
  },
  {
    id: "team",
    title: "Milestone 2 – Team Skills | מיומנויות צוות",
    estimate: "⏱️ כאן הזינו הערכת זמן כוללת לשלב זה",
    color: "from-emerald-500 to-teal-500",
    items: [
      { label: "כאן הגדירו איך הצוות עובד יחד ביום־יום", time: "טווח זמן משוער" },
      { label: "כאן הגדירו תהליכי משוב, שיתוף וקבלת החלטות", time: "טווח זמן משוער" },
      { label: "כאן הגדירו כלי תקשורת וניהול עבודה", time: "טווח זמן משוער" },
    ],
  },
  {
    id: "professional",
    title: "Milestone 3 – Projects & Professional Level | פרוייקטים מעשיים & רמה מקצועית",
    estimate: "⏱️ כאן הזינו הערכת זמן כוללת לשלב זה",
    color: "from-fuchsia-500 to-pink-500",
    items: [
      { label: "כאן הגדירו פרויקט מעשי קטן שתרצו להתנסות בו", time: "טווח זמן משוער" },
      { label: "כאן הגדירו פרויקט מעשי בינוני שתרצו להתנסות בו", time: "טווח זמן משוער" },
      { label: "אילו בעיות מופיעות כשהמערכת גדלה", time: "טווח זמן משוער" },
      { label: "עקרונות בסיסיים של ביצועים ויציבות", time: "טווח זמן משוער" },
      { label: "Trade-offs בין פשטות, סקייל ותחזוקה", time: "טווח זמן משוער" },
    ],
  },
  {
    id: "career",
    title: "Milestone 4 – Career Readiness | מוכנות לקריירה",
    estimate: "⏱️ כאן הזינו הערכת זמן כוללת לשלב זה",
    color: "from-orange-500 to-amber-500",
    items: [
      { label: "מה כל אחד צריך לדעת להסביר בראיון טכני", time: "טווח זמן משוער" },
      { label: "אילו סוגי שאלות מקצועיות צפויות", time: "טווח זמן משוער" },
      { label: "אילו פרויקטים ניתן להציג ולהגן עליהם", time: "טווח זמן משוער" },
    ],
  },
];

export default function Roadmap() {
  const [data, setData] = useState({});
  const containerRef = useRef(null);

  // טעינת נתונים מ-LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem("roadmapData");
    if (saved) setData(JSON.parse(saved));
  }, []);

  // עדכון נתונים ושמירה ב-LocalStorage
  const update = (key, field, value) => {
    setData((prev) => {
      const newData = {
        ...prev,
        [key]: {
          checked: field === "checked" ? value : prev[key]?.checked || false,
          text: field === "text" ? value : prev[key]?.text || "",
        },
      };
      localStorage.setItem("roadmapData", JSON.stringify(newData));
      return newData;
    });
  };

  // הורדת PDF
  const downloadPDF = async () => {
    if (!containerRef.current) return;
    const canvas = await html2canvas(containerRef.current, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("roadmap.pdf");
  };

  return (
    <main className="page" ref={containerRef}>
      <h1>🧭 Roadmap Template לצוותי פיתוח</h1>
      <p className="subtitle">ארבעה שלבי התפתחות · כלי לדיון, תיאום והכוונה</p>

      <div className="buttons">
        <Link href="/" className="nav">
          ← חזרה לעמוד הסכם צוות
        </Link>
        <button onClick={downloadPDF}>⬇️ הורד PDF</button>
      </div>

      <div className="timeline">
        {roadmapSections.map((sec) => (
          <section key={sec.id} className="section">
            <div className={`header bg-gradient ${sec.color}`}>
              <h2>{sec.title}</h2>
              <span>{sec.estimate}</span>
            </div>

            <div className="items">
              {sec.items.map((item, i) => {
                const id = `${sec.id}-${i}`;
                const state = data[id] || { checked: false, text: "" };
                return (
                  <div key={id} className="item">
                    <label>
                      <input
                        type="checkbox"
                        checked={state.checked}
                        onChange={(e) => update(id, "checked", e.target.checked)}
                      />
                      {item.label}
                    </label>
                    <textarea
                      placeholder="הוסיפו הערות / החלטות / פירוט…"
                      value={state.text}
                      onChange={(e) => update(id, "text", e.target.value)}
                    />
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          padding: 4rem 1.5rem;
          background: radial-gradient(circle at top, #0f172a, #020617);
          color: white;
        }

        .buttons {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        h1 {
          text-align: center;
          font-size: 2.8rem;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          text-align: center;
          color: #c7d2fe;
          margin-bottom: 3rem;
        }

        .nav {
          color: #93c5fd;
        }

        .timeline {
          max-width: 1000px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        .section {
          position: relative;
        }

        .header {
          border-radius: 18px;
          padding: 1.4rem 1.8rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
        }

        .header h2 {
          font-size: 1.35rem;
          font-weight: 600;
        }

        .header span {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .items {
          margin-top: 1.4rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1rem;
        }

        .item {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(8px);
          border-radius: 14px;
          padding: 1rem 1.2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .item label {
          display: flex;
          gap: 0.6rem;
          font-size: 0.95rem;
        }

        .item textarea {
          width: 100%;
          min-height: 60px;
          border-radius: 8px;
          padding: 0.5rem;
          background: rgba(0, 0, 0, 0.4);
          color: white;
          border: none;
        }

        .bg-gradient {
          background: linear-gradient(135deg, var(--tw-gradient-stops));
        }

        button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 6px;
          background: #3b82f6;
          color: white;
          cursor: pointer;
        }

        button:hover {
          background: #2563eb;
        }
      `}</style>
    </main>
  );
}
