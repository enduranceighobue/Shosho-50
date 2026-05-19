

export default function Legacy() {
  const milestones = [
    {
      icon: "🎓",
      number: "01",
      title: "Early Education",
      desc: "Foundational years of learning and growth that shaped the journey ahead.",
    },
    {
      icon: "🚀",
      number: "02",
      title: "First Breakthrough",
      desc: "The moment ambition turned into real achievement and direction.",
    },
    {
      icon: "💼",
      number: "03",
      title: "Career Growth",
      desc: "Building experience, skills, and impact through consistent effort.",
    },
    {
      icon: "🏆",
      number: "04",
      title: "Recognition",
      desc: "Achievements and milestones acknowledged by peers and community.",
    },
  ];

  return (
    <section className="milestones-section">
      <div className="milestones-inner">
        <div className="text-center">
          <h2 className="milestone-title" style={{ fontSize: "2rem" }}>
            Key Milestones
          </h2>
        </div>

        <div className="milestones-grid">
          {milestones.map((item, index) => (
            <div className="milestone-card" key={index}>
              <span className="milestone-icon">{item.icon}</span>

              <div className="milestone-num">{item.number}</div>

              <div className="milestone-title">{item.title}</div>

              <div className="milestone-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}