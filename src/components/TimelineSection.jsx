import { useEffect, useState } from "react";

const timelineData = [
  {
    year: "May 3, 1976",
    title: "Born In Ajegunle,Lagos",
    text: "Fourth child of Mr. & Mrs. Patrick Irikefe Onabrakpor, born on Nosamu Street.Where perseverance was part of daily life.",
  },
  {
    year: "Early Years",
    title: "Foundations of Discipline",
    text: "Kajola Primary School - Ajeromi Ifelodun High School - Unity School, Agbarho Delta State. His guiding principle:no procastination no flop.",
  },
  {
    year: "1994",
    title: "University of Port Harcourt",
    text: "Mechanical Engineering degree - passion ignited. His diligence earned extended industrial training with Halliburton Energy Services.",
  },
  {
    year: "1999",
    title: "NYSC - A Strategic Move",
    text: "Secured a redeployment to Rivers State - heart of Nigeria's oil and gas industry. Retained by Halliburton as Assistant Service Operator.",
  },
  {
    year: "1999 - 2018",
    title: "Halliburton - A Career Of Impact",
    text: "Nearly two decades of distinction. Multiple MVP Awards. Advance to Technical Professional - technical mastery and strategic impact combined.",
  },
  {
    year: "2018",
    title: "NetCore Integrated Services",
    text: "Technical Advisor & Business Development Director - shaping industry growth while his enterpreneurial vision quietly grew.",
  },
  {
    year: "2024",
    title: "PIO Suite LTD",
    text: "Founded a Premium African Hospitality Brand. Flagship in Abraka, Delta State. Expanding to Lekki, Lagos.",
  },
  {
    year: "ONGOING",
    title: "MBA - Gies Business School",
    text: "University of Illinois Urbana-Champaign - because the pursuit of excellence never ends.",
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
    <div className="bg-[#f3edd7]">
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