


const milestones = [
  {
    icon: "⚙️",
    number: "20yrs",
    title: "Engineering Excellence",
    desc: "Mechanical Engineering graduate, Rising to Technical Professional at Halliburton - one of the world's premier energy Companies ",
  },
  {
    icon: "🏆",
    number: "MVP",
    title: "Multiple MVP Awards",
    desc: "Recognized repeatedly for maximizing value - Added Performance - innovation, leadership and operational excellence.",
  },
  {
    icon: "🌍", 
    number: "∞",
    title: "Global Career",
    desc: "From Ajegunle to international oil & gas - a career touching industries and communities across Nigeria and beyond.",
  },
  {
    icon: "🏨",
    number: "PIO",
    title: "PIO Suite-Founder",
    desc: "Premium African hospitality brand, 2024. Flagship in Abraka, expanding to Lekki - building something lasting",
  },
  {
    icon: "🏅",
    number: "MBA",
    title: "Lifelong Learner",
    desc: "MBA from the University of Illinois Urbana Champaign (Gies Business School) - growth never stops.",
  },
  {
    icon: "🤝",
    number: "3+",
    title: "Community Champion",
    desc: "Wilmerconnect Ajegunle. Board of trustees, Ajeromi Ifelodun Alumini. Community support in Umeghe , Abraka.",
  },
  {
    icon: "👨‍👩‍👧",
    number: "4",
    title: "Devoted Family Man",
    desc: "Loving husband and proud father of three sons - building a family grounded in growth, partnership and purpose",
  },
  {
    icon: "🌟",
    number: "50",
    title: "Strategic Leader",
    desc: "Business Development Director. Chairman. A leader who builds bridges and creates opportunity for those around him ",
  },
];

export default function Legacy() {

  return (
   <>
   <div className="bg-[#faeed3]">
     <section className="milestones-section">
      <div className="milestones-inner">
        
        {/* SECTION HEADER */}
        <div className="milestones-header">
          <p className="milestones-subtitle">THE LEGACY</p>

          <h3 className="milestones-heading">
            Pillars Of A Golden Life
          </h3>

          <div className="gold-line"></div>
        </div>

        {/* GRID */}
        <div className="milestones-grid">
          {milestones.map((item, index) => (
            <div className="milestone-card" key={index}>
              <span className="milestone-icon">{item.icon}</span>

              <div className="milestone-num">{item.number}</div>

              <h4 className="milestone-title">{item.title}</h4>

              <p className="milestone-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
   </div>
   </>
  );
}