import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Monitor, Gamepad2, Trophy, Crosshair, MapPin, Phone, Clock,
  Instagram, Youtube, Facebook, Linkedin, Menu, X, Star, MessageCircle, Utensils,
} from "lucide-react";

// ============================================================================
// SITE CONFIG
// ============================================================================
const SITE = {
  brandShort: "AIM",
  brand: "Aim Gaming Cafe",
  headlineTop: "AIM",
  headlineBottom: "GAMING",
  tagline: "PC • PS5 • Simulators • Pool Tables • Food & Drinks — Mumbai's largest gaming cafe.",
  phoneDisplay: "085911 63040",
  whatsapp: "918591163040",
  whatsappMsg: "Hi! I want to book a gaming session at Aim Gaming Cafe",
  email: "aimgamingcafe@gmail.com",
  instagram: "https://instagram.com/aimgamingcafe",
  facebook: "https://facebook.com/aimgamingmumbai",
  youtube: "https://www.youtube.com/channel/UCZK4YftyCZXm6qHJ1NgMy8w",
  linkedin: "https://in.linkedin.com/company/aim-gaming",
  address:
    "Auto Commerce House, next to Kennedy Bridge, Jyoti Studio Compound, Nana Chowk, Mumbai, Maharashtra 400007",
  hours: "Open 24 hours",
  rating: "4.4",
  reviews: "315+",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Aim+Gaming+Cafe+Kennedy+Bridge+Nana+Chowk+Mumbai",
  mapsEmbed:
    "https://www.google.com/maps?q=Auto+Commerce+House+Kennedy+Bridge+Nana+Chowk+Mumbai+400007&output=embed",
};

const ZONES = [
  {
    name: "High-End PCs",
    tag: "Most Popular",
    desc: "Powered by the latest NVIDIA 30-series GPUs. Buttery-smooth frames on every title.",
    icon: Monitor,
    accent: "#00E5FF",
  },
  {
    name: "PS5 Zone",
    tag: "Console",
    desc: "Your favourite PS5 titles on big screens. Grab a controller and get into it.",
    icon: Gamepad2,
    accent: "#8B5CF6",
  },
  {
    name: "Racing Simulators",
    tag: "Adrenaline",
    desc: "Full-motion racing rigs — feel every hairpin, every kerb, every overtake.",
    icon: Crosshair,
    accent: "#FF006E",
  },
  {
    name: "Pool Tables",
    tag: "Chill Zone",
    desc: "Take a break from the screen. Challenge your squad to a round on our full-size pool tables.",
    icon: Trophy,
    accent: "#00E5FF",
  },
  {
    name: "Snacks & Beverages",
    tag: "Fuel Up",
    desc: "Lip-smacking snacks and drinks to keep you going through those late-night sessions.",
    icon: Utensils,
    accent: "#8B5CF6",
  },
];

const PRICING_TABS: { id: string; label: string; rate: number }[] = [
  { id: "pc", label: "PC", rate: 40 },
  { id: "ps5", label: "PS5", rate: 60 },
  { id: "simulator", label: "Simulator", rate: 80 },
];

const TIERS = [
  { hours: 1, badge: "Quick Play" },
  { hours: 2, badge: "Starter" },
  { hours: 4, badge: "Best Value", featured: true },
  { hours: 5, badge: "Marathon" },
];

const REVIEWS = [
  {
    text: "Excellent staff and the food is also delicious! Great work, keep it up.",
    author: "Google Review",
  },
  {
    text: "Great internet and gaming cafe with great prices and options. Worth every rupee.",
    author: "Google Review",
  },
  {
    text: "Mumbai's largest gaming cafe lives up to the hype — massive setup and solid machines.",
    author: "Google Review",
  },
];

