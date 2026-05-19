import { useState } from "react";

const quotesData = [
  { text: "Great lives are not defined by what they begin, but by the courage with which they lived." },
  { text: "Your consistency determines your legacy." },
  { text: "Greatness is built in silence, not in applause." },
];

export default function QuotesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="bg-[#faeed3] ">

        <section className="quotes-section">
      {/* Intro */}
      <p className="words-live-by">Words to Live By</p>
      <h3 className="philosophy">His Philosophy</h3>

      {/* GOLDEN RULE DECORATION (center line) */}
      <div className="golden-rule-center" />

      {/* Quotes */}
      <div className="quotes-wrapper">
        {quotesData.map((quote, index) => (
          <div
            key={index}
            className={`quote-slide ${index === activeIndex ? "active" : ""}`}
          >
            <div className="quote-marks">“</div>
            <p className="quote-text">{quote.text}</p>
          </div>
        ))}
      </div>

      {/* Dots Pagination */}
      <div className="quote-dots">
        {quotesData.map((_, index) => (
          <span
            key={index}
            className={`quote-dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
    </div>
  );
}