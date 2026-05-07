import { useNavigate } from "react-router-dom";

// ─── Config per error code ────────────────────────────────────────────────────

const ERROR_CONFIG = {
  400: {
    badge:      "Bad request",
    description: "The server couldn't process your request due to invalid syntax or malformed input.",
    accentColor: "#378ADD",
    illusBg:    "bg-blue-50",
    iconColor:  "text-blue-800",
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  401: {
    badge:      "Unauthorized",
    description: "Authentication is required. Please sign in to continue accessing this resource.",
    accentColor: "#BA7517",
    illusBg:    "bg-amber-50",
    iconColor:  "text-amber-900",
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  403: {
    badge:      "Access forbidden",
    description: "You don't have permission to view this page. Contact your administrator if you believe this is an error.",
    accentColor: "#E24B4A",
    illusBg:    "bg-red-50",
    iconColor:  "text-red-800",
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <circle cx="12" cy="12" r="10" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
  },
  404: {
    badge:      "Page not found",
    description: "The page you're looking for doesn't exist or has been moved to another address.",
    accentColor: "#00b074",
    illusBg:    "bg-green-50",
    iconColor:  "text-green-800",
    Icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
};

const FALLBACK_CONFIG = {
  badge:      "Unexpected error",
  description: "Something went wrong on our end. Please try again later.",
  accentColor: "#888780",
  illusBg:    "bg-gray-100",
  iconColor:  "text-gray-600",
  Icon: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
};

// ─── Back Arrow Icon ──────────────────────────────────────────────────────────

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M19 12H5" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

// ─── ErrorPage ────────────────────────────────────────────────────────────────

export default function ErrorPage({ code, description, image }) {
  const navigate = useNavigate();

  const config      = ERROR_CONFIG[code] ?? FALLBACK_CONFIG;
  const { badge, illusBg, iconColor, accentColor, Icon } = config;
  const finalDescription = description ?? config.description;

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 bg-gray-50">
      <div className="w-full max-w-sm text-center bg-white rounded-2xl border border-gray-100 shadow-[0_1px_8px_rgba(0,0,0,0.06)] px-10 py-12">

        {/* Illustration */}
        <div className={`w-[108px] h-[108px] rounded-full ${illusBg} flex items-center justify-center mx-auto mb-7 ${iconColor}`}>
          {image
            ? <img src={image} alt={`Error ${code}`} className="w-14 h-14 object-contain" />
            : <Icon />
          }
        </div>

        {/* Badge */}
        <span
          className="inline-block text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4"
          style={{ background: `${accentColor}18`, color: accentColor }}
        >
          {badge}
        </span>

        {/* Error code */}
        <h1 className="text-[76px] font-black text-gray-800 leading-none tracking-[-4px] mb-3">
          {code}
        </h1>

        {/* Accent divider */}
        <div
          className="w-10 h-[3px] rounded-full mx-auto mb-4"
          style={{ background: accentColor }}
        />

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-8 max-w-[280px] mx-auto">
          {finalDescription}
        </p>

        {/* CTA button */}
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-white text-[13px] font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:brightness-90 active:scale-[0.98] border-none cursor-pointer"
          style={{ background: accentColor }}
        >
          <ArrowLeftIcon />
          Back to dashboard
        </button>

        {/* Support hint */}
        <p className="text-[11px] text-gray-400 mt-5">
          If you think this is a mistake, please{" "}
          <span className="underline underline-offset-2 cursor-pointer" style={{ color: accentColor }}>
            contact support
          </span>
          .
        </p>

      </div>
    </div>
  );
}