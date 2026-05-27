"use client";

import { useState } from "react";

// ================= IMAGES =================
// YOUNG
import young1 from "../assets/young1.jpeg";
import young2 from "../assets/young2.jpeg";

// SCHOOL
import school1 from "../assets/school1.jpeg";
import school2 from "../assets/school2.jpeg";

// FRIENDS
import friends1 from "../assets/friends1.jpeg";
import friends2 from "../assets/friends2.jpeg";

// FAMILY
import family1 from "../assets/fam1.jpeg";
import family2 from "../assets/fam2.jpeg";
import family3 from "../assets/fam3.jpeg";
import family4 from "../assets/fam4.jpeg";
import family5 from "../assets/fam5.jpeg";
import family6 from "../assets/family.jpeg"
import family7 from "../assets/famil.jpeg"

// OTHERS
import other1 from "../assets/others.jpeg";
import other2 from "../assets/others2.jpeg";
import other3 from "../assets/other3.jpeg";
import other4 from "../assets/other4.jpeg";
import other5 from "../assets/other5.jpeg";
import other6 from "../assets/other6.jpeg";
import other7 from "../assets/other7.jpeg";
import other8 from "../assets/other8.jpeg";
import other9 from "../assets/other9.jpeg";
import other10 from "../assets/other10.jpeg";

const tabs = [
  {
    id: "young",
    label: "Young Ochuko",
    icon: "👶",
    desc: "The early years — childhood and growing up",
  },
  {
    id: "school",
    label: "Ochuko Goes to School",
    icon: "🎓",
    desc: "School days, university life and academic journey",
  },
  {
    id: "friends",
    label: "Ochuko & Friends",
    icon: "🤝",
    desc: "Bonds and memories with friends",
  },
  {
    id: "family",
    label: "Ochuko & Family",
    icon: "👨‍👩‍👦",
    desc: "The people closest to his heart",
  },
  {
    id: "others",
    label: "Others",
    icon: "✨",
    desc: "More special moments",
  },
];

const photos = {
  young: [young1, young2],
  school: [school1, school2],
  friends: [friends1, friends2],
  family: [family1, family2, family3, family4, family5, family6, family7],
  others: [
    other1,
    other2,
    other3,
    other4,
    other5,
    other6,
    other7,
    other8,
    other9,
    other10,
  ],
};

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("young");

  // FULL IMAGE VIEW
  const [selectedImage, setSelectedImage] = useState(null);

  const currentTab = tabs.find(
    (tab) => tab.id === activeTab
  );

  return (
    <div className="bg-[#f0e7c0]">
      <section className="gallery-section">

        {/* HEADER */}
        <div className="text-center">
          <p className="gallery-label">
            A LIFE WELL LIVED
          </p>

          <h2 className="gallery-title">
            Photo Gallery
          </h2>

          <p className="gallery-sub">
            Explore beautiful memories
          </p>

          <div className="gold-rule cen"></div>
        </div>

        {/* TABS */}
        <div className="tabs-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-btn ${
                activeTab === tab.id
                  ? "active"
                  : ""
              }`}
            >
              {tab.label}

              <span className="tab-count">
                {photos[tab.id].length}
              </span>
            </button>
          ))}
        </div>

        {/* DESCRIPTION */}
        <div className="text-center mb-10">
          <p className="gallery-desc">
            <span className="gallery-emoji">
              {currentTab.icon}
            </span>

            {currentTab.desc}
          </p>
        </div>

        {/* GALLERY */}
        <div className="photos-grid">

          {photos[activeTab].map(
            (photo, index) => (
              <div
                key={index}
                className="photo-card"
                onClick={() =>
                  setSelectedImage(photo)
                }
              >
                <img
                  src={photo}
                  alt={`Gallery ${index}`}
                />
              </div>
            )
          )}
        </div>

        {/* LIGHTBOX */}
        {selectedImage && (
          <div
            className="lightbox"
            onClick={() =>
              setSelectedImage(null)
            }
          >
            <img
              src={selectedImage}
              alt="Full view"
              className="lightbox-img"
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default GallerySection;