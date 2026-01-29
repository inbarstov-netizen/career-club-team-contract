"use client";

import React, { useState } from "react";
import Link from "next/link";

const sections = [
  {
    id: "profile",
    title: "Team Profile – מי אנחנו?",
    items: [
      "Team Type (Frontend / Backend / Product / Fullstack / Other)",
      "על איזה סוג מוצר / מערכת אנחנו עובדים?",
      "Experience Level (Beginners / Juniors / Mixed / Other)",
      "פערים משמעותיים בצוות",
      "Team Context – צוות קבוע או זמני?",
      "משך זמן משוער לעבודה משותפת",
      "אילוצים ידועים (זמן / טכנולוגיה / ארגון)",
    ],
  },
  {
    id: "goals",
    title: "Goals – לאן אנחנו רוצים להגיע?",
    items: [
      "איך נדע שהצלחנו?",
      "מה ייחשב תוצר איכותי בסוף הדרך?",
      "איזה סוג אנשי מקצוע אנחנו רוצים להיות?",
      "אילו יכולות או הרגלים נרצה לפתח?",
      "Non-Goals – מה לא המטרה של הצוות כרגע?",
    ],
  },
  {
    id: "agreements",
    title: "Working Agreements – איך עובדים ביחד?",
    items: [
      "איך מקבלים החלטות?",
      "מה עושים כשיש מחלוקת?",
      "Code & Quality – ציפיות מביקורות / משוב",
      "מה נחשב 'מספיק טוב' כדי להתקדם?",
      "Communication – ערוצים, זמינות וזמני תגובה",
      "Ownership & Responsibility – חלוקת אחריות וסגירה",
    ],
  },
  {
    id: "learning",
    title: "Learning Milestones – אבני דרך ללמידה",
    items: [
      "Milestone 1 – Foundations (ידע בסיסי ופערים)",
      "Milestone 2 – Team Skills (מיומנויות צוות)",
      "Milestone 3 – Professional Level (ידע מקצועי)",
      "הבנה מערכתית / תהליכית / מוצרית",
    ],
  },
  {
    id: "path",
    title: "Team Path – הדרך שלנו",
    items: [
      "Stack & Core Topics (שפות / כלים / פלטפורמות)",
      "Frameworks / Libraries / Systems",
      "Patterns / Concepts / Principles",
      "Best Practices וסטנדרטים מוסכמים",
      "שיתוף פעולה עם עיצוב / מוצר / צוותים אחרים",
      "כלים לניהול עבודה ותקשורת",
      "תיעוד – איפה ולמה?",
    ],
  },
  {
    id: "wrap",
    title: "Wrap-Up – סיכום והמשך",
    items: [
      "שלושת הדברים הכי חשובים שסיכמנו",
      "הצעד הראשון מכאן",
      "מתי חוזרים למסמך ומעדכנים אותו?",
      "המסמך הוא חי – מותר ורצוי לשנות אותו",
    ],
  },
];

export default function Home() {
  const [data, setData] = useState<Record<string, { checked: boolean; text: string }>>({});

  const update = (key: string, field: "checked" | "text", value: any) => {
    setData((prev) => ({
      ...prev,
      [key]: {
        checked: field === "checked" ? value : prev[key]?.checked ?? false,
        text: field === "text" ? value : prev[key]?.text ?? "",
      },
    }));
  };

  return (
    <main className="page">
      <h1>🤝 Team Working Agreement</h1>
      <p className="subtitle">מסמך חי להגדרת סטנדרטים, עקרונות והסכמות עבודה</p>

      <Link href="/roadmap" className="nav">
        מעבר ל-Roadmap הלימודי →
      </Link>

      {sections.map((sec) => (
        <section key={sec.id} className="section">
          <h2>{sec.title}</h2>

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
                  {item}
                </label>

                <textarea
                  placeholder="כתבו כאן החלטות / הערות / ניסוח מוסכם…"
                  value={state.text}
                  onChange={(e) => update(id, "text", e.target.value)}
                />
              </div>
            );
          })}
        </section>
      ))}

      <style jsx>{`
        .page {
          padding: 3rem 1.5rem;
          background: #020617;
          color: white;
        }
        h1 {
          text-align: center;
          font-size: 2.5rem;
        }
        .subtitle {
          text-align: center;
          color: #c7d2fe;
          margin-bottom: 1.5rem;
        }
        .nav {
          display: block;
          text-align: center;
          margin-bottom: 3rem;
          color: #93c5fd;
        }
        .section {
          max-width: 900px;
          margin: 0 auto 3rem;
        }
        h2 {
          margin-bottom: 1rem;
        }
        .item {
          background: rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 1rem;
          margin-bottom: 1rem;
        }
        label {
          display: flex;
          gap: 0.6rem;
          font-size: 0.95rem;
        }
        textarea {
          margin-top: 0.6rem;
          width: 100%;
          min-height: 70px;
          border-radius: 8px;
          padding: 0.5rem;
          background: rgba(0,0,0,0.4);
          color: white;
        }
      `}</style>
    </main>
  );
}
