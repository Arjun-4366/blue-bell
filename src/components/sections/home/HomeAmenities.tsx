'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import campfireImg from '@/images/amenities/campfire.webp';
import bbqImg from '@/images/amenities/bbq.webp';
import kidsParkImg from '@/images/amenities/kids-park.webp';

gsap.registerPlugin(ScrollTrigger);

const collage = [
  { src: campfireImg, alt: 'Guests gathered around an evening campfire', size: 'large', position: 'center' },
  { src: bbqImg,       alt: 'Skewers cooking on an outdoor barbecue grill', size: 'small', position: 'center' },
  { src: kidsParkImg,  alt: "Colourful children's play park",              size: 'small', position: 'top' },
];

export default function HomeAmenities() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.amenity-collage-tile', {
        scrollTrigger: { trigger: '.amenity-collage', start: 'top 80%' },
        opacity: 0, y: 35, duration: 0.9, stagger: 0.12, ease: 'power3.out',
      });
      gsap.from('.amenity-text-el', {
        scrollTrigger: { trigger: '.amenity-list', start: 'top 80%' },
        opacity: 0, y: 25, duration: 0.8, stagger: 0.1, ease: 'power3.out',
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ background: '#fff' }}>
      <div className="container" style={{ padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)' }}>
        <div className="amenities-layout" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(2rem, 6vw, 6rem)',
          alignItems: 'center',
        }}>
          {/* Left — image collage */}
          <div className="amenity-collage" style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 1fr',
            gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
            gap: 'clamp(0.6rem, 1.2vw, 0.9rem)',
            aspectRatio: '1/1',
          }}>
            {collage.map((img, i) => (
              <div key={i} className="amenity-collage-tile" style={{
                position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden',
                gridRow: img.size === 'large' ? 'span 2' : 'span 1',
                boxShadow: '0 12px 34px rgba(13,30,53,0.1)',
              }}>
                <Image src={img.src} alt={img.alt} fill sizes="(max-width:768px) 100vw, 40vw" style={{ objectFit: 'cover', objectPosition: img.position }} placeholder="blur" />
              </div>
            ))}
          </div>

          {/* Right — overview */}
          <div className="amenity-list">
            <span className="section-label amenity-text-el">Resort Amenities</span>
            <h2 className="section-title amenity-text-el" style={{ marginBottom: '1rem', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>
              Made for Easy Days
            </h2>
            <div className="divider amenity-text-el" />
            <p className="amenity-text-el" style={{ marginBottom: '2.2rem', color: 'var(--color-text-soft)', fontSize: 'clamp(0.9rem, 1.3vw, 1.02rem)', lineHeight: 1.9 }}>
              Every corner of Blue Bell is designed around how our guests actually spend their time —
              unhurried, together, and away from the everyday. Evenings gather around the fire, days move
              at whatever pace the family sets, and there's always somewhere quiet to slow down.
            </p>

            <Link href="/amenities" className="btn btn-primary amenity-text-el" style={{ display: 'inline-block', padding: '0.75rem 1.8rem', fontSize: 'clamp(0.6rem, 0.85vw, 0.65rem)' }}>
              See All Amenities
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .amenities-layout {
            gap: 2.5rem !important;
          }

          .amenity-collage {
            aspect-ratio: 16/10 !important;
          }
        }

        @media (max-width: 480px) {
          .amenities-layout {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }

          .amenity-collage {
            aspect-ratio: 4/3 !important;
          }

          .amenity-list {
            text-align: center;
          }

          .amenity-list .divider {
            margin-left: auto;
            margin-right: auto;
          }

          .amenity-list .btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
