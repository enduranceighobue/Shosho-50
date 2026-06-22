"use client";

import { useEffect, useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    X,
} from "lucide-react";

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
    young: [
        "/gallery/young1.jpeg",
        "/gallery/young2.jpeg",
        "/gallery/newp.jpeg",
    ],

    school: [
        "/gallery/school1.jpeg",
        "/gallery/school2.jpeg",
        "/gallery/fam4.jpeg",
    ],

    friends: [
        "/gallery/friends1.jpeg",
        "/gallery/friends2.jpeg",
    ],

    family: [
        "/gallery/fam1.jpeg",
        "/gallery/fam2.jpeg",
        "/gallery/fam3.jpeg",
        "/gallery/fam5.jpeg",
        "/gallery/fam6.jpeg",
        "/gallery/fa.jpeg",
        "/gallery/family.jpeg",
        "/gallery/fam11.jpeg",
    ],

    others: [
        "/gallery/_AV_3785.jpg.jpeg",
        "/gallery/other3.jpeg",
        "/gallery/other6.jpeg",
        "/gallery/other7.jpeg",
        "/gallery/other10.jpeg",
        "/gallery/_AV_3869.jpg.jpeg",
        "/gallery/_AV_3966.jpg.jpeg",
        "/gallery/_AV_3672.jpg.jpeg",
        "/gallery/others2.jpeg",
        "/gallery/_AV_3736.jpg.jpeg",
        "/gallery/_AV_3867.jpg.jpeg",
        "/gallery/others.jpeg",
        "/gallery/other5.jpeg",
        "/gallery/_AV_3966.jpg.jpeg",
        "/gallery/_AV_3918.jpg.jpeg",
        "/gallery/_AV_3975.jpg.jpeg",
        "/gallery/_AV_3776.jpg.jpeg",
        "/gallery/_AV_3759.jpg.jpeg",
        "/gallery/_AV_3731.jpg.jpeg",
        "/gallery/_AV_3736.jpg.jpeg",
    ],
};

const IMAGES_PER_PAGE = 8;

const GallerySection = () => {
    const [activeTab, setActiveTab] =
        useState("young");

    // PAGINATION
    const [currentPage, setCurrentPage] =
        useState(1);

    // LIGHTBOX
    const [selectedIndex, setSelectedIndex] =
        useState(null);

    const currentTab = tabs.find(
        (tab) => tab.id === activeTab
    );

    const currentPhotos = photos[activeTab];

    // RESET PAGE WHEN TAB CHANGES
    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab]);

    // PAGINATION LOGIC
    const totalPages = Math.ceil(
        currentPhotos.length / IMAGES_PER_PAGE
    );

    const startIndex =
        (currentPage - 1) * IMAGES_PER_PAGE;

    const paginatedPhotos = currentPhotos.slice(
        startIndex,
        startIndex + IMAGES_PER_PAGE
    );

    // OPEN IMAGE
    const openImage = (indexOnPage) => {
        setSelectedIndex(startIndex + indexOnPage);
        document.body.style.overflow = "hidden";
    };

    // CLOSE IMAGE
    const closeLightbox = () => {
        setSelectedIndex(null);
        document.body.style.overflow = "auto";
    };

    // NEXT IMAGE
    const nextImage = (e) => {
        e.stopPropagation();

        setSelectedIndex((prev) =>
            prev === currentPhotos.length - 1
                ? 0
                : prev + 1
        );
    };

    // PREVIOUS IMAGE
    const prevImage = (e) => {
        e.stopPropagation();

        setSelectedIndex((prev) =>
            prev === 0
                ? currentPhotos.length - 1
                : prev - 1
        );
    };

    // ESC KEY
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedIndex === null) return;

            if (e.key === "Escape") {
                closeLightbox();
            }

            if (e.key === "ArrowRight") {
                setSelectedIndex((prev) =>
                    prev === currentPhotos.length - 1
                        ? 0
                        : prev + 1
                );
            }

            if (e.key === "ArrowLeft") {
                setSelectedIndex((prev) =>
                    prev === 0
                        ? currentPhotos.length - 1
                        : prev - 1
                );
            }
        };

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () =>
            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
    }, [selectedIndex, currentPhotos.length]);

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
                            onClick={() =>
                                setActiveTab(tab.id)
                            }
                            className={`tab-btn ${
                                activeTab === tab.id
                                    ? "active"
                                    : ""
                            }`}
                        >
                            {tab.label}

                            <span className="tab-count">
                                {
                                    photos[tab.id]
                                        .length
                                }
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
                    {paginatedPhotos.map(
                        (photo, index) => (
                            <div
                                key={index}
                                className="photo-card"
                                onClick={() =>
                                    openImage(index)
                                }
                            >
                                <img
                                    src={photo}
                                    alt={`Gallery ${index}`}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        )
                    )}
                </div>

                {/* PAGINATION */}
                {totalPages > 1 && (
                    <div className="pagination">
                        <button
                            onClick={() =>
                                setCurrentPage(
                                    (prev) =>
                                        Math.max(
                                            prev - 1,
                                            1
                                        )
                                )
                            }
                            disabled={
                                currentPage === 1
                            }
                            className="page-btn"
                        >
                            Prev
                        </button>

                        {Array.from({
                            length: totalPages,
                        }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() =>
                                    setCurrentPage(
                                        index + 1
                                    )
                                }
                                className={`page-number ${
                                    currentPage ===
                                    index + 1
                                        ? "active-page"
                                        : ""
                                }`}
                            >
                                {index + 1}
                            </button>
                        ))}

                        <button
                            onClick={() =>
                                setCurrentPage(
                                    (prev) =>
                                        Math.min(
                                            prev + 1,
                                            totalPages
                                        )
                                )
                            }
                            disabled={
                                currentPage ===
                                totalPages
                            }
                            className="page-btn"
                        >
                            Next
                        </button>
                    </div>
                )}

                {/* LIGHTBOX */}
                {selectedIndex !== null && (
                    <div
                        className="lightbox"
                        onClick={closeLightbox}
                    >
                        {/* CLOSE */}
                        <button
                            className="close-btn"
                            onClick={closeLightbox}
                        >
                            <X size={28} />
                        </button>

                        {/* LEFT */}
                        <button
                            className="nav-btn left"
                            onClick={prevImage}
                        >
                            <ChevronLeft size={40} />
                        </button>

                        {/* IMAGE */}
                        <img
                            src={
                                currentPhotos[
                                    selectedIndex
                                ]
                            }
                            alt="Full view"
                            className="lightbox-img"
                            onClick={(e) =>
                                e.stopPropagation()
                            }
                        />

                        {/* RIGHT */}
                        <button
                            className="nav-btn right"
                            onClick={nextImage}
                        >
                            <ChevronRight size={40} />
                        </button>
                    </div>
                )}
            </section>
        </div>
    );
};

export default GallerySection;