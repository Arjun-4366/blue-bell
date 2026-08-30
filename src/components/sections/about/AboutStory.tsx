"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2020",
    event:
      "Blue Bell opened in Periya with just two ways to stay — the Tree Trunk and the Tree Hut — our first treehouses built into the canopy.",
  },
  {
    year: "2021",
    event:
      "Word travelled fast, and we welcomed our 1,000th happy guest within the first year.",
  },
  {
    year: "2023",
    event:
      "Grew from just over 2 acres to a full 5.5 acres, giving every stay more forest, more privacy, and more room to roam.",
  },
  {
    year: "2024",
    event:
      "Crossed 5,000 happy guests — proof that Periya had quietly become a destination in its own right.",
  },
  {
    year: "2025",
    event:
      "Introduced our five earthen domes, each with its own private pool — a second way to stay at Blue Bell, built for couples and families alike.",
  },
];

import { AboutPageContent } from '@/types/siteContent';

export default function AboutStory({ data }: { data?: AboutPageContent }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".story-text-reveal > *", {
        scrollTrigger: { trigger: ".story-text-reveal", start: "top 80%" },
        opacity: 0,
        y: 35,
        duration: 0.9,
        stagger: 0.14,
        ease: "power3.out",
      });
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: ".milestones-wrapper",
            start: "top 75%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".milestone-item").forEach((item) => {
        const dot = item.querySelector(".milestone-dot");
        const content = item.querySelector(".milestone-content");
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        });
        tl.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(2.4)" },
        ).fromTo(
          content,
          { opacity: 0, x: -25 },
          { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" },
          "-=0.25",
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: "#fff" }}>
      <div
        className="container"
        style={{ padding: "0 clamp(1rem, 3vw, 2rem)" }}>
        <div
          className="story-layout"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(2rem, 6vw, 7rem)",
            alignItems: "start",
          }}>
          {/* Story text */}
          <div className="story-text-reveal">
            <span className="section-label">{data?.storyLabel || 'The Blue Bell Story'}</span>
            <h2
              className="section-title"
              style={{
                marginBottom: "1.2rem",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              }}>
              {data?.storyTitle || 'Six Years in the Heart of Periya'}
            </h2>
            <div className="divider" />
            {data?.storyBody ? (
              <div dangerouslySetInnerHTML={{ __html: data.storyBody }} className="story-body-content" />
            ) : (
              <>
            <p
              style={{
                fontSize: "clamp(0.9rem, 1.3vw, 1rem)",
                marginBottom: "1.2rem",
                color: "var(--color-text-mid)",
              }}>
              Established in 2020, Blue Bell Resort is one of Wayanad's
              best-known treehouse resorts, built around three ways to stay: the
              Tree Trunk and the Tree Hut, both made for two per room, and five
              private-pool domes — including Dumbo Vault, built for families of
              up to four. Guests can choose between treehouses raised nearly 35
              feet into the canopy, or domes with their own private pool.
            </p>
            <p
              style={{
                fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)",
                marginBottom: "1.2rem",
                color: "var(--color-text-mid)",
              }}>
              Easily reached from both Bangalore and Mysore, Blue Bell is a
              natural weekend trip for travelers from Karnataka as much as
              guests within Kerala..
            </p>
            <p
              style={{
                fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)",
                marginBottom: "1.2rem",
                color: "var(--color-text-mid)",
              }}>
              The resort sits on 5.5 acres in Periya, in Wayanad's quieter
              northern belt — known for its tea hills and a real piece of
              history. Periya's terrain was part of the ground Pazhassi Raja's
              forces used during Kerala's guerrilla resistance against the
              British, still traced today at the nearby Pazhassi Museum. Mist
              settles over the forest most mornings, and peacocks wander the
              grounds freely.
            </p>
            <p
              style={{
                fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)",
                marginBottom: "1.2rem",
                color: "var(--color-text-mid)",
              }}>
              The wildlife is real, not decorative — Indian gaur pass through
              the property, and birdlife is loud enough to notice without a
              guided walk. The in-house kitchen serves North Indian, South
              Indian, and Chinese food, for groups who don't all want the same
              thing for dinner. Whether it's a couple's stay in the Tree Hut or
              a family stay in a private-pool dome, Blue Bell answers both
              from the same forested address in Periya.
            </p>
              </>
            )}
          </div>

          {/* Timeline */}
          <div className="timeline-section">
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.2rem, 1.8vw, 1.4rem)",
                fontWeight: 400,
                color: "var(--color-text)",
                marginBottom: "clamp(1.8rem, 2.5vw, 2.5rem)",
              }}>
              Our Journey
            </h3>

            <div
              className="milestones-wrapper"
              style={{ position: "relative" }}>
              {/* Vertical line */}
              <div
                className="timeline-line"
                style={{
                  position: "absolute",
                  left: "24px",
                  top: 0,
                  bottom: 0,
                  width: "1.5px",
                  background: "rgba(6,181,211,0.15)",
                }}
              />

              {(data?.milestones || milestones).map((m) => (
                <div
                  key={m.year}
                  className="milestone-item"
                  style={{
                    display: "flex",
                    gap: "clamp(1rem, 1.8vw, 1.6rem)",
                    marginBottom: "clamp(2rem, 3.4vw, 3rem)",
                    position: "relative",
                  }}>
                  {/* Dot */}
                  <div
                    className="milestone-dot"
                    style={{
                      width: "clamp(40px, 4.6vw, 48px)",
                      height: "clamp(40px, 4.6vw, 48px)",
                      borderRadius: "50%",
                      background: "var(--brand-cyan)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      position: "relative",
                      zIndex: 1,
                      boxShadow: "0 6px 18px rgba(6,181,211,0.3)",
                    }}>
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "clamp(0.58rem, 0.8vw, 0.64rem)",
                        fontWeight: 700,
                        color: "#fff",
                        letterSpacing: "0.03em",
                      }}>
                      {m.year}
                    </span>
                  </div>

                  <div
                    className="milestone-content"
                    style={{ paddingTop: "0.5rem" }}>
                    <span
                      className="milestone-year"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)",
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--brand-cyan-muted)",
                        display: "block",
                        marginBottom: "0.45rem",
                      }}>
                      {m.year}
                    </span>
                    <p
                      style={{
                        fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)",
                        lineHeight: 1.5,
                        color: "var(--color-text-mid)",
                        maxWidth: "34ch",
                      }}>
                      {m.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :global(.story-body-content p) {
          font-size: clamp(0.85rem, 1.2vw, 0.95rem);
          margin-bottom: 1.2rem;
          color: var(--color-text-mid);
        }
        @media (max-width: 768px) {
          .story-layout {
            gap: 3rem !important;
          }

          .story-image {
            height: 220px !important;
          }

          .timeline-line {
            left: 21px !important;
          }

          .milestone-dot {
            width: 42px !important;
            height: 42px !important;
          }

          .milestone-item {
            gap: 1.1rem !important;
          }
        }

        @media (max-width: 480px) {
          .story-layout {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }

          .story-text-reveal {
            text-align: center;
          }

          .story-text-reveal .divider {
            margin-left: auto;
            margin-right: auto;
          }

          .story-image {
            height: 200px !important;
          }

          .timeline-section {
            text-align: left;
          }

          .timeline-section h3 {
            text-align: center;
          }

          .timeline-line {
            left: 19px !important;
          }

          .milestone-dot {
            width: 38px !important;
            height: 38px !important;
          }

          .milestone-dot span {
            font-size: 0.56rem !important;
          }

          .milestone-year {
            font-size: 0.66rem !important;
          }

          .milestone-item p {
            font-size: 0.9rem !important;
            max-width: none !important;
          }

          .milestone-item {
            margin-bottom: 1.8rem !important;
          }
        }
      `}</style>
    </section>
  );
}
