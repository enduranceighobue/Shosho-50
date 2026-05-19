import { useEffect, useState } from "react";

const timelineData = [
  {
    year: "May 3, 1976",
    title: "Born In Ajegunle,Lagos",
    text: "A life quietly shaped by family, values, and early dreams.",
  },
  {
    year: "School Days",
    title: "Learning & Growth",
    text: "Discovering knowledge, friendships, and purpose through education.",
  },
  {
    year: "Youth",
    title: "Finding Direction",
    text: "Moments of self-discovery, ambition, and becoming.",
  },
  {
    year: "Present",
    title: "The Journey Continues",
    text: "A life still unfolding — shaped by experience and vision.",
  },
  {
    year: "Present",
    title: "The Journey Continues",
    text: "A life still unfolding — shaped by experience and vision.",
  },
  {
    year: "Present",
    title: "The Journey Continues",
    text: "A life still unfolding — shaped by experience and vision.",
  },
  {
    year: "Present",
    title: "The Journey Continues",
    text: "A life still unfolding — shaped by experience and vision.",
  },
  {
    year: "Present",
    title: "The Journey Continues",
    text: "A life still unfolding — shaped by experience and vision.",
  },
];

const TimelineSection = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisibleItems(timelineData.map((_, i) => i));
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-[#f2f2f5]">
      <section className="timeline-section">
      {/* HEADER */}
      <div className="text-center">
        <p className="gallery-label">THE JOURNEY</p>

        <h2 className="gallery-title">A Life Unfolded</h2>

        <p className="gallery-sub">
          Moments that shaped a story worth remembering
        </p>

        <div className="gold-rule cen"></div>
      </div>

      {/* TIMELINE */}
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${
              visibleItems.includes(index) ? "visible" : ""
            }`}
          >
            {/* LEFT / RIGHT CONTENT */}
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-heading">{item.title}</div>
              <div className="timeline-body">{item.text}</div>
            </div>

            {/* CENTER DOT */}
            <div className="timeline-dot-wrap">
              <div className="timeline-dot"></div>
            </div>

            {/* EMPTY SIDE (for layout balance) */}
            <div className="timeline-empty"></div>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default TimelineSection;