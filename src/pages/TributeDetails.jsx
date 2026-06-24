import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function TributeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", 
  });
}, []);


const { tributes } = useOutletContext();
  const tribute = tributes.find((t) => t.id === Number(id));

  if (!tribute) {
    return (
      <div className="min-h-screen bg-[#f0e7c0] flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Tribute not found</h2>
        <button onClick={() => navigate("/tributes")} className="px-4 py-2 bg-[#675012] text-white rounded">
          Back to Tributes
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0e7c0] py-16 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        
        <button
          onClick={() => navigate("/tributes")}
          className="mb-6 inline-flex items-center cursor-pointer gap-2 text-sm font-semibold text-[#675012] hover:text-[#4d3b0d] transition"
        >
          ← Back to All Tributes
        </button>

        {/* Detailed Card Layout */}
        <div className="bg-[#f8f3e4] border-2 border-[#c9a84c]/30 rounded-2xl p-8 md:p-12 shadow-2xl text-center relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
          
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#8b6914] to-[#c9a84c] flex items-center justify-center text-white font-serif font-bold text-3xl shadow-md mb-4">
            {tribute.name?.charAt(0) || "A"}
          </div>

          <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-1">
            {tribute.name || "Anonymous"}
          </h2>
          
          <p className="text-xs tracking-widest uppercase font-bold text-[#8b6914] mb-2">
            {tribute.relation}
          </p>
          
          <p className="text-xs text-gray-400 mb-8">{tribute.time}</p>

          <div className="w-16 h-[1px] bg-[#c9a84c] mx-auto mb-8" />

          {/* Deep clean typography view for ultra long messages */}
          <p className="text-gray-800 text-base md:text-lg italic  text-left font-serif px-2 whitespace-pre-line">
            "{tribute.message}"
          </p>

          <div className="mt-10 text-lg tracking-widest text-[#c9a84c]">
            ✨ ✨ ✨
          </div>
        </div>

      </div>
    </div>
  );
}