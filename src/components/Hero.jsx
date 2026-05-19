import { useEffect, useState } from "react";

import heroImage1 from "../assets/sho3.jpeg";
import ShoshoLogo from "./Shoshologo";
import Fire from "./Fire";
import Countdown from "./Countdown";

// import Legacy from "./Legacy";

export default function Hero() {
    const images = [heroImage1];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className="relative min-h-screen overflow-hidden">

                {/* Background Images */}
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 bg-cover shadow-lg bg-center transition-all duration-[2000ms] ease-in-out ${index === currentImage
                            ? "opacity-100 scale-110"
                            : "opacity-0 scale-100"
                            }`}
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    />
                ))}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70 z-10"></div>

                {/* Hero Content */}
                <div className="relative z-20 min-h-screen flex items-center">
                    <div className="w-[90%] mx-auto container">

                        {/* TWO COLUMN LAYOUT */}
                        <div className="grid lg:grid-cols-2 gap-14 items-center">

                            {/* LEFT SIDE */}
                            <div className="text-white relative">

                                <div className="flex items-center gap-3 mb-5">

                                    {/* GOLD LINE */}
                                    <div className="w-6 h-[1px] bg-gradient-to-r from-[#b18f08] to-[#ecc62a]"></div>

                                    <p className="uppercase tracking-[0.4em] text-[#9c7b1e] text-[8px]">
                                        GOLDEN JUBILEE CELEBRATION
                                    </p>

                                </div>

                                <div className="">

                                    {/* BIG 50 */}
                                    <div className="overflow-visible ">
                                        <h1 className="sh-50 hero-50">
                                            50
                                        </h1>

                                        <h2 className="font-['Sora'] mt-2 text-sm sm:text-xl lg:text-xl font-extrabold text-[#9c7b1e] leading-tight -mt-2">
                                            Years of Courage & Purpose
                                        </h2>
                                    </div>

                                    {/* NAME */}
                                    <div className="pt-4">
                                        <h3 className="font-['Sora'] text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                                            Engr. Ogheneochuko
                                            <br />
                                            Onabrakpor
                                        </h3>

                                        {/* SMALL DETAILS */}
                                        <p className="mt-3 text-[10px]  tracking-[0.2em] uppercase text-gray-300">
                                            Born May 3, 1976 • Ajegunle, Lagos
                                        </p>
                                    </div>
                                    <div className="relative mt-8 pl-6 pt-4 max-w-xl">
                                        {/* Small Top Border */}
                                        <div className="absolute top-0 left-2 w-14 h-[1px] bg-[#ecc62a]/40"></div>

                                        {/* Small Left Border */}
                                        <div className="absolute top-3 left-0 w-[1px] h-16 bg-[#ecc62a]/30"></div>

                                        <h6 className="font-['Sora'] text-sm sm:text-base italic font-light leading-relaxed text-gray-300 tracking-wide">
                                            “Great lives are not defined by where they begin, but by the
                                            courage with which they are lived.”
                                        </h6>
                                    </div>
                                </div>
                                <div className="mt-5 mx-5">
                                    <ShoshoLogo />
                                </div>


                            </div>

                            {/* RIGHT SIDE */}
                            <div className="relative flex justify-center lg:justify-end">

                                {/* FADED MIDDLE LINE */}
                                <div className="hidden lg:block absolute left-[-35px] top-1/2 -translate-y-1/2 h-[75%] w-[1px] bg-gradient-to-b from-transparent via-[#ecc62a]/50 to-transparent"></div>

                                {/* PORTRAIT IMAGE */}
                                <div className="relative ">


                                    {/* GOLD GLOW */}
                                    <div className="absolute inset-0 bg-[#ecc62a]/20 blur-3xl rounded-full"></div>

                                    <img
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
                                        alt="Portrait"
                                        className="relative w-[200px] sm:w-[200px] lg:w-[350px] h-[300px] lg:h-[400px] object-cover mr-20  border border-[#ecc62a]/40 shadow-2xl"
                                    />
                                    {/* NAME INSIDE PORTRAIT */}
                                    <div className="absolute bottom-14 left-2/5 -translate-x-1/2 bg-[#b18f08] px-3 py-1">
                                        <p className="text-black text-sm font-semibold text-center whitespace-nowrap">
                                            Engr. Ogheneochuko Onabrakpor
                                        </p>
                                    </div>

                                    <div className="mt-6 flex flex-col items-center text-center mr-20 ">
                                        <h3 className="text-sm lg:text-sm">
                                            <ShoshoLogo />
                                        </h3>

                                        <p className="text-[#ecc62a] text-[8px] font-sora ">
                                            A life fully lived • 1976 - 2026
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </section>
            <Fire />
            <Countdown />
            
            
        </>
    );
}