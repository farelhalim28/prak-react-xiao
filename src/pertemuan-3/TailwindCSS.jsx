// export default function TailwindCSS() {
//   return (
//     <div>
//         <FlexboxGrid/>
//       <h1 className="border m-5 p-2">Belajar Tailwind CSS</h1>
//       <button className="bg-green-500 text-gray-100 
//                         px-10 py-2 m-4 rounded-lg
//                         shadow-lg">
//         Click Me
//       </button>
//       <Spacing/>
//       <Typography/>
//       <BorderRadius/>
//       <BackgroundColors/>
//       <ShadowEffects/>
//     </div>
//   );
// }

// function FlexboxGrid(){
//     return (
//         <nav className="flex justify-between bg-green-700 p-4 text-white">
//             <h1 className="text-lg font-bold">MyWebsite</h1>
//             <ul className="flex space-x-4">
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">About</a></li>
//                 <li><a href="#">Contact</a></li>
//             </ul>
//         </nav>
//     )
// }

// function Spacing(){
//     return (
//         <div className="bg-green-300 shadow-lg p-5 m-5 rounded-lg">
//             <h2 className="text-gray-950 font-semibold">Card Title</h2>
//             <p className="mt-2 text-blue-600">Ini adalah contoh penggunaan padding dan margin di Tailwind.</p>
//         </div>
//     )
// }

// function Typography(){
//     return (
//         <div className="bg-amber-50 shadow-lg p-8 m-5 rounded-lg">
//             <h1 className="text-3xl font-bold text-blue-800">Tailwind Typography</h1>
//             <p className="text-gray-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
//         </div>
//     )
// }

// function BorderRadius(){
//     return (
//         <button className="border-2 border-blue-400 text-blue-500 px-10 py-2 m-5 rounded-lg"> Klik Saya </button>
//     )
// }

// function BackgroundColors(){
//     return(
//         <div className="bg-blue-800 text-white p-6 m-5 rounded-lg shadow-lg">
//             <h3 className="text-xl font-bold">Tailwind Colors</h3>
//             <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
//         </div>
//     )
// }

// function ShadowEffects(){
//     return (
//         <div className="bg-white shadow-lg p-10 rounded-lg hover:shadow-2xl transition">
//             <h3 className="text-xl font-semibold">Hover me!</h3>
//             <p className="text-blue-600 mt-2">Lihat efek bayangan saat hover.</p>
//         </div>
//     )
// }


import { useState } from "react";
 
