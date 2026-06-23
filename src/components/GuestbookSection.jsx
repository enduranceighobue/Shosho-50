import { useState } from "react";
import { useNavigate } from "react-router-dom";

// The data is received directly as props from Home.jsx
export default function GuestbookSection({ tributes = [], setTributes }) {

  const navigate = useNavigate();

  // ONLY keep the state for the text input fields
  const [formData, setFormData] = useState({ name: "", relation: "", message: "" });

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
      time: new Date().toLocaleString("en-NG", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    };

    // Updates the shared memory array upstream
    setTributes((prev) => [newTribute, ...prev]);
    setFormData({ name: "", relation: "", message: "" });
  };

  return (
    <>
      {/* GUESTBOOK FORM */}
      <section className="guestbook-section">
        <div className="guestbook-inner">
          <p className="uppercase tracking-[0.4em] text-[#675012] text-sm text-center mb-2">
            Celebration of Life
          </p>

          <h3 className="text-center font-bold text-3xl md:text-4xl font-serif text-[#2b2b2b]">
            Leave a Tribute
          </h3>

          <h6 className="text-center text-[#675012] mt-2 mb-8 tracking-wide">
            Share your wishes, memories and love for Shosho
          </h6>

          <form className="guestbook-form mx-auto w-210" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="text-[#675012]">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>

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
                  <option value="Classmate / Alumni">Classmate / Alumni</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

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

            <button type="submit" className="btn-gold">
              Submit Tribute
            </button>
          </form>
        </div>
      </section>

      {/* TRIBUTES */}
      <section className="tributes-section">
        <div className="tributes-header">
          <p className="section-label text-[#675012] uppercase tracking-[0.3em]">
            Loving Tributes
          </p>

          <button
            className="tributes-count-btn text-[#675012] font-semibold"
            onClick={() => navigate("/tributes")}
          >
            View All Tributes ({tributes.length})
          </button>
        </div>

        <div className="tributes-track">
          {tributes.slice(0, 4).map((tribute) => (
            <div
              key={tribute.id}
              className="tribute-card"
              onClick={() => navigate(`/tribute/${tribute.id}`)}
            >
              <div className="tribute-name-row">
                <div className="tribute-avatar">
                  {tribute.name?.charAt(0) || "A"}
                </div>

                <div>
                  <div className="tribute-name">{tribute.name}</div>
                  <div className="tribute-relation">{tribute.relation}</div>
                </div>

                <div className="tribute-time">{tribute.time}</div>
              </div>

              <div className="tribute-message line-clamp-3">
                "{tribute.message}"
              </div>

              <div className="tribute-stars">✨ ✨ ✨</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}