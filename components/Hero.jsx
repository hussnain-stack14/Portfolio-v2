import Image from "next/image";
import { Smartphone, Zap, Search, Briefcase, ArrowRight } from "lucide-react";

export default function Hero({ onNavigate }) {
  return (
    <section className="relative flex min-h-[calc(100svh-80px)] items-center overflow-hidden bg-[#1a1a1d] py-10 text-white sm:py-14 lg:min-h-[calc(100vh-80px)] lg:py-10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[120px] sm:blur-[140px]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-14">
          {/* ================= LEFT CONTENT ================= */}
          <div className="mx-auto w-full max-w-2xl min-w-0 text-center sm:text-left lg:mx-0">
            {/* Eyebrow */}
            <div className="hero-reveal hero-delay-1 mx-auto mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#27272A] bg-[#141414] px-3.5 py-1.5 sm:mx-0 sm:rounded-md sm:px-3 sm:py-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-gray-300 uppercase">
                WEB DEVELOPER IN FAISALABAD
              </span>
            </div>

            {/* Heading */}
            <h1 className="hero-reveal hero-delay-2 break-words text-4xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-3xl lg:text-3xl">
              I Build Websites{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-[#22D3EE] bg-clip-text text-transparent">
                That Help Local Businesses Grow
              </span>
            </h1>

            {/* Description */}
            <p className="hero-reveal hero-delay-3 mx-auto mt-5 max-w-xl text-4 leading-5 text-[#A1A1AA] sm:mx-0 sm:text-sm sm:leading-6 md:text-base md:leading-7 lg:text-lg">
              Fast, modern, mobile-friendly websites for restaurants, clinics,
              salons, and small businesses in Faisalabad designed to build
              trust, attract customers, and turn visitors into clients.
            </p>

            {/* CTA Buttons */}
            <div className="hero-reveal hero-delay-4 mx-auto mt-8 flex w-full max-w-xl flex-col gap-3.5 sm:mx-0 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => onNavigate("contact")}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#dbdfe0]  px-4 py-3 text-xl font-semibold text-[#0A0A0A] shadow-lg shadow-cyan-400/20 transition-all duration-300 hover: hover:bg-cyan-400 shadow-cyan-400/30 sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Let's Build Your Website
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </button>

              <button
                type="button"
                onClick={() => onNavigate("portfolio")}
                className="inline-flex w-full items-center justify-center rounded-lg border border-[#27272A] bg-[#1a1a1d] px-4 py-3 text-xs font-semibold text-white transition-all duration-300 hover:border-cyan-400 hover:bg-[#141414] sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm"
              >
                View My Work
              </button>
            </div>

            {/* Trust / Value Indicators */}
            <div className="hero-reveal hero-delay-5 mt-10 grid w-full grid-cols-2 gap-x-4 gap-y-6 border-t border-[#27272A]/60 pt-6 sm:grid-cols-4 sm:gap-x-6">
              {/* Responsive Design */}
              <div className="group flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#67E8F9]/10 text-[#67E8F9] transition-colors duration-300 group-hover:bg-[#67E8F9]/20">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-white">
                  Responsive
                </h3>
                <p className="mt-0.5 text-[11px] sm:text-xs text-[#71717A]">
                  Design
                </p>
              </div>

              {/* Fast Performance */}
              <div className="group flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#67E8F9]/10 text-[#67E8F9] transition-colors duration-300 group-hover:bg-[#67E8F9]/20">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-white">
                  Fast
                </h3>
                <p className="mt-0.5 text-[11px] sm:text-xs text-[#71717A]">
                  Performance
                </p>
              </div>

              {/* SEO-Friendly Websites */}
              <div className="group flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#67E8F9]/10 text-[#67E8F9] transition-colors duration-300 group-hover:bg-[#67E8F9]/20">
                  <Search className="h-5 w-5" />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-white">
                  SEO
                </h3>
                <p className="mt-0.5 text-[11px] sm:text-xs text-[#71717A]">
                  Websites
                </p>
              </div>

              {/* Business Focused */}
              <div className="group flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#67E8F9]/10 text-[#67E8F9] transition-colors duration-300 group-hover:bg-[#67E8F9]/20">
                  <Briefcase className="h-5 w-5" />
                </div>
                <h3 className="text-xs sm:text-sm font-medium text-white">
                  Business
                </h3>
                <p className="mt-0.5 text-[11px] sm:text-xs text-[#71717A]">
                  Focused
                </p>
              </div>
            </div>
          </div>
          {/* ================= RIGHT VISUAL ================= */}
          <div className="hero-float relative mt-2 flex items-center justify-center lg:mt-0 lg:justify-end">
            {/* Image Glow */}
            <div className="pointer-events-none absolute h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-full bg-cyan-400/10 blur-[90px] sm:blur-[110px]" />

            <div className="hero-reveal hero-delay-3 group relative w-full max-w-[500px] overflow-hidden rounded-2xl border border-cyan-400/40 bg-[#141414] transition-all duration-500 ease-out hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(103,232,249,0.3)] xl:max-w-[620px]">
              {/* Hover Inner Glow Overlay */}
              <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-tr from-cyan-400/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Hero Laptop Image */}
              <Image
                src="/images/Hero-sideImage1.jpg"
                alt="Modern business website design"
                width={1200}
                height={800}
                priority
                className="relative z-10 h-auto w-full object-contain drop-shadow-2xl transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* ================= FLOATING CARDS ================= */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
