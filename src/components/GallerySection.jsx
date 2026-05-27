"use client";

import { useState } from "react";

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
    young: ["/gallery/young1.jpeg", "/gallery/young2.jpeg"],
    school: ["/gallery/school1.jpeg", "/gallery/school2.jpeg", "/gallery/fam4.jpeg",],
    friends: ["/gallery/friends1.jpeg", "/gallery/friends2.jpeg"],
    family: ["/gallery/fam1.jpeg", "/gallery/fam2.jpeg", "/gallery/fam3.jpeg", "/gallery/fam5.jpeg", "/gallery/fam6.jpeg", "/gallery/family.jpeg", "/gallery/fam11.jpeg"],
    others: [
        "/gallery/other3.jpeg",
        "/gallery/other6.jpeg",
        "/gallery/other7.jpeg",
        "/gallery/other10.jpeg",

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
                            className={`tab-btn ${activeTab === tab.id
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
                                    loading="lazy"
                                    decoding="async"
                                    width="400"
                                    height="500"
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