// ============================================================================

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aim Gaming Cafe — Mumbai's Largest Gaming Cafe | PC, PS5, Simulators & Pool" },
      {
        name: "description",
        content:
          "Mumbai's largest gaming cafe at Nana Chowk. NVIDIA 30-series PCs, PS5, racing simulators, pool tables and food. Open 24 hours. Book on WhatsApp.",
      },
      { property: "og:title", content: "Aim Gaming Cafe — Nana Chowk, Mumbai" },
      {
        property: "og:description",
        content: "PC • PS5 • Simulators • Pool Tables • Snacks. Open 24 hours.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div
      className="relative min-h-screen text-white overflow-x-hidden"
      style={{ background: "#0A0A0E" }}
    >
      <div className="pointer-events-none fixed inset-0 bg-grid-neon" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(255,0,110,0.08), transparent 55%), radial-gradient(ellipse at 80% 100%, rgba(0,229,255,0.10), transparent 55%)",
        }}
      />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <About />
        <Zones />
        <Reviews />
        <Pricing />
        <Location />
        <Footer />
        <WhatsAppFAB />
      </div>
    </div>
  );
}

// ============================================================================
// NAV
// ============================================================================

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Zones", href: "#zones" },
  { label: "Pricing", href: "#pricing" },
  { label: "Location", href: "#location" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-2.5" : "py-4"}`}
      style={
        scrolled
          ? {
              background: "rgba(10,10,14,0.75)",
              backdropFilter: "blur(14px) saturate(140%)",
              borderBottom: "1px solid rgba(255,0,110,0.15)",
            }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <span
            className="grid place-items-center w-9 h-9 rounded-lg font-display font-black text-sm tracking-widest"
            style={{ background: "linear-gradient(135deg,#FF006E,#8B5CF6)", color: "#0A0A0E" }}
          >
            AIM
          </span>
          <span className="hidden sm:inline font-display font-bold tracking-wider text-sm">
            {SITE.brand}
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-xs tracking-widest text-white/70 hover:text-white transition-colors"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMsg)}`}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 rounded-full font-display font-bold text-xs tracking-widest transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(135deg,#FF006E,#8B5CF6)",
              color: "#fff",
              boxShadow: "0 0 20px rgba(255,0,110,0.35)",
            }}
          >
            BOOK NOW
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <nav
          className="md:hidden mx-5 mt-3 p-4 flex flex-col gap-2 animate-fade-in rounded-xl"
          style={{
            background: "rgba(10,10,14,0.95)",
            border: "1px solid rgba(255,0,110,0.2)",
            backdropFilter: "blur(14px)",
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-lg font-display text-sm tracking-widest text-white/80 hover:bg-white/5"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMsg)}`}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-1 px-4 py-2 rounded-full text-center font-display font-bold text-xs tracking-widest transition-all"
            style={{ background: "linear-gradient(135deg,#FF006E,#8B5CF6)", color: "#fff" }}
          >
            BOOK NOW
          </a>
        </nav>
      )}
    </header>
  );
}

// ============================================================================
// HERO
// ============================================================================

