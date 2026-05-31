"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import logo from "@/assests/images/logo.png";
import Image from "next/image";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Stays", href: "/stays" },
  { label: "Amenities", href: "/amenities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen && mobileMenuRef.current) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" },
      );
      gsap.fromTo(
        mobileMenuRef.current.querySelectorAll(".mob-link"),
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "power3.out",
          delay: 0.1,
        },
      );
    }
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition:
            "background 0.5s ease, box-shadow 0.4s ease, padding 0.35s ease",
          background: isTransparent ? "transparent" : "rgba(255,255,255,0.96)",
          boxShadow:
            scrolled || !isHome ? "0 1px 0 rgba(13,30,53,0.08)" : "none",
          backdropFilter: scrolled || !isHome ? "blur(18px)" : "none",
          padding: scrolled ? "0.55rem 0" : "0.85rem 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              height: "48px",
              textDecoration: "none",
            }}
          >
            {/* Logo Image */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "48px",
                position: "relative",
                zIndex: 2,
              }}
            >
              <Image
                src={logo}
                alt="Blue Bell Logo"
                height={48}
                style={{
                  height: "48px",
                  width: "auto",
                  objectFit: "contain",
                  transition: "filter 0.4s ease",
                  filter: isTransparent
                    ? "none"
                    : "invert(1) hue-rotate(180deg) brightness(0.85)",
                }}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "clamp(1rem, 1.6vw, 2rem)",
              alignItems: "center",
            }}
            className="nb-desktop"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.65rem",
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: isTransparent
                        ? isActive
                          ? "var(--brand-cyan)"
                          : "rgba(255,255,255,0.75)"
                        : isActive
                          ? "var(--brand-cyan-muted)"
                          : "var(--color-text-mid)",
                      transition: "color 0.3s ease",
                      position: "relative",
                      paddingBottom: "4px",
                    }}
                    className="nb-link"
                  >
                    {link.label}
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: isActive ? "100%" : "0%",
                        height: "1.5px",
                        background: "var(--brand-cyan)",
                        transition: "width 0.3s ease",
                        borderRadius: "2px",
                      }}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <Link
            href="/book-now"
            className="btn btn-primary nb-cta"
            style={{ padding: "0.6rem 1.5rem", fontSize: "0.63rem" }}
          >
            Book Now
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="nb-burger"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
              flexDirection: "column",
              gap: "5px",
              padding: "4px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "22px",
                  height: "1.5px",
                  background: isTransparent
                    ? "rgba(255,255,255,0.9)"
                    : "var(--color-text)",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  transform: menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(4.5px, 4.5px)"
                      : i === 1
                        ? "scaleX(0)"
                        : "rotate(-45deg) translate(4.5px, -4.5px)"
                    : "none",
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {menuOpen && (
        <div
          ref={mobileMenuRef}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "#ffffff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "4rem 2rem 3rem",
          }}
        >
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: "absolute",
              top: "1.2rem",
              right: "1.5rem",
              background: "none",
              border: "none",
              fontSize: "1.6rem",
              cursor: "pointer",
              color: "var(--color-text-mid)",
            }}
          >
            ✕
          </button>

          {/* Logo in menu */}
          <div style={{ marginBottom: "2.5rem" }}>
            <span
              style={{
                fontFamily: "var(--font-script)",
                fontSize: "2.6rem",
                color: "var(--brand-blue)",
                display: "block",
                lineHeight: 1,
              }}
            >
              Blue Bell
            </span>
            <span
              style={{
                fontSize: "0.5rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--brand-cyan)",
                fontWeight: 600,
                fontFamily: "var(--font-sans)",
                marginTop: "4px",
                display: "block",
              }}
            >
              Nature's Masterpiece
            </span>
          </div>

          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="mob-link"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.9rem",
                    fontWeight: 300,
                    color:
                      pathname === link.href
                        ? "var(--brand-cyan-muted)"
                        : "var(--color-text)",
                    display: "block",
                    transition: "color 0.25s ease",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: "2.5rem" }}>
            <Link
              href="/book-now"
              className="btn btn-primary"
              onClick={() => setMenuOpen(false)}
              style={{ width: "100%", justifyContent: "center" }}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 991px) {
          .nb-desktop { display: none !important; }
          .nb-cta { display: none !important; }
          .nb-burger { display: flex !important; }
        }
        .nb-link:hover { color: var(--brand-cyan-muted) !important; }
        .nb-link:hover span { width: 100% !important; }
      `}</style>
    </>
  );
}
