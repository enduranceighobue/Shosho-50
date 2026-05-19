import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import menu from "../assets/menu.svg";
import x from "../assets/x.svg";
import Hero from "../components/Hero";
import ShoshoLogo from "../components/Shoshologo";
import TributeSession from "../components/TributeSession";
import GallerySection from "../components/GallerySection";
import TimelineSection from "../components/TimelineSection";





export default function Home() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header
                className={`top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-[#f3edd7] shadow-md backdrop-blur-md"
                    : "bg-[#f3edd7]"
                    }`}
            >
                <nav className="container w-[90%] mx-auto flex items-center justify-between">
                    <button className="flex items-center gap-2  bg-[#f3edd7] border-2 border-[#b18f08] mt-3 mb-3 rounded-md px-3 py-1">
                        <ShoshoLogo />
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        className="lg:hidden text-gray-700 p-2"
                        onClick={() =>
                            setIsMobileMenuOpen(!isMobileMenuOpen)
                        }
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <img
                                src={x}
                                alt="Close"
                                className="w-6 h-6"
                            />
                        ) : (
                            <img
                                src={menu}
                                alt="Menu"
                                className="w-6 h-6"
                            />
                        )}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8 xl:gap-12 text-white">
                        <a
                            href="#tribute"
                            className={`text-[12px] transition-colors hover:text-amber-700 ${scrolled ? "text-[#b18f08]" : "text-[#b18f08]"
                                }`}
                        >
                            TRIBUTE
                        </a>

                        <a
                            href="#gallery"
                            className={`text-[12px] transition-colors hover:text-amber-700 ${scrolled ? "text-[#b18f08]" : "text-[#b18f08]"
                                }`}
                        >
                            GALLERY
                        </a>

                        {/* Products Link */}
                        <a
                            href="#journey"
                            className={`text-[12px] transition-colors hover:text-amber-700 ${scrolled ? "text-[#b18f08]" : "text-[#b18f08]"
                                }`}
                        >
                            JOURNEY
                        </a>

                        <a
                            href="#legacy"
                            className={`text-[12px] transition-colors hover:text-amber-700 ${scrolled ? "text-[#b18f08]" : "text-[#b18f08]"
                                }`}
                        >
                            LEGACY
                        </a>

                        <a
                            
                            className={`text-[12px] transition-colors hover:text-amber-700 ${scrolled ? "text-[#b18f08]" : "text-[#b18f08]"
                                }`}
                        >
                            GUESTBOOK
                        </a>
                        <a
                            href="#"
                            className={`text-[12px] font-bold border border-[#b18f08] py-1 px-4 transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#b18f08] to-[#ecc62a] text-[#f3edd7] rounded-sm ${scrolled ? "text-[#f3edd7]" : "text-[#f3edd7]"
                                }`}
                        >
                            🎉 CELEBRATE
                        </a>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white border-t border-gray-200">
                        <div className="px-4 py-4 space-y-4">
                            <a
                                href="#tribute"
                                className={`block ${scrolled
                                    ? "text-[#b18f08]"
                                    : "text-[#b18f08]"
                                    } hover:text-amber-700 font-medium transition-colors py-2`}
                                onClick={() =>
                                    setIsMobileMenuOpen(false)
                                }
                            >
                                TRIBUTE
                            </a>

                            <a
                                href="#gallery"
                                className={`block ${scrolled
                                    ? "text-[#b18f08]"
                                    : "text-[#b18f08]"
                                    } hover:text-amber-700 font-medium transition-colors py-2`}
                                onClick={() =>
                                    setIsMobileMenuOpen(false)
                                }
                            >

                                GALLERY
                            </a>

                            {/* Products Link */}
                            <a
                                href="#journey"
                                className={`block ${scrolled
                                    ? "text-[#b18f08]"
                                    : "text-[#b18f08]"
                                    } hover:text-amber-700 font-medium transition-colors py-2`}
                                onClick={() =>
                                    setIsMobileMenuOpen(false)
                                }
                            >
                                JOURNEY
                            </a>

                            <a
                                href="#legacy"
                                className={`block ${scrolled
                                    ? "text-[#b18f08]"
                                    : "text-[#b18f08]"
                                    } hover:text-amber-700 font-medium transition-colors py-2`}
                                onClick={() =>
                                    setIsMobileMenuOpen(false)
                                }
                            >
                                LEGACY
                            </a>

                            <a
                                
                                className={`block ${scrolled
                                    ? "text-[#b18f08]"
                                    : "text-[#b18f08]"
                                    } hover:text-amber-700 font-medium transition-colors py-2`}
                                onClick={() =>
                                    setIsMobileMenuOpen(false)
                                }
                            >
                                GUESTBOOK
                            </a>

                            <a
                                href="#"
                                className={`block ${scrolled
                                    ? "text-[#f3edd7]"
                                    : "text-[#f3edd7]"
                                    } hover:text-amber-700 font-medium  bg-[#b18f08] transition-colors py-2 px-1`}
                                onClick={() =>
                                    setIsMobileMenuOpen(false)
                                }
                            >
                                🎉 CELEBRATE
                            </a>
                        </div>
                    </div>
                )}
            </header>

            <div id="home">
                <Hero />
            </div>

            <div id="tribute">
                <TributeSession />
            </div>

            <div id="gallery">
                <GallerySection />
            </div>

            <div id="journey">
                <TimelineSection />
            </div>
            

        </>
    );
}