function Hero() {
  const reduce = useReducedMotion();
  const fadeUp = (i: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-5">
      <div className="relative w-full max-w-5xl text-center">
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7"
          style={{ border: "1px solid rgba(255,0,110,0.4)", background: "rgba(255,0,110,0.06)" }}
        >
          <span className="relative w-2 h-2 rounded-full" style={{ background: "#FF006E" }}>
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{ background: "#FF006E", opacity: 0.6 }}
            />
          </span>
          <span
            className="font-display font-bold text-[10px] sm:text-xs tracking-[0.2em]"
            style={{ color: "#FF006E" }}
          >
            MUMBAI'S LARGEST GAMING CAFE · OPEN 24 HRS
          </span>
        </motion.div>

        <motion.h1
          {...fadeUp(1)}
          className="font-display font-black leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(3rem, 9vw, 6rem)" }}
        >
          <span className="block">{SITE.headlineTop}</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg,#FF006E,#8B5CF6,#00E5FF)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {SITE.headlineBottom}
          </span>
        </motion.h1>

        <motion.p
          {...fadeUp(2)}
          className="mt-7 text-base sm:text-lg max-w-2xl mx-auto text-white/70"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          {SITE.tagline}
        </motion.p>

        <motion.div
          {...fadeUp(3)}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMsg)}`}
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3.5 rounded-full font-display font-bold text-sm tracking-widest transition-all hover:opacity-90"
            style={{
              background: "linear-gradient(135deg,#FF006E,#8B5CF6)",
              color: "#fff",
              boxShadow: "0 0 28px rgba(255,0,110,0.4)",
            }}
          >
            BOOK A SESSION
          </a>
          <a
            href="#pricing"
            className="px-7 py-3.5 rounded-full font-display font-bold text-sm tracking-widest text-white/90 hover:text-white transition-colors"
            style={{ border: "1px solid rgba(255,0,110,0.4)" }}
          >
            VIEW PRICING
          </a>
        </motion.div>

        <motion.div
          {...fadeUp(4)}
          className="mt-14 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {[
            { label: `${SITE.rating}★ Google Rating` },
            { label: `${SITE.reviews} Reviews` },
            { label: "Open 24 Hours" },
            { label: "NVIDIA 30-Series PCs" },
          ].map((s, i) => (
            <div
              key={s.label}
              className="px-4 py-2.5 rounded-lg animate-float-y"
              style={{
                animationDelay: `${i * 0.6}s`,
                fontFamily: "Rajdhani, sans-serif",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,0,110,0.2)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="font-semibold text-xs sm:text-sm tracking-wider">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// ABOUT
// ============================================================================

function About() {
  return (
    <section id="about" className="py-24 sm:py-28 px-5">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          eyebrow="WHO WE ARE"
          title="LOCK IN. LEVEL UP."
          subtitle="The perfect spot to chill with your squad in Mumbai — day or night."
        />
        <div className="mt-14 grid sm:grid-cols-3 gap-5">
          {[
            {
              stat: "#1",
              label: "Mumbai's Largest",
              desc: "Aim Gaming is Mumbai's largest gaming cafe — built for squads, marathons, and serious players who demand the best hardware.",
              accent: "#FF006E",
            },
            {
              stat: "24H",
              label: "Always Open",
              desc: "No curfew. No closing time. Whether it's 3 PM or 3 AM, we're set up and ready for your next session.",
              accent: "#8B5CF6",
            },
            {
              stat: "4.4★",
              label: "315+ Reviews",
              desc: "Rated 4.4 stars on Google. Great prices, fast machines, and a vibe that keeps the community coming back.",
              accent: "#00E5FF",
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-7 rounded-xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: item.accent }}
              />
              <div
                className="font-black text-5xl"
                style={{ color: item.accent, fontFamily: "Rajdhani, sans-serif" }}
              >
                {item.stat}
              </div>
              <div className="mt-1 font-display font-bold text-sm tracking-widest text-white/80">
                {item.label.toUpperCase()}
              </div>
              <p className="mt-4 text-sm text-white/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// ZONES
// ============================================================================

function Zones() {
  return (
    <section id="zones" className="py-24 sm:py-28 px-5">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          eyebrow="WHAT WE OFFER"
          title="GAMING ZONES"
          subtitle="Five ways to spend your time here — pick your game."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ZONES.map((z, i) => (
            <motion.div
              key={z.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-6 sm:p-7 rounded-xl overflow-hidden transition-transform hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: z.accent }}
              />
              <div className="flex items-start justify-between gap-4">
                <div
                  className="grid place-items-center w-12 h-12 rounded-full"
                  style={{
                    background: `${z.accent}1a`,
                    border: `1px solid ${z.accent}55`,
                    boxShadow: `0 0 24px ${z.accent}33`,
                  }}
                >
                  <z.icon className="w-5 h-5" style={{ color: z.accent }} />
                </div>
                <span
                  className="px-2.5 py-1 rounded-full text-[10px] font-display font-bold tracking-widest"
                  style={{
                    color: z.accent,
                    border: `1px solid ${z.accent}55`,
                    background: `${z.accent}10`,
                  }}
                >
                  {z.tag.toUpperCase()}
                </span>
              </div>
              <h3 className="mt-6 font-display font-bold text-xl tracking-wide">{z.name}</h3>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">{z.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// REVIEWS
// ============================================================================

function Reviews() {
  return (
    <section className="py-24 sm:py-28 px-5">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          eyebrow="WHAT PLAYERS SAY"
          title="REAL REVIEWS"
          subtitle={`${SITE.rating}★ on Google · ${SITE.reviews} reviews`}
        />
        <div className="mt-14 grid sm:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl flex flex-col gap-4"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" style={{ color: "#FFD700" }} />
                ))}
              </div>
              <p className="text-sm text-white/75 leading-relaxed flex-1">"{r.text}"</p>
              <span className="text-[10px] font-display tracking-widest text-white/40">
                {r.author.toUpperCase()}
              </span>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a
            href={SITE.mapsLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block font-display text-xs tracking-widest text-white/50 hover:text-white transition-colors"
          >
            VIEW ALL REVIEWS ON GOOGLE →
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// PRICING
// ============================================================================

function Pricing() {
  const [tab, setTab] = useState("pc");
  const active = PRICING_TABS.find((t) => t.id === tab) ?? PRICING_TABS[0];
  return (
    <section id="pricing" className="py-24 sm:py-28 px-5">
      <div className="max-w-7xl mx-auto">
        <SectionHead
          eyebrow="PRICING"
          title="PRICING PLANS"
          subtitle="Great prices, no hidden charges. Just pure gaming."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {PRICING_TABS.map((t) => {
            const isActive = t.id === tab;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className="px-5 py-2.5 rounded-full font-display font-bold text-xs tracking-widest transition-all"
                style={
                  isActive
                    ? {
                        background: "linear-gradient(135deg,#FF006E,#8B5CF6)",
                        color: "#fff",
                        boxShadow: "0 0 24px rgba(255,0,110,0.35)",
                      }
                    : {
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,0,110,0.18)",
                        color: "rgba(255,255,255,0.8)",
                      }
                }
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 -mx-5 px-5 overflow-x-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 min-w-[640px] md:min-w-0">
            {TIERS.map((tier, i) => {
              const price = active.rate * tier.hours;
              const featured = !!tier.featured;
              return (
                <motion.div
                  key={tier.hours}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="relative p-6 rounded-xl"
                  style={
                    featured
                      ? {
                          border: "1px solid transparent",
                          backgroundImage:
                            "linear-gradient(rgba(10,10,14,0.85),rgba(10,10,14,0.85)), linear-gradient(135deg,#FF006E,#8B5CF6)",
                          backgroundOrigin: "border-box",
                          backgroundClip: "padding-box, border-box",
                          boxShadow:
                            "0 0 30px rgba(255,0,110,0.3), inset 0 0 24px rgba(139,92,246,0.1)",
                        }
                      : {
                          background: "rgba(255,255,255,0.03)",
                          backdropFilter: "blur(12px)",
                          border: "1px solid rgba(255,255,255,0.07)",
                        }
                  }
                >
                  {featured && (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full font-display font-bold text-[10px] tracking-widest whitespace-nowrap"
                      style={{
                        background: "linear-gradient(135deg,#FF006E,#8B5CF6)",
                        color: "#fff",
                      }}
                    >
                      BEST VALUE
                    </span>
                  )}
                  <div className="text-[10px] font-display tracking-widest text-white/50">
                    {tier.badge.toUpperCase()}
                  </div>
                  <div className="mt-2 font-display font-bold text-lg">
                    {tier.hours} {tier.hours === 1 ? "Hour" : "Hours"}
                  </div>
                  <div className="mt-5" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                    <span
                      className="font-bold text-4xl sm:text-5xl"
                      style={{ color: "#FF006E" }}
                    >
                      ₹{price}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-white/55">
                    {active.label} · ₹{active.rate}/hr
                  </div>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                      `Hi! I want to book a ${tier.hours}hr ${active.label} session at Aim Gaming Cafe.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 block w-full text-center px-4 py-2.5 rounded-full font-display font-bold text-xs tracking-widest transition-transform hover:scale-[1.03]"
                    style={
                      featured
                        ? {
                            background: "linear-gradient(135deg,#FF006E,#8B5CF6)",
                            color: "#fff",
                            boxShadow: "0 0 20px rgba(255,0,110,0.4)",
                          }
                        : { border: "1px solid rgba(255,0,110,0.35)", color: "#fff" }
                    }
                  >
                    BOOK
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-white/40" style={{ fontFamily: "Rajdhani, sans-serif" }}>
          * Prices are indicative. Contact us on WhatsApp for current rates and offers.
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// LOCATION
// ============================================================================

