import ShoshoLogo from "../components/Shoshologo";



export default function TributeFooter() {
  return (
    <section className="bg-[#1b1401]">
        <footer>
           
      {/* MAIN TITLE */}
      <h2 className="text-3xl md:text-5xl font-bold text-[#c9a84c] tracking-wide ">
         <ShoshoLogo />
      </h2>

      {/* NAME + YEARS */}
      <p className="footer-sub">
        Engr Ogheneochuko Onobrakpor · 1976 – 2026
      </p>

      {/* MESSAGE */}
      <h6
        style={{
          color: "#f3ead2",
          fontSize: "1rem",
          lineHeight: "1.8",
          maxWidth: "720px",
          margin: "0 auto",
          fontStyle: "italic",
          color: "#c59f1c",
        }}
      >
        From Ajegunle to the world — a life lived with courage,
        purpose and gold.
      </h6>

      {/* GOLD RULE */}
      <div
        className="footer-line"
        style={{
          background:
            "linear-gradient(90deg, transparent, #c9a84c, transparent)",
          height: "2px",
          width: "120px",
          borderRadius: "999px",
        }}
      />

      {/* COPYRIGHT */}
      <p className="footer-copy">
        © 2026 · A Golden Jubilee Celebration · With Love
      </p>

    </footer>
    </section>
  );
}