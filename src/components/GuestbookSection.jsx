import { useState, useEffect } from "react";

export default function GuestbookSection() {
  const [formData, setFormData] = useState({
    name: "",
    relation: "",
    message: "",
  });

  // DEFAULT TRIBUTES
  const defaultTributes = [
    {
      id: 1,
      name: "The Halliburton MVP Team",
      relation: "Colleague",
      message:
        "Two decades of watching you lead with discipline and brilliance. The MVP award was never enough to capture what you trully brought - vision, integrity and an unwavering work ethic. Here's is to 50 years of exellence!",
      time: "May,20th 2026",
    },
    {
      id: 2,
      name: "Onorbrakpor Family",
      relation: "Family",
      message:
        "Ochuko, fifty years of watching you grow from that fourth child on Nosamu street to the man you are today filled our minds with immeasurable pride. You have always made us believe that where you start is just the begining. Happy Golden Jubilee!",
      time: "May,22nd 2026",
    },
     {
      id: 3,
      name: "Wilmerconnect, Ajegunle.",
      relation: "Community Member",
      message:
        "You never forget where you came from, even as your career soared, you kept giving back to Ajegunle - the street that shaped you. You are a true son of the soil. Congratulations on 50 years of inspiring greatness!",
      time: "May,26th 2026",
    },
     {
      id: 4,
      name: "Ajero Alumni, Class of '93",
      relation: "Classmate / Alumni",
      message:
        "We remember the quiet determination that set you apart even back in school. Today, that same resolved has taken you around the world and back. We are proud to call you ours. Happy 50th, Shosho!",
      time: "May,26th 2026",
    },
  ];

  // LOAD FROM LOCAL STORAGE
  const [tributes, setTributes] = useState(defaultTributes);

useEffect(() => {
  const savedTributes = localStorage.getItem("tributes");

  if (savedTributes) {
    setTributes(JSON.parse(savedTributes));
  }
}, []);

  // SAVE TO LOCAL STORAGE WHENEVER TRIBUTES CHANGE
  useEffect(() => {
    localStorage.setItem("tributes", JSON.stringify(tributes));
  }, [tributes]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTribute = {
      id: Date.now(),
      name: formData.name,
      relation: formData.relation,
      message: formData.message,
      time: getCurrentTime(),
    };

    // ADD NEW TRIBUTE
    setTributes((prev) => [newTribute, ...prev]);

    // RESET FORM
    setFormData({
      name: "",
      relation: "",
      message: "",
    });
  };

  const getCurrentTime = () => {
  return new Date().toLocaleString("en-NG", {
    dateStyle: "medium",
    timeStyle: "short",
  });
};

  return (
    <div>
      {/* ================= GUESTBOOK ================= */}
      <section className="guestbook-section">
        <div className="guestbook-inner">
          <div className="guestbook-form-wrap">

            {/* GOLD LABEL */}
            <p className="uppercase tracking-[0.4em] text-[#675012] text-sm text-center mb-2">
              Celebration of Life
            </p>

            {/* TITLE */}
            <h3 className="text-center font-bold text-3xl md:text-4xl font-serif text-[#2b2b2b]">
              Leave a Tribute
            </h3>

            {/* SUBTITLE */}
            <h6 className="text-center text-[#675012] mt-2 mb-8 tracking-wide">
              Share your wishes, memories and love for Shosho
            </h6>

            {/* GOLD RULE */}
            <div
              style={{
                width: "120px",
                height: "2px",
                margin: "0 auto 2rem auto",
                background:
                  "linear-gradient(90deg, transparent, #614a0b, transparent)",
                borderRadius: "999px",
              }}
            />

            {/* FORM */}
            <form className="guestbook-form" onSubmit={handleSubmit}>
              <div className="form-row">
                {/* NAME */}
                <div className="form-group">
                  <label className="text-[#675012]">Your Name</label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* RELATION */}
                <div className="form-group">
                  <label className="text-[#675012]">Relationship</label>

                  <select
                    name="relation"
                    value={formData.relation}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Family">Family</option>
                    <option value="Friend">Friend</option>
                    <option value="Colleague">Colleague</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="form-group">
                <label className="text-[#675012]">Your Message</label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your tribute..."
                  required
                />
              </div>

              {/* BUTTON */}
              <button type="submit" className="btn-gold">
                Submit Tribute
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= TRIBUTES ================= */}
      <section className="tributes-section">
        {/* HEADER */}
        <div className="tributes-header">
          <p className="section-label text-[#675012] uppercase tracking-[0.3em]">
            Loving Tributes
          </p>

          <span className="tributes-count">
            {tributes.length} Messages
          </span>
        </div>

        {/* SCROLL AREA */}
        <div className="tributes-scroll-wrap">
          <div className="tributes-track">

            {tributes.map((tribute) => (
              <div className="tribute-card" key={tribute.id}>

                {/* TOP */}
                <div className="tribute-name-row">

                  {/* AVATAR */}
                  <div className="tribute-avatar">
                    {tribute.name.charAt(0)}
                  </div>

                  {/* NAME */}
                  <div>
                    <div className="tribute-name">
                      {tribute.name}
                    </div>

                    <div className="tribute-relation">
                      {tribute.relation}
                    </div>
                  </div>

                  {/* TIME */}
                  <div className="tribute-time">
                    {tribute.time}
                  </div>
                </div>

                {/* MESSAGE */}
                <div className="tribute-message">
                  “{tribute.message}”
                </div>

                {/* STARS */}
                <div className="tribute-stars">
                  ✨ ✨ ✨
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* HINT */}
        <div className="scroll-hint">
          Scroll to read more tributes
        </div>
      </section>
    </div>
  );
}