function Location() {
  return (
    <section id="location" className="py-24 sm:py-28 px-5">
      <div className="max-w-7xl mx-auto">
        <SectionHead eyebrow="FIND US" title="LOCATION & BOOKING" subtitle="We're near Kennedy Bridge, Nana Chowk." />
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <motion.a
            href={SITE.mapsLink}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative block rounded-xl overflow-hidden h-[360px] lg:h-[480px]"
            style={{
              border: "2px solid rgba(255,0,110,0.3)",
              boxShadow: "0 0 32px rgba(255,0,110,0.15)",
            }}
          >
            <iframe
              title="Aim Gaming Cafe map"
              src={SITE.mapsEmbed}
              className="w-full h-full pointer-events-none"
              style={{
                filter: "invert(92%) hue-rotate(180deg) saturate(0.85) brightness(0.95)",
              }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div
              className="absolute top-4 left-4 px-3 py-2 flex items-center gap-2 rounded-lg"
              style={{
                background: "rgba(10,10,14,0.85)",
                border: "1px solid rgba(255,0,110,0.3)",
                backdropFilter: "blur(8px)",
              }}
            >
              <MapPin className="w-4 h-4" style={{ color: "#FF006E" }} />
              <span className="text-xs tracking-wider" style={{ fontFamily: "Rajdhani, sans-serif" }}>
                Click to open in Google Maps
              </span>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="p-7 sm:p-8 flex flex-col rounded-xl"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <h3 className="font-display font-black text-2xl sm:text-3xl tracking-wide">
              READY TO PLAY?
            </h3>
            <p className="mt-2 text-sm text-white/65">Walk in any time — we never close.</p>

            <div className="mt-7 space-y-4">
              <InfoRow icon={MapPin} label="Address" value={SITE.address} href={SITE.mapsLink} />
              <InfoRow
                icon={Phone}
                label="Phone"
                value={SITE.phoneDisplay}
                href={`tel:+${SITE.whatsapp}`}
              />
              <InfoRow icon={Clock} label="Hours" value={SITE.hours} />
              <InfoRow
                icon={Star}
                label="Rating"
                value={`${SITE.rating}★ · ${SITE.reviews} Google reviews`}
              />
            </div>

            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMsg)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-display font-bold text-sm tracking-widest transition-transform hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg,#25D366,#1ebe5d)",
                color: "#0A0A0E",
                boxShadow: "0 0 24px rgba(37,211,102,0.4)",
              }}
            >
              <MessageCircle className="w-5 h-5" />
              BOOK ON WHATSAPP
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SHARED COMPONENTS
// ============================================================================

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <div
        className="grid place-items-center w-10 h-10 shrink-0 rounded-lg"
        style={{
          background: "rgba(255,0,110,0.08)",
          border: "1px solid rgba(255,0,110,0.25)",
        }}
      >
        <Icon className="w-4 h-4" style={{ color: "#FF006E" }} />
      </div>
      <div className="min-w-0">
        <div className="font-display text-[10px] tracking-widest text-white/50">
          {label.toUpperCase()}
        </div>
        <div
          className="mt-0.5 text-sm text-white/90"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          {value}
        </div>
      </div>
    </>
  );
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-start gap-3 hover:text-white transition-colors"
    >
      {inner}
    </a>
  ) : (
    <div className="flex items-start gap-3">{inner}</div>
  );
}

