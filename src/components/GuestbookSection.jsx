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

    {
      id: 5,
      name: "",
      relation: "Friend",
      message: "Fifty years of impact, wisdom and grace. Your friendship has been a blessing, and your ability to inspire everyone around you remains unmatched. May this new chapter bring even greater joy and fulfillment.",
      time: "May,28th 2026",
    },
    {
      id: 6,
      name: "The Delta Professionals Forum",
      relation: "Professional Association",
      message: "Your dedication to excellence has left a lasting mark on everyone privileged to work alongside you. Thank you for being a shining example of integrity, leadership and service. Happy 50th Birthday!",
      time: "May,29th 2026",
    },
    {
      id: 7,
      name: "",
      relation: "Family Friend",
      message: "Watching your journey over the years has been inspiring. You have touched countless lives through your kindness, generosity and unwavering faith. May your golden jubilee be filled with beautiful memories.",
      time: "May,30th 2026",
    },
    {
      id: 8,
      name: "The Youth Mentorship Circle",
      relation: "Community Group",
      message: "Many of us are where we are today because you believed in us when others did not. Thank you for investing in the next generation. Your legacy will continue for many years to come.",
      time: "June,1st 2026",
    },
    {
      id: 9,
      name: "",
      relation: "Family Friend",
      message: "A life of purpose, hard work and remarkable achievements deserves to be celebrated. Thank you for being a role model and a source of inspiration to so many. Happy 50th Birthday, Shosho!",
      time: "June,2nd 2026",
    },
    {
      id: 10,
      name: "The Lagos Business Network",
      relation: "Colleague",
      message: "Your leadership has consistently brought people together and created opportunities for growth. We celebrate not only your achievements but also the lives you have positively influenced along the way.",
      time: "June,3rd 2026",
    },
    {
      id: 11,
      name: "",
      relation: "Family",
      message: "Today we celebrate a remarkable husband, father, brother and friend. Your strength, compassion and commitment to family have been the foundation of countless cherished memories.",
      time: "June,4th 2026",
    },
    {
      id: 12,
      name: "Friends of Ajegunle",
      relation: "Community Member",
      message: "No matter how far life has taken you, you have always remained connected to your roots. Thank you for remembering your community and for showing that true success includes lifting others along the way.",
      time: "June,5th 2026",
    }
  ];

  // LOAD FROM LOCAL STORAGE
  const [tributes, setTributes] = useState(defaultTributes);

  const [showTributesModal, setShowTributesModal] = useState(false);

  const [selectedTributeIndex, setSelectedTributeIndex] =
    useState(null);

  const [tributePage, setTributePage] = useState(1);

  const TRIBUTES_PER_PAGE = 4;

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



  const tributeTotalPages = Math.ceil(
    tributes.length / TRIBUTES_PER_PAGE
  );

  const tributeStartIndex =
    (tributePage - 1) * TRIBUTES_PER_PAGE;

  const paginatedTributes = tributes.slice(
    tributeStartIndex,
    tributeStartIndex + TRIBUTES_PER_PAGE
  );

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
                    <option value="Classmate / Alumni">Classmate / Alumni</option>

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

          <button
            className="tributes-count-btn hidden md:block"
            onClick={() => {
              setTributePage(1);
              setShowTributesModal(true);
            }}
          >
            View all Tributes ({tributes.length})
          </button>
        </div>

        {/* SCROLL AREA */}
        <div className="tributes-scroll-wrap">
          <div className="tributes-track">
            {tributes.slice(0, 4).map((tribute, index) => (
              <div
                key={tribute.id}
                className="tribute-card"
                onClick={() => {
                  setSelectedTributeIndex(index);
                  setShowTributesModal(true);
                }}
              >
                <div className="tribute-name-row">

                  <div className="tribute-avatar">
                    {tribute.name?.charAt(0) || "T"}
                  </div>

                  <div>
                    <div className="tribute-name">
                      {tribute.name}
                    </div>

                    <div className="tribute-relation">
                      {tribute.relation}
                    </div>
                  </div>

                  <div className="tribute-time">
                    {tribute.time}
                  </div>

                </div>

                <div className="tribute-message">
                  "{tribute.message}"
                </div>

                <div className="tribute-stars">
                  ✨ ✨ ✨
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {showTributesModal && (
        <div
          className="tribute-modal"
          onClick={() => {
            setShowTributesModal(false);
            setSelectedTributeIndex(null);
          }}
        >
          <div
            className="tribute-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setShowTributesModal(false);
                setSelectedTributeIndex(null);
                setTributePage(1);
              }}
            >
              ✕
            </button>

            {selectedTributeIndex === null ? (
              <>
                <div className="tribute-modal-grid">
                  {paginatedTributes.map(
                    (tribute, index) => (
                      <div
                        key={tribute.id}
                        className="tribute-card"
                        onClick={() =>
                          setSelectedTributeIndex(
                            tributeStartIndex + index
                          )
                        }
                      >
                        <div className="tribute-name">
                          {tribute.name}
                        </div>

                        <div className="tribute-relation">
                          {tribute.relation}
                        </div>

                        <div className="tribute-message">
                          {tribute.message.substring(0, 120)}
                          ...
                        </div>
                      </div>
                    )
                  )}
                </div>

                <div className="pagination">
                  <button
                    onClick={() =>
                      setTributePage((p) =>
                        Math.max(p - 1, 1)
                      )
                    }
                  >
                    Prev
                  </button>

                  {Array.from({
                    length: tributeTotalPages,
                  }).map((_, i) => (
                    <button
                      key={i}
                      className={
                        tributePage === i + 1
                          ? "pagination-btn active"
                          : "pagination-btn"
                      }
                      onClick={() => setTributePage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    onClick={() =>
                      setTributePage((p) =>
                        Math.min(
                          p + 1,
                          tributeTotalPages
                        )
                      )
                    }
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <div className="lightbox-tribute">
                <button
                  className="nav-btn left"
                  onClick={() =>
                    setSelectedTributeIndex((prev) =>
                      prev === 0
                        ? tributes.length - 1
                        : prev - 1
                    )
                  }
                >
                  ←
                </button>

                <div className="lightbox-tribute-content">
                  <h3>
                    {
                      tributes[selectedTributeIndex]
                        .name
                    }
                  </h3>

                  <p>
                    {
                      tributes[selectedTributeIndex]
                        .relation
                    }
                  </p>

                  <div>
                    "
                    {
                      tributes[selectedTributeIndex]
                        .message
                    }
                    "
                  </div>
                </div>

                <button
                  className="nav-btn right"
                  onClick={() =>
                    setSelectedTributeIndex((prev) =>
                      prev === tributes.length - 1
                        ? 0
                        : prev + 1
                    )
                  }
                >
                  →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}