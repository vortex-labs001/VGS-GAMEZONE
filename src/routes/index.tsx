import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Monitor,
  Gamepad2,
  Users,
  Wind,
  MapPin,
  Phone,
  Clock,
  Instagram,
  Mail,
  Menu,
  X,
  Star,
  MessageCircle,
  Facebook,
} from "lucide-react";

// ============================================================
// SITE CONFIG — Circle E-Sports, College Road, Nashik
// ============================================================
const SITE = {
  brandShort: "CIRCLE",
  brand: "Circle E-Sports",
  headlineTop: "CIRCLE",
  headlineBottom: "E-SPORTS",
  tagline:
    "PCs • PS5 • Private Group Rooms — classy gaming gear in a chilled, air-conditioned space on College Road, Nashik.",
  phoneDisplay: "080103 22683",
  whatsapp: "918010322683",
  whatsappMsg: "Hi! I want to book a gaming session at Circle E-Sports",
  email: "circleesports@gmail.com",
  instagram: "https://instagram.com/circleesports",
  facebook: "https://www.facebook.com/circleesports/",
  address:
    "Smita Apartment No. 2, Patil Lane No. 1, College Road, Nashik, Maharashtra 422005",
  hours: "Open daily · Closes 9:30 PM",
  rating: "4.7",
  reviews: "343+",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Circle+E-Sports+College+Road+Nashik",
  mapsEmbed:
    "https://www.google.com/maps?q=Smita+Apartment+Patil+Lane+College+Road+Nashik+422005&output=embed",
};

// Accent palette — teal (#14B8A6) → deep violet (#6D28D9), distinct from
// every other cafe in this portfolio (orange/violet, cyan/purple, pink-red,
// neon-green, electric-purple/gold, coral-red, green/cyan, blue/magenta,
// crimson/bronze, amber/indigo).
const ACCENT_PRIMARY = "#14B8A6";
const ACCENT_SECONDARY = "#6D28D9";

const ZONES = [
  {
    icon: Monitor,
    title: "Classy Gaming PCs",
    desc: "High-quality rigs at good prices — reviewers consistently call out the value and gear quality.",
  },
  {
    icon: Gamepad2,
    title: "PS5 Available",
    desc: "Full PS5 setups alongside PC gaming, so the whole squad has options.",
  },
  {
    icon: Users,
    title: "Private Group Rooms",
    desc: "Book a private room to play with your group — a standout feature reviewers love.",
  },
  {
    icon: Wind,
    title: "Chilled, AC Comfort",
    desc: "A genuinely cool, comfortable space to game in, with helpful and humble staff.",
  },
];

const PRICING = {
  pc: [
    { duration: "1 Hour", price: "₹50" },
    { duration: "3 Hours", price: "₹130" },
    { duration: "5 Hours", price: "₹200" },
  ],
  console: [
    { duration: "1 Hour", price: "₹70" },
    { duration: "3 Hours", price: "₹180" },
    { duration: "5 Hours", price: "₹280" },
  ],
};

const REVIEWS = [
  {
    text: "Helpful staff, good PCs, good prices.",
    author: "Google Review",
  },
  {
    text: "Best place for gaming — classy gadgets, chilled place and humble staff.",
    author: "Google Review",
  },
  {
    text: "The best available in the market. PS5 is also available, and they provide private rooms for players to play with their group. The air conditioner is good too.",
    author: "Google Review",
  },
];

// ============================================================
// ROUTE
// ============================================================
export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Circle E-Sports — Gaming Café on College Road, Nashik" },
      {
        name: "description",
        content:
          "Top-rated gaming café on College Road, Nashik. Classy PCs, PS5, and private group rooms in a chilled, AC space. 4.7★ rated, 343+ reviews. Book on WhatsApp.",
      },
      { property: "og:title", content: "Circle E-Sports — College Road, Nashik" },
      {
        property: "og:description",
        content:
          "Classy PCs, PS5, and private group rooms. Book a gaming session today.",
      },
    ],
  }),
});

function whatsappUrl(msg = SITE.whatsappMsg) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
}

