"use client";

import Link from "next/link";
import React from "react";

const roadmapSections = [
  {
    id: "foundations",
    title: "Milestone 1 – Foundations | יסודות",
    estimate: "⏱️ כאן הזינו הערכת זמן כוללת לשלב זה",
    color: "from-indigo-500 to-violet-500",
    items: [
      {
        label:
          "כאן הגדירו ידע בסיסי שכל חברי הצוות חייבים לחלוק",
        time: "טווח זמן משוער",
      },
      {
        label:
          "כאן הגדירו הבנה בסיסית של התחום או המערכת",
        time: "טווח זמן משוער",
      },
      {
        label:
          "כאן סמנו פערים קריטיים שחייבים להיסגר מוקדם",
        time: "טווח זמן משוער",
      },
    ],
  },
    {
    id: "team",
    title: "Milestone 2 – Team Skills | מיומנויות צוות",
    estimate: "⏱️ כאן הזינו הערכת זמן כוללת לשלב זה",
    color: "from-emerald-500 to-teal-500",
    items: [
      {
        label:
          "כאן הגדירו איך הצוות עובד יחד ביום־יום",
        time: "טווח זמן משוער",
      },
      {
        label:
          "כאן הגדירו תהליכי משוב, שיתוף וקבלת החלטות",
        time: "טווח זמן משוער",
      },
      {
        label:
          "כאן הגדירו כלי תקשורת וניהול עבודה",
        time: "טווח זמן משוער",
      },
    ],
  },
    {
    id: "professional",
    title: "Milestone 3 – Projects & Professional Level | פרוייקטים מעשיים & רמה מקצועית",
    estimate: "⏱️ כאן הזינו הערכת זמן כוללת לשלב זה",
    color: "from-fuchsia-500 to-pink-500",
    items: [
       {
        label:
          "כאן הגדירו פרויקט מעשי קטן שתרצו להתנסות בו",
        time: "טווח זמן משוער",
      },
       {
        label:
          "כאן הגדירו פרויקט מעשי בינוני שתרצו להתנסות בו",
        time: "טווח זמן משוער",
      },
       {
        label:
          "אילו בעיות מופיעות כשהמערכת גדלה",
        time: "טווח זמן משוער",
      },
      {
        label:
          "עקרונות בסיסיים של ביצועים ויציבות",
        time: "טווח זמן משוער",
      },
      {
        label:
          "Trade-offs בין פשטות, סקייל ותחזוקה",
        time: "טווח זמן משוער",
      },
    ],
  },
  {
    id: "career",
    title: "Milestone 4 – Career Readiness | מוכנות לקריירה",
    estimate: "⏱️ כאן הזינו הערכת זמן כוללת לשלב זה",
    color: "from-orange-500 to-amber-500",
    items: [
      {
        label:
          "מה כל אחד צריך לדעת להסביר בראיון טכני",
        time: "טווח זמן משוער",
      },
      {
        label:
          "אילו סוגי שאלות מקצועיות צפויות",
        time: "טווח זמן משוער",
      },
      {
        label:
          "אילו פרויקטים ניתן להציג ולהגן עליהם",
        time: "טווח זמן משוער",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="page">
      <h1>🧭 Roadmap Template לצוותי פיתוח</h1>
      <p className="subtitle">
        ארבעה שלבי התפתחות · כלי לדיון, תיאום והכוונה
      </p>

      <div className="timeline">
        {roadmapSections.map((sec) => (
          <section key={sec.id} className="section">
            <div className={`header bg-gradient ${sec.color}`}>
              <h2>{sec.title}</h2>
              <span>{sec.estimate}</span>
            </div>

            <div className="items">
              {sec.items.map((item, i) => (
                <div key={i} className="item">
                  <span>{item.label}</span>
                  <em>{item.time}</em>
                </div>
              ))}
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

        h1 {
          text-align: center;
          font-size: 2.8rem;
          margin-bottom: 0.5rem;
        }

        .subtitle {
          text-align: center;
          color: #c7d2fe;
          margin-bottom: 4rem;
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
          justify-content: space-between;
          gap: 1rem;
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .item:hover {
          transform: translateY(-4px) scale(1.01);
          background: rgba(255, 255, 255, 0.14);
        }

        .item span {
          font-size: 0.95rem;
        }

        .item em {
          font-size: 0.8rem;
          color: #e0e7ff;
          white-space: nowrap;
        }

        .bg-gradient {
          background: linear-gradient(135deg, var(--tw-gradient-stops));
        }
      `}</style>
    </main>
  );
}

<Link href="/" style={{ color: "#93c5fd", display: "block", marginBottom: "2rem" }}>
  ← חזרה ל-Team Working Agreement
</Link>