function SectionHead({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <span
        className="font-display text-[10px] sm:text-xs tracking-[0.3em]"
        style={{ color: "#FF006E" }}
      >
        {eyebrow}
      </span>
      <h2
        className="mt-3 font-display font-black tracking-tight"
        style={{ fontSize: "clamp(2rem,5vw,3.25rem)" }}
      >
        {title}
      </h2>
      <p className="mt-3 text-white/60" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
        {subtitle}
      </p>
    </div>
  );
}

// ============================================================================
// FOOTER
// ============================================================================

function Footer() {
  return (
    <footer className="px-5 pt-16 pb-10">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center gap-2">
          <span
            className="font-display font-black text-2xl tracking-[0.25em]"
            style={{
              background: "linear-gradient(135deg,#FF006E,#8B5CF6,#00E5FF)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            AIM
          </span>
          <span className="font-display text-sm text-white/80">{SITE.brand}</span>
          <span
            className="text-xs text-white/40"
            style={{ fontFamily: "Rajdhani, sans-serif" }}
          >
            Nana Chowk, Mumbai · Open 24 Hours
          </span>
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <SocialBtn
            href={SITE.instagram}
            label="Instagram"
            hoverBg="linear-gradient(135deg,#E1306C,#833AB4)"
          >
            <Instagram className="w-4 h-4" />
          </SocialBtn>
          <SocialBtn
            href={SITE.facebook}
            label="Facebook"
            hoverBg="linear-gradient(135deg,#1877F2,#0a5cc7)"
          >
            <Facebook className="w-4 h-4" />
          </SocialBtn>
          <SocialBtn
            href={SITE.youtube}
            label="YouTube"
            hoverBg="linear-gradient(135deg,#FF0000,#cc0000)"
          >
            <Youtube className="w-4 h-4" />
          </SocialBtn>
          <SocialBtn
            href={SITE.linkedin}
            label="LinkedIn"
            hoverBg="linear-gradient(135deg,#0A66C2,#084d93)"
          >
            <Linkedin className="w-4 h-4" />
          </SocialBtn>
        </div>

        <div className="mt-8 h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }} />
        <div
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-white/50"
          style={{ fontFamily: "Rajdhani, sans-serif" }}
        >
          <span>Made with ⚡ by Vortex Labs</span>
          <span className="hidden sm:inline">·</span>
          <span>
            © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

function SocialBtn({
  href,
  label,
  hoverBg,
  children,
}: {
  href: string;
  label: string;
  hoverBg: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid place-items-center w-11 h-11 rounded-full transition-all"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = hoverBg)}
      onMouseLeave={(e) =>
        (e.currentTarget.style.background = "rgba(255,255,255,0.04)")
      }
    >
      {children}
    </a>
  );
}

// ============================================================================
// WHATSAPP FAB
// ============================================================================

function WhatsAppFAB() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMsg)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Book on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span
        className="absolute inset-0 rounded-full blur-xl opacity-70 animate-pulse"
        style={{ background: "#25D366" }}
      />
      <span
        className="relative grid place-items-center w-14 h-14 rounded-full transition-transform group-hover:scale-110"
        style={{
          background: "#25D366",
          color: "#0A0A0E",
          boxShadow: "0 0 28px rgba(37,211,102,0.55)",
        }}
      >
        <MessageCircle className="w-6 h-6" />
      </span>
    </a>
  );
}
