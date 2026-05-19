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

const GallerySection = () => {
    const [activeTab, setActiveTab] = useState("young");

    // PHOTO STORAGE
    const [photos, setPhotos] = useState({
        young: [],
        school: [],
        friends: [],
        family: [],
        others: [],
    });




    const currentTab = tabs.find((tab) => tab.id === activeTab);

    // HANDLE IMAGE UPLOAD
    const handleUpload = (e, tabId) => {
        const files = Array.from(e.target.files);

        const imagePromises = files.map((file) => {
            return new Promise((resolve) => {
                const reader = new FileReader();

                reader.onload = () => {
                    resolve(reader.result); // base64 string
                };

                reader.readAsDataURL(file);
            });
        });

        Promise.all(imagePromises).then((images) => {
            setPhotos((prev) => {
                const updated = {
                    ...prev,
                    [tabId]: [...prev[tabId], ...images],
                };

                localStorage.setItem("galleryPhotos", JSON.stringify(updated));

                return updated;
            });
        });
    };

    useEffect(() => {
        const saved = localStorage.getItem("galleryPhotos");

        if (saved) {
            setPhotos(JSON.parse(saved));
        }
    }, []);


    const handleDelete = (tabId, indexToRemove) => {
        setPhotos((prev) => ({
            ...prev,
            [tabId]: prev[tabId].filter((_, index) => index !== indexToRemove),
        }));
    };

    return (
        <div className="bg-[#f0e7c0]">
            <section className="gallery-section">
                {/* HEADER */}
                <div className="text-center">
                    <p className="gallery-label">A LIFE WELL LIVED</p>

                    <h2 className="gallery-title">Photo Gallery</h2>

                    <p className="gallery-sub">
                        Click any frame to upload a photo
                    </p>

                    <div className="gold-rule cen"></div>
                </div>

                {/* CATEGORY BUTTONS */}
                <div className="tabs-wrap">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`tab-btn ${activeTab === tab.id ? "active" : ""
                                }`}
                        >
                            {tab.label}

                            {/* PHOTO COUNT */}
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

                {/* GALLERY GRID */}
                <div className="photos-grid">
                    {/* EMPTY STATE */}
                    {photos[activeTab].length === 0 && (
                        <div className="empty-state ">
                            <div className="ei">
                                {currentTab.icon}
                            </div>

                            <p>
                                No photos yet — click the button below to
                                add some
                            </p>
                        </div>
                    )}

                    {/* PHOTOS */}
                    {photos[activeTab].map((photo, index) => (
                        <div key={index} className="photo-card">

                            <img src={photo} alt="" />

                            <button
                                className="delete-btn"
                                onClick={() => handleDelete(activeTab, index)}
                            >
                                ✕
                            </button>

                        </div>
                    ))}

                    {/* ADD PHOTO */}
                    <label className="add-btn" >
                        <span className="text-3xl">＋</span>
                        <span>Add Photo</span>

                        <input
                            type="file"
                            accept="image/*"
                            multiple
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