// ─── NAV ────────────────────────────────────────────────────────────────────
function FlexboxGrid() {
  const [active, setActive] = useState("Home");
  const links = ["Home", "About", "Contact"];
 
  return (
    <nav className="flex justify-between items-center bg-green-700 px-10 py-0 h-16 sticky top-0 z-50">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-white bg-opacity-20 flex items-center justify-center text-white font-medium text-sm">
          M
        </div>
        <span className="text-white font-medium text-base tracking-tight">
        PrisonBreak
        </span>
      </div>
 
      {/* Links */}
      <ul className="flex gap-1">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActive(link);
              }}
              className={`text-sm px-4 py-2 rounded-md transition-all ${
                active === link
                  ? "bg-white bg-opacity-20 text-white"
                  : "text-white text-opacity-80 hover:bg-white hover:bg-opacity-10 hover:text-white"
              }`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
 
// ─── SEARCH INPUT + BUTTON ───────────────────────────────────────────────────
function SearchSection() {
  const [value, setValue] = useState("");
 
  return (
    <div className="flex flex-col gap-4">
      <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
        Search
      </span>
 
      {/* Input with icon */}
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Belajar Tailwind CSS..."
          className="w-full px-5 py-3.5 pr-12 border border-gray-200 rounded-xl text-sm
                     focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100
                     bg-white text-gray-800 placeholder-gray-400 transition-all"
        />
        <svg
          className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <circle cx="9" cy="9" r="5.5" />
          <path d="M13.5 13.5L17 17" strokeLinecap="round" />
        </svg>
      </div>
 
      <div className="flex items-center gap-3">
        <button
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 active:scale-95
                     text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-all"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path d="M2 7.5h11M9 3l4 4.5-4 4.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Click Me
        </button>
        <span className="text-xs text-gray-400">Tekan Enter atau klik untuk mencari</span>
      </div>
    </div>
  );
}
 
// ─── CARD GRID ───────────────────────────────────────────────────────────────
function Spacing() {
  return (
    <div className="bg-green-50 border border-green-200 rounded-2xl p-6 flex flex-col gap-3">
      <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full w-fit">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
        Spacing
      </span>
      <h2 className="text-base font-medium text-green-900">Card Title</h2>
      <p className="text-sm text-green-700 leading-relaxed">
        Ini adalah contoh penggunaan padding dan margin di Tailwind — lebih rapi, lebih terstruktur.
      </p>
    </div>
  );
}
 
function Typography() {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 flex flex-col gap-3">
      <span className="text-xs font-medium text-amber-600 uppercase tracking-widest">
        Typography
      </span>
      <h1 className="text-2xl font-medium text-blue-900 leading-tight">
        Tailwind Typography
      </h1>
      <p className="text-sm text-gray-600 leading-relaxed">
        Belajar Tailwind sangat menyenangkan dan cepat!
      </p>
      <div className="flex gap-5 mt-1">
        {[["4.8", "Rating"], ["12k", "Learners"], ["100%", "Free"]].map(([val, lbl]) => (
          <div key={lbl} className="flex flex-col gap-0.5">
            <span className="text-lg font-medium text-blue-900">{val}</span>
            <span className="text-xs text-gray-400">{lbl}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
 
// ─── BUTTON SHOWCASE ─────────────────────────────────────────────────────────
function BorderRadius() {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">
        Border radius & buttons
      </span>
      <div className="flex flex-wrap items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl p-5">
        <button
          className="inline-flex items-center gap-2 border-2 border-blue-500 text-blue-600 text-sm
                     px-5 py-2 rounded-lg bg-transparent hover:bg-blue-50 transition-all"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.5}>
            <circle cx="7" cy="7" r="5.5" />
            <path d="M7 4.5v3l2 1.5" strokeLinecap="round" />
          </svg>
          Klik Saya
        </button>
 
        <button className="text-sm text-gray-500 px-5 py-2 border border-gray-200 rounded-lg hover:bg-gray-100 transition-all">
          Secondary
        </button>
 
        <button className="text-sm text-white bg-red-500 hover:bg-red-600 px-5 py-2 rounded-lg transition-all">
          Delete
        </button>
 
        <button className="text-sm text-white bg-green-600 hover:bg-green-700 px-5 py-2 rounded-lg transition-all">
          Submit
        </button>
      </div>
    </div>
  );
}
 
// ─── BACKGROUND COLORS ───────────────────────────────────────────────────────
function BackgroundColors() {
  const swatches = [
    "#EF4444", "#F97316", "#EAB308", "#22C55E", "#3B82F6", "#A855F7",
  ];
 
  return (
    <div className="bg-blue-700 text-white rounded-2xl p-7 flex justify-between items-center gap-6">
      <div className="flex flex-col gap-2">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-white bg-opacity-15 text-white px-3 py-1 rounded-full w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          Tailwind Colors
        </span>
        <h3 className="text-xl font-medium">Belajar Tailwind itu seru dan fleksibel!</h3>
        <p className="text-sm text-blue-200 leading-relaxed max-w-sm">
          Eksplorasi palet warna yang kaya untuk membuat UI yang menarik dan profesional.
        </p>
      </div>
      <div className="flex flex-col gap-2 shrink-0">
        <div className="flex gap-2">
          {swatches.slice(0, 3).map((c) => (
            <div
              key={c}
              style={{ background: c }}
              className="w-8 h-8 rounded-lg border-2 border-white border-opacity-20 hover:scale-110 transition-transform cursor-pointer"
            />
          ))}
        </div>
        <div className="flex gap-2">
          {swatches.slice(3).map((c) => (
            <div
              key={c}
              style={{ background: c }}
              className="w-8 h-8 rounded-lg border-2 border-white border-opacity-20 hover:scale-110 transition-transform cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
 
// ─── SHADOW HOVER ────────────────────────────────────────────────────────────
function ShadowEffects() {
  return (
    <div
      className="bg-white border border-gray-100 rounded-2xl p-7 flex items-center justify-between
                 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-medium text-gray-900">Hover me!</h3>
        <p className="text-sm text-blue-500">Lihat efek bayangan saat hover — smooth dan elegan.</p>
      </div>
      <div className="w-11 h-11 bg-green-50 border border-green-200 rounded-xl flex items-center justify-center shrink-0">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#16A34A" strokeWidth={1.5}>
          <path d="M10 2v3M10 15v3M4 4l2 2M14 14l2 2M2 10h3M15 10h3M4 16l2-2M14 6l2-2" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
 
// ─── FOOTER ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-4 px-10 py-6 flex justify-between items-center max-w-4xl mx-auto w-full">
      <span className="text-xs text-gray-400">© 2025 PrisonBreak — Built with Tailwind CSS</span>
      <div className="flex gap-5">
        {["Docs", "GitHub", "Privacy"].map((l) => (
          <a key={l} href="#" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}
 
// ─── PAGE ROOT ───────────────────────────────────────────────────────────────
export default function TailwindCSS() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <FlexboxGrid />
 
      <main className="max-w-4xl mx-auto px-10 py-12 flex flex-col gap-10">
        <SearchSection />
 
        {/* Card row */}
        <div className="grid grid-cols-2 gap-5">
          <Spacing />
          <Typography />
        </div>
 
        <BorderRadius />
        <BackgroundColors />
        <ShadowEffects />
      </main>
 
      <Footer />
    </div>
  );
}