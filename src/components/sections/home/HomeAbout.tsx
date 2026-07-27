'use client';
import { useEffect, useRef, useState } from 'react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import treeTrunk1 from '@/images/treehouse/zlkpjggmhq60elmgfepd.webp';
import treeTrunk2 from '@/images/treehouse/kwfdzddhhvcbaglapaol.webp';
import treeTrunk3 from '@/images/treehouseroom/hovti9ywbnfxtbfpo9rt.webp';
import treeTrunk4 from '@/images/treehouseroom/xxkihviwv9zirfyuqecz.webp';

import treeHut1 from '@/images/treehouse/csyamo4f6uhksferbw0s.webp';
import treeHut2 from '@/images/treehouse/i58khp2kg8capjmcl9ux.webp';
import treeHut3 from '@/images/treehouseroom/hovti9ywbnfxtbfpo9rt.webp';
import treeHut4 from '@/images/treehouseroom/hovti9ywbnfxtbfpo9rt.webp';

import dome1 from '@/images/dome/AAL04276.webp';
import dome2 from '@/images/dome/AAL04289.webp';
import dome3 from '@/images/dome/AAL04306.webp';
import dome4 from '@/images/dome/AAL04291.webp';

gsap.registerPlugin(ScrollTrigger);

const stayTypes = [
  {
    title: 'Tree Trunk',
    tag: 'Best for Couples',
    images: [treeTrunk1, treeTrunk2, treeTrunk3,treeTrunk4],
    desc: "Have you ever wanted to sleep inside the trunk of a tree, three floors above the ground, with the Periya mist still sitting on the hills when you wake up? Our Tree Trunk stay is exactly that — one private room on each floor, a single trunk-shaped structure, pool access, and built for two.",
  },
  {
    title: 'Tree Hut',
    tag: 'Best for Families',
    images: [treeHut1, treeHut2, treeHut3,treeHut4],
    desc: "Our Tree Hut is the same three-floor design, built instead for families — air-conditioned, with room for 2–3 guests. Same forest, same pool, just built to hold a few more people.",
  },
  {
    title: 'Domes',
    tag: 'Best for Couples & Families',
    images: [dome1, dome2, dome3,dome4],
    desc: "Our five domes are built around their own private pools — each dome has its own name and its own pool. Dumbo Vault pairs two domes around one shared pool, built for 3–4 guests.",
  },
];

const stats = [
  { value: '4.6★', label: 'Guest Rating' },
  { value: '11', label: 'Unique Stays', caption: '3 Tree Trunk · 3 Tree Hut · 5 Domes' },
  { value: '5.5', label: 'Acres in Periya' },
  { value: '2020', label: 'Established' },
];

function parseStatValue(value: string) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return { target: 0, decimals: 0, suffix: value };
  const [, num, suffix] = match;
  const decimals = num.includes('.') ? num.split('.')[1].length : 0;
  return { target: parseFloat(num), decimals, suffix };
}

function RotatingImageCard({ images, alt }: { images: StaticImageData[]; alt: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, 3500);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <div className="stay-row-img" style={{
      position: 'relative',
      aspectRatio: '4/3',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: '0 20px 50px rgba(13,30,53,0.1)',
    }}>
      {images.map((img, i) => (
        <Image
          key={i}
          src={img}
          alt={alt}
          fill
          placeholder="blur"
          style={{
            objectFit: 'cover',
            position: 'absolute',
            inset: 0,
            opacity: i === active ? 1 : 0,
            transition: 'opacity 1.2s ease',
          }}
        />
      ))}
    </div>
  );
}

