import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GuestbookSection() {
  const [formData, setFormData] = useState({ name: "", relation: "", message: "" });
  const navigate = useNavigate();

  const defaultTributes = [
    { id: 1, name: "The Halliburton MVP Team", relation: "Colleague", message: "Two decades of watching you lead with discipline and brilliance. The MVP award was never enough to capture what you trully brought - vision, integrity and an unwavering work ethic. Here's is to 50 years of exellence!", time: "May,20th 2026" },
    { id: 2, name: "Onorbrakpor Family", relation: "Family", message: "Ochuko, fifty years of watching you grow from that fourth child on Nosamu street to the man you are today filled our minds with immeasurable pride. You have always made us believe that where you start is just the begining. Happy Golden Jubilee!", time: "May,22nd 2026" },
    { id: 3, name: "Wilmerconnect, Ajegunle.", relation: "Community Member", message: "You never forget where you came from, even as your career soared, you kept giving back to Ajegunle - the street that shaped you. You are a true son of the soil. Congratulations on 50 years of inspiring greatness!", time: "May,26th 2026" },
    { id: 4, name: "Ajero Alumni, Class of '93", relation: "Classmate / Alumni", message: "We remember the quiet determination that set you apart even back in school. Today, that same resolved has taken you around the world and back. We are proud to call you ours. Happy 50th, Shosho!", time: "May,26th 2026" },
    { id: 5, name: "Anonymous", relation: "Friend", message: "Fifty years of impact, wisdom and grace. Your friendship has been a blessing, and your ability to inspire everyone around you remains unmatched. May this new chapter bring even greater joy and fulfillment.", time: "May,28th 2026" },
  ];

  const [tributes, setTributes] = useState(() => {
    const saved = localStorage.getItem("tributes");
    return saved ? JSON.parse(saved) : defaultTributes;
  });

  useEffect(() => {
    localStorage.setItem("tributes", JSON.stringify(tributes));
  }, [tributes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTribute = {
      id: Date.now(),
      name: formData.name || "Anonymous",
      relation: formData.relation || "Friend",
      message: formData.message,
      time: new Date().toLocaleString("en-NG", { dateStyle: "medium", timeStyle: "short" }),
    };

    setTributes((prev) => [newTribute, ...prev]);
    setFormData({ name: "", relation: "", message: "" });
  };

  return (
    <>
      {/* GUESTBOOK FORM */}
      <section className="guestbook-section">
        <div className="guestbook-inner">
          <div className="guestbook-form-wrap">
            <p className="uppercase tracking-[0.4em] text-[#675012] text-sm text-center mb-2">Celebration of Life</p>
            <h3 className="text-center font-bold text-3xl md:text-4xl font-serif text-[#2b2b2b]">Leave a Tribute</h3>
            <h6 className="text-center text-[#675012] mt-2 mb-8 tracking-wide">Share your wishes, memories and love for Shosho</h6>
            
            <form className="guestbook-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="text-[#675012]">Your Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label className="text-[#675012]">Relationship</label>
                  <select name="relation" value={formData.relation} onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="Family">Family</option>
                    <option value="Friend">Friend</option>
                    <option value="Colleague">Colleague</option>
                    <option value="Classmate / Alumni">Classmate / Alumni</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="text-[#675012]">Your Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Write your tribute..." required />
              </div>
              <button type="submit" className="btn-gold">Submit Tribute</button>
            </form>
          </div>
        </div>
      </section>

      {/* TRIBUTES SECTION SHOWING FIXED 4 CARDS */}
      <section className="tributes-section">
        <div className="tributes-header">
          <p className="section-label text-[#675012] uppercase tracking-[0.3em]">Loving Tributes</p>
          <button className="tributes-count-btn text-[#675012] font-semibold" onClick={() => navigate("/tributes")}>
            View All Tributes ({tributes.length})
          </button>
        </div>

        <div className="tributes-scroll-wrap">
          <div className="tributes-track">
            {tributes.slice(0, 4).map((tribute) => (
              <div
                key={tribute.id}
                className="tribute-card cursor-pointer"
                onClick={() => navigate(`/tribute/${tribute.id}`)}
              >
                <div className="tribute-name-row">
                  <div className="tribute-avatar">{tribute.name?.charAt(0) || "A"}</div>
                  <div>
                    <div className="tribute-name">{tribute.name || "Anonymous"}</div>
                    <div className="tribute-relation">{tribute.relation}</div>
                  </div>
                  <div className="tribute-time">{tribute.time}</div>
                </div>
                {/* Truncated for homepage layout safety */}
                <div className="tribute-message line-clamp-3">"{tribute.message}"</div>
                <div className="tribute-stars">✨ ✨ ✨</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}