// ============================================================
// PAGE
// ============================================================
function HomePage() {
  const prefersReducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [pricingTab, setPricingTab] = useState<"pc" | "console">("pc");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      style={{
        // @ts-expect-error custom props
        "--accent": ACCENT_PRIMARY,
        "--accent2": ACCENT_SECONDARY,
        background: "#0A0A0F",
        color: "#F5F5F7",
        minHeight: "100vh",
        fontFamily: "'Inter', system-ui, sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* ===================== RESPONSIVE STYLES ===================== */}
      <style>{`
        * { box-sizing: border-box; }
        .desktop-nav { display: flex; }
        .mobile-menu-btn { display: none; }
        .nav-book-btn { display: flex; }
        .mobile-nav-panel { display: none; }
        .location-grid { grid-template-columns: 1fr 1fr; }

        @media (max-width: 860px) {
          .desktop-nav { display: none; }
          .mobile-menu-btn { display: flex !important; }
          .nav-book-btn span { display: none; }
          .nav-book-btn { padding: 10px 14px !important; }
          .location-grid { grid-template-columns: 1fr !important; }
          .hero-cta-row { flex-direction: column; align-items: stretch; }
          .hero-cta-row a { width: 100%; text-align: center; justify-content: center; }
        }

        @media (max-width: 480px) {
          .stat-pill-row { gap: 10px !important; }
        }

        .mobile-nav-panel.open {
          display: flex;
        }
      `}</style>

      {/* ===================== NAV ===================== */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled || menuOpen ? "rgba(10,10,15,0.96)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(12px)" : "none",
          borderBottom: scrolled || menuOpen ? "1px solid rgba(20,184,166,0.2)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div style={{ fontWeight: 900, fontSize: 20, letterSpacing: 1, flexShrink: 0 }}>
            <span style={{ color: ACCENT_PRIMARY }}>CIRCLE</span>
            <span style={{ color: "#fff" }}> E-SPORTS</span>
          </div>

          <nav
            className="desktop-nav"
            style={{ gap: 28, fontSize: 14, fontWeight: 600, flex: 1, justifyContent: "center" }}
          >
            {["About", "Zones", "Pricing", "Reviews", "Location"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{ color: "#ddd", textDecoration: "none" }}
              >
                {item}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="nav-book-btn"
              style={{
                background: `linear-gradient(90deg, ${ACCENT_PRIMARY}, ${ACCENT_SECONDARY})`,
                color: "#fff",
                padding: "10px 20px",
                borderRadius: 999,
                fontWeight: 800,
                fontSize: 13,
                textDecoration: "none",
                alignItems: "center",
                gap: 6,
                whiteSpace: "nowrap",
              }}
            >
              <MessageCircle size={16} /> <span>BOOK NOW</span>
            </a>

            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="mobile-menu-btn"
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                padding: 4,
                cursor: "pointer",
              }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown nav */}
        <div
          className={`mobile-nav-panel ${menuOpen ? "open" : ""}`}
          style={{
            flexDirection: "column",
            padding: menuOpen ? "8px 20px 20px" : 0,
            gap: 4,
            background: "rgba(10,10,15,0.98)",
            borderBottom: menuOpen ? "1px solid rgba(255,255,255,0.08)" : "none",
          }}
        >
          {["About", "Zones", "Pricing", "Reviews", "Location"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#ddd",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 600,
                padding: "12px 8px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </header>

      {/* ===================== HERO ===================== */}
      <section
        style={{
          paddingTop: 120,
          paddingBottom: 70,
          paddingLeft: 16,
          paddingRight: 16,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 50% 0%, ${ACCENT_PRIMARY}22, transparent 60%)`,
            pointerEvents: "none",
          }}
        />
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(20,184,166,0.1)",
              border: `1px solid ${ACCENT_PRIMARY}55`,
              borderRadius: 999,
              padding: "6px 16px",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1,
              marginBottom: 24,
              color: ACCENT_PRIMARY,
            }}
          >
            <Star size={14} fill={ACCENT_PRIMARY} /> COLLEGE ROAD'S CLASSIEST GAMING SPOT
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 9vw, 96px)",
              fontWeight: 900,
              lineHeight: 0.95,
              margin: 0,
            }}
          >
            <span style={{ color: "#fff" }}>{SITE.headlineTop}</span>
            <br />
            <span
              style={{
                background: `linear-gradient(90deg, ${ACCENT_PRIMARY}, ${ACCENT_SECONDARY})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {SITE.headlineBottom}
            </span>
          </h1>

          <p
            style={{
              maxWidth: 600,
              margin: "24px auto 36px",
              fontSize: 17,
              color: "#bbb",
              lineHeight: 1.6,
            }}
          >
            {SITE.tagline}
          </p>

          <div className="hero-cta-row" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              style={{
                background: `linear-gradient(90deg, ${ACCENT_PRIMARY}, ${ACCENT_SECONDARY})`,
                color: "#fff",
                padding: "16px 32px",
                borderRadius: 999,
                fontWeight: 800,
                fontSize: 15,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <MessageCircle size={18} /> Book a Session on WhatsApp
            </a>
            <a
              href="#pricing"
              style={{
                border: "1px solid #444",
                color: "#fff",
                padding: "16px 32px",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
              }}
            >
              View Pricing
            </a>
          </div>

          <div
            className="stat-pill-row"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 24,
              marginTop: 48,
              flexWrap: "wrap",
            }}
          >
            {[
              { label: `${SITE.rating}★ Google Rating` },
              { label: `${SITE.reviews} Reviews` },
              { label: "Open till 9:30 PM" },
              { label: "Private Group Rooms" },
            ].map((s) => (
              <div
                key={s.label}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 999,
                  padding: "8px 18px",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#ddd",
                }}
              >
                {s.label}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <section id="about" style={{ padding: "70px 16px", maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 12 }}>
            Classy Gear, Chilled Vibes
          </h2>
          <p style={{ color: "#aaa", maxWidth: 560, margin: "0 auto" }}>
            Circle E-Sports brings together quality PCs, PS5 consoles, and private group rooms in
            a cool, air-conditioned space on College Road — with humble, helpful staff who keep
            it classy.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 20,
          }}
        >
          {[
            { stat: "4.7★", label: "Google Rating" },
            { stat: "343+", label: "Happy Reviewers" },
            { stat: "Private", label: "Group Rooms Available" },
          ].map((c) => (
            <motion.div
              key={c.label}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "28px 20px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 900, color: ACCENT_PRIMARY }}>{c.stat}</div>
              <div style={{ fontSize: 13, color: "#999", marginTop: 6 }}>{c.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== ZONES ===================== */}
      <section id="zones" style={{ padding: "50px 16px", maxWidth: 1100, margin: "0 auto" }}>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ fontSize: 30, fontWeight: 900, textAlign: "center", marginBottom: 40 }}
        >
          Our Gaming Zones
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 20,
          }}
        >
          {ZONES.map((z) => (
            <motion.div
              key={z.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: 24,
              }}
            >
              <z.icon size={28} color={ACCENT_PRIMARY} />
              <h3 style={{ fontSize: 18, fontWeight: 800, margin: "14px 0 8px" }}>{z.title}</h3>
              <p style={{ fontSize: 14, color: "#aaa", lineHeight: 1.5 }}>{z.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== PRICING ===================== */}
      <section id="pricing" style={{ padding: "50px 16px", maxWidth: 800, margin: "0 auto" }}>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ fontSize: 30, fontWeight: 900, textAlign: "center", marginBottom: 8 }}
        >
          Pricing
        </motion.h2>
        <p style={{ textAlign: "center", color: "#999", fontSize: 13, marginBottom: 32 }}>
          Good prices for good gear, starting from ₹50/hour. Prices indicative — contact us for current rates.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
          {(["pc", "console"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setPricingTab(tab)}
              style={{
                padding: "10px 24px",
                borderRadius: 999,
                border: "none",
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                background:
                  pricingTab === tab
                    ? `linear-gradient(90deg, ${ACCENT_PRIMARY}, ${ACCENT_SECONDARY})`
                    : "rgba(255,255,255,0.08)",
                color: "#fff",
              }}
            >
              {tab === "pc" ? "PC Gaming" : "Console (PS5)"}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: 16,
          }}
        >
          {PRICING[pricingTab].map((p) => (
            <div
              key={p.duration}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: 24,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 13, color: "#999", marginBottom: 8 }}>{p.duration}</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: ACCENT_PRIMARY }}>{p.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== REVIEWS ===================== */}
      <section id="reviews" style={{ padding: "50px 16px", maxWidth: 1100, margin: "0 auto" }}>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ fontSize: 30, fontWeight: 900, textAlign: "center", marginBottom: 40 }}
        >
          What Gamers Say
        </motion.h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {REVIEWS.map((r, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: 24,
              }}
            >
              <div style={{ display: "flex", gap: 2, marginBottom: 12 }}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={14} fill={ACCENT_PRIMARY} color={ACCENT_PRIMARY} />
                ))}
              </div>
              <p style={{ fontSize: 14, color: "#ddd", lineHeight: 1.6, fontStyle: "italic" }}>
                "{r.text}"
              </p>
              <div style={{ fontSize: 12, color: "#888", marginTop: 12 }}>— {r.author}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===================== LOCATION ===================== */}
      <section id="location" style={{ padding: "50px 16px", maxWidth: 1100, margin: "0 auto" }}>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ fontSize: 30, fontWeight: 900, textAlign: "center", marginBottom: 32 }}
        >
          Find Us
        </motion.h2>

        <div
          style={{
            display: "grid",
            gap: 24,
          }}
          className="location-grid"
        >
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: 28,
            }}
          >
            <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
              <MapPin size={20} color={ACCENT_PRIMARY} />
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Address</div>
                <div style={{ fontSize: 14, color: "#bbb" }}>{SITE.address}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
              <Clock size={20} color={ACCENT_PRIMARY} />
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Hours</div>
                <div style={{ fontSize: 14, color: "#bbb" }}>{SITE.hours}</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginBottom: 18 }}>
              <Phone size={20} color={ACCENT_PRIMARY} />
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Phone</div>
                <a href={`tel:${SITE.phoneDisplay}`} style={{ fontSize: 14, color: "#bbb" }}>
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>
            <a
              href={SITE.mapsLink}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: 8,
                background: `linear-gradient(90deg, ${ACCENT_PRIMARY}, ${ACCENT_SECONDARY})`,
                color: "#fff",
                padding: "12px 24px",
                borderRadius: 999,
                fontWeight: 700,
                fontSize: 13,
                textDecoration: "none",
              }}
            >
              Get Directions
            </a>
          </div>

          <iframe
            src={SITE.mapsEmbed}
            style={{ width: "100%", height: "100%", minHeight: 280, border: 0, borderRadius: 16 }}
            loading="lazy"
            title="Circle E-Sports Map"
          />
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer
        style={{
          padding: "40px 16px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          textAlign: "center",
        }}
      >
        <div style={{ fontWeight: 900, fontSize: 18, marginBottom: 16 }}>
          <span style={{ color: ACCENT_PRIMARY }}>CIRCLE</span> E-SPORTS
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 20 }}>
          <SocialBtn href={SITE.instagram} icon={Instagram} />
          <SocialBtn href={SITE.facebook} icon={Facebook} />
          <SocialBtn href={`mailto:${SITE.email}`} icon={Mail} />
        </div>

        <p style={{ fontSize: 12, color: "#777" }}>
          © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
        </p>
        <p style={{ fontSize: 11, color: "#555", marginTop: 6 }}>
          Made with ⚡ by Vortex Labs
        </p>
      </footer>
    </div>
  );
}

function SocialBtn({ href, icon: Icon }: { href: string; icon: typeof Instagram }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        width: 38,
        height: 38,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
      }}
    >
      <Icon size={16} />
    </a>
  );
}
