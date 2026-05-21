"use client";

import { useState, useEffect } from "react";

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

const defaultPhotos = {
    young: [],
    school: [],
    friends: [],
    family: [],
    others: [],
};

const GallerySection = () => {
    const [activeTab, setActiveTab] = useState("young");
    const [photos, setPhotos] = useState(defaultPhotos);
    const [loaded, setLoaded] = useState(false);

    // CURRENT TAB
    const currentTab = tabs.find((tab) => tab.id === activeTab);

    // LOAD SAVED PHOTOS
    useEffect(() => {
        const savedPhotos = localStorage.getItem("galleryPhotos");

        if (savedPhotos) {
            setPhotos(JSON.parse(savedPhotos));
        }

        setLoaded(true);
    }, []);

    // SAVE PHOTOS
    useEffect(() => {
        if (!loaded) return;

        localStorage.setItem(
            "galleryPhotos",
            JSON.stringify(photos)
        );
    }, [photos, loaded]);

    // HANDLE IMAGE UPLOAD
    const handleUpload = (e, tabId) => {
        const files = Array.from(e.target.files);

        const imagePromises = files.map((file) => {
            return new Promise((resolve) => {
                const reader = new FileReader();

                reader.onloadend = () => {
                    resolve(reader.result);
                };

                reader.readAsDataURL(file);
            });
        });

        Promise.all(imagePromises).then((images) => {
            setPhotos((prev) => ({
                ...prev,
                [tabId]: [...prev[tabId], ...images],
            }));
        });
    };

    // DELETE PHOTO
    const handleDelete = (tabId, indexToRemove) => {
        setPhotos((prev) => ({
            ...prev,
            [tabId]: prev[tabId].filter(
                (_, index) => index !== indexToRemove
            ),
        }));
    };

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
                        Click any frame to upload a photo
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
                                activeTab === tab.id ? "active" : ""
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

                    {/* EMPTY STATE */}
                    {photos[activeTab].length === 0 && (
                        <div className="empty-state">
                            <div className="ei">
                                {currentTab.icon}
                            </div>

                            <p>
                                No photos yet — click below to add some
                            </p>
                        </div>
                    )}

                    {/* PHOTOS */}
                    {photos[activeTab].map((photo, index) => (
                        <div
                            key={index}
                            className="photo-card"
                        >
                            <img
                                src={photo}
                                alt={`Gallery ${index}`}
                            />

                            <button
                                className="delete-btn"
                                onClick={() =>
                                    handleDelete(activeTab, index)
                                }
                            >
                                ✕
                            </button>
                        </div>
                    ))}

                    {/* ADD PHOTO */}
                    <label className="add-btn">
                        <span className="text-3xl">＋</span>

                        <span>Add Photo</span>

                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            hidden
                            onChange={(e) =>
                                handleUpload(e, activeTab)
                            }
                        />
                    </label>

                </div>
            </section>
        </div>
    );
};

export default GallerySection;