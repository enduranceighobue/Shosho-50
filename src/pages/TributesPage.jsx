
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TributesPage() {
    const navigate = useNavigate();

    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const tributesPerPage = 6;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const tributes = JSON.parse(localStorage.getItem("tributes")) || [];

    // Dynamically filters based on name, relationship, or the message itself
    const filteredTributes = tributes.filter((t) =>
        t.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.relation?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.message?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredTributes.length / tributesPerPage);

    const startIndex = (currentPage - 1) * tributesPerPage;
    const endIndex = startIndex + tributesPerPage;

    const currentTributes = filteredTributes.slice(startIndex, endIndex);

    return (
        <div className="min-h-screen bg-[#f0e7c0] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Navigation & Title Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <button
                        onClick={() => navigate("/")}
                        className="px-5 py-2 bg-[#675012] text-white rounded-full text-xs font-semibold tracking-wider uppercase transition hover:bg-[#523f0e]"
                    >
                        ←  Home
                    </button>
                    <h1 className="text-3xl md:text-4xl font-serif text-[#c59f1c] font-bold text-center">
                        Loving Tributes
                    </h1>
                    <div className="w-24 hidden md:block"></div> {/* Spacer */}
                </div>

                {/* Powerful Tailwind Search Bar */}
                <div className="mb-10 max-w-md mx-auto">
                    <input
                        type="text"
                        placeholder="Search by name, relationship, or keyword..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        }}
                        className="w-full px-5 py-3 rounded-full border border-[#c9a84c] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8b6914] bg-white text-gray-800 placeholder-gray-400"
                    />
                </div>

                {/* Dynamic Grid Matrix Layout */}
                {filteredTributes.length === 0 ? (
                    <p className="text-center text-gray-600 mt-8">No matching tributes found.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentTributes.map((tribute) => (
                            <div
                                key={tribute.id}
                                onClick={() => navigate(`/tribute/${tribute.id}`)}
                                className="bg-[#f8f3e4] border border-amber-600/20 rounded-xl p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-transparent before:via-[#c9a84c] before:to-transparent"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8b6914] to-[#c9a84c] flex items-center justify-center text-white font-serif font-bold text-lg shadow-sm">
                                            {tribute.name?.charAt(0) || "A"}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-serif font-bold text-gray-900 truncate text-base">{tribute.name || "Anonymous"}</h3>
                                            <p className="text-[10px] tracking-widest uppercase font-semibold text-[#8b6914]">{tribute.relation}</p>
                                        </div>
                                    </div>
                                    {/* Breaks early cleanly so preview text stays uniform */}
                                    <p className="text-gray-700 italic text-sm leading-relaxed line-clamp-4">
                                        "{tribute.message}"
                                    </p>
                                </div>
                                <div className="mt-4 pt-3 border-t border-amber-900/10 flex justify-between items-center">
                                    <span className="text-[10px] text-gray-500">{tribute.time}</span>
                                    <span className="text-xs text-[#c9a84c] tracking-widest">✨ ✨ ✨</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">

                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded-lg font-medium transition ${currentPage === 1
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-[#8b6914] text-white hover:bg-[#6f5410]"
                            }`}
                    >
                        Previous
                    </button>

                    {[...Array(totalPages)].map((_, index) => {
                        const page = index + 1;

                        return (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-10 h-10 rounded-lg font-semibold transition ${currentPage === page
                                    ? "bg-[#c9a84c] text-white shadow-md"
                                    : "bg-white border border-[#c9a84c] text-[#8b6914] hover:bg-[#f3e8c4]"
                                    }`}
                            >
                                {page}
                            </button>
                        );
                    })}

                    <button
                        onClick={() =>
                            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                        }
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded-lg font-medium transition ${currentPage === totalPages
                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                            : "bg-[#8b6914] text-white hover:bg-[#6f5410]"
                            }`}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
}