export default function HomeAbout() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-reveal-el', {
        scrollTrigger: { trigger: '.about-intro', start: 'top 85%' },
        opacity: 0, y: 35, duration: 0.9, stagger: 0.1, ease: 'power3.out',
      });

      gsap.from('.stay-row', {
        scrollTrigger: { trigger: '.stay-rows', start: 'top 85%' },
        opacity: 0, y: 45, duration: 0.9, stagger: 0.2, ease: 'power3.out',
      });

      gsap.from('.about-stats-bar', {
        scrollTrigger: { trigger: '.about-stats-bar', start: 'top 90%' },
        opacity: 0, y: 30, duration: 0.9, ease: 'power3.out',
      });

      gsap.utils.toArray<HTMLElement>('.stat-value-num').forEach((el) => {
        const target = parseFloat(el.dataset.target || '0');
        const decimals = Number(el.dataset.decimals || 0);
        const suffix = el.dataset.suffix || '';
        const counter = { val: 0 };
        gsap.to(counter, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.about-stats-bar', start: 'top 90%', once: true },
          onUpdate: () => {
            el.textContent = counter.val.toFixed(decimals) + suffix;
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section" style={{ background: '#fff' }}>
      <div className="container" style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)' }}>

        {/* Intro */}
        <div className="about-intro" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto clamp(3rem, 6vw, 4.5rem)' }}>
          <span className="about-reveal-el" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontFamily: 'var(--font-sans)', fontSize: '0.62rem', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--brand-cyan-muted)', background: 'var(--color-bg-accent)',
            border: '1px solid rgba(6,181,211,0.2)', borderRadius: '999px',
            padding: '0.45rem 1rem', marginBottom: '1.2rem',
          }}>
            6 Years of Excellence
          </span>
          <span className="section-label about-reveal-el" style={{ display: 'block' }}>Our Sanctuaries</span>
          <h2 className="section-title about-reveal-el" style={{ marginBottom: '1.1rem' }}>
            Three Ways to Call Wayanad Home
          </h2>
          <div className="divider center about-reveal-el" />
        </div>

        {/* Stay type rows — image left, content right */}
        <div className="stay-rows">
          {stayTypes.map((stay) => (
            <div key={stay.title} className="stay-row" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 'clamp(2rem, 5vw, 4rem)',
              alignItems: 'center',
              marginBottom: 'clamp(3rem, 6vw, 4.5rem)',
            }}>
              <RotatingImageCard images={stay.images} alt={stay.title} />

              <div>
                <span style={{
                  display: 'inline-block', fontFamily: 'var(--font-sans)', fontSize: '0.62rem',
                  fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'var(--brand-cyan-muted)', marginBottom: '0.8rem',
                }}>
                  {stay.tag}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-serif)', fontWeight: 500,
                  fontSize: 'clamp(1.6rem, 2.6vw, 2.1rem)', color: 'var(--color-text)',
                  marginBottom: '0.9rem',
                }}>
                  {stay.title}
                </h3>
                <div className="divider" />
                <p style={{ fontSize: 'clamp(0.9rem, 1.3vw, 1rem)', lineHeight: 1.85, color: 'var(--color-text-mid)' }}>
                  {stay.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar — common to all, bottom of section */}
        <div className="about-stats-bar" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'clamp(0.8rem, 2vw, 1.5rem)',
          maxWidth: '920px',
          margin: '0 auto',
        }}>
          {stats.map((stat) => {
            const { target, decimals, suffix } = parseStatValue(stat.value);
            return (
            <div key={stat.label} style={{
              textAlign: 'center',
              padding: 'clamp(1rem, 2vw, 1.6rem) clamp(0.6rem, 1.5vw, 1rem)',
              background: 'var(--color-bg-accent)',
              borderRadius: 'var(--radius)',
              border: '1px solid rgba(6,181,211,0.1)',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--brand-cyan)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 24px rgba(6,181,211,0.1)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(6,181,211,0.1)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              <span
                className="stat-value-num"
                data-target={target}
                data-decimals={decimals}
                data-suffix={suffix}
                style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: 'clamp(1.4rem, 2.8vw, 1.9rem)', fontWeight: 700, color: 'var(--brand-cyan-muted)', lineHeight: 1 }}
              >
                {(0).toFixed(decimals) + suffix}
              </span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.6rem, 0.9vw, 0.68rem)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-text-soft)', marginTop: '6px', display: 'block' }}>{stat.label}</span>
              {stat.caption && (
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(0.55rem, 0.8vw, 0.6rem)', color: 'var(--color-text-soft)', opacity: 0.75, marginTop: '4px', display: 'block' }}>{stat.caption}</span>
              )}
            </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 480px) {
          .about-intro {
            padding: 0 0.5rem;
          }
          .about-stats-bar {
            grid-template-columns: 1fr 1fr !important;
            gap: 0.6rem !important;
          }
        }
      `}</style>
    </section>
  );
}
