'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import eventImg1 from '@/assests/images/events/events-3.webp';
import eventImg2 from '@/assests/images/events/events-1.webp';
import eventImg3 from '@/assests/images/dining/dining-5.webp';
import eventImg4 from '@/assests/images/dome/dome-5.webp';
import eventImg5 from '@/assests/images/events/events-7.webp';
import eventImg6 from '@/assests/images/events/events-8.webp';
import eventImg7 from '@/assests/images/events/events-2.webp';
import eventImg8 from '@/assests/images/events/events-4.webp';
import eventImg9 from '@/assests/images/events/events-5.webp';
import eventImg10 from '@/assests/images/events/events-6.webp';

// Web images (Unsplash)
const eventImg11 = 'https://images.unsplash.com/photo-1563889362-5819e22936c5?w=1000&q=80&fit=crop';
const eventImg12 = 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1000&q=80&fit=crop';
const eventImg13 = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1000&q=80&fit=crop';

gsap.registerPlugin(ScrollTrigger);

const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>
);

const categories = ['All', 'Celebrations', 'Culinary', 'Wellness', 'Culture'];

const allEvents = [
  { id: 1, cat: 'Celebrations', date: { day: '14', month: 'Jun' }, title: 'Grand Monsoon Wedding Fair', type: 'Wedding Showcase', desc: 'Experience the ultimate luxury wedding showcase at Blue Bell. Tour our scenic outdoor lawns, lakeside pavilions, and meet elite wedding designers.', time: '11:00 AM – 06:00 PM', image: eventImg1 },
  { id: 2, cat: 'Celebrations', date: { day: '21', month: 'Jun' }, title: 'Royal Malabar Banquet & Sangeet', type: 'Luxury Celebration', desc: 'An evening of grand celebration featuring live music, classical sangeet performances, and a curated feast of royal Malabar cuisine.', time: '07:00 PM – 11:30 PM', image: eventImg2 },
  { id: 3, cat: 'Culture', date: { day: '28', month: 'Jun' }, title: 'Kathakali & Traditional Art Night', type: 'Cultural Art Showcase', desc: 'Witness the dramatic, storytelling art of Kathakali and Mohiniyattam, performed live by master artists in our open-air amphitheater.', time: '06:30 PM – 08:30 PM', image: eventImg7 },
  { id: 4, cat: 'Culinary', date: { day: '04', month: 'Jul' }, title: 'Wayanad Spice Trail & Dining Experience', type: 'Culinary Experience', desc: 'Discover organic spice farming followed by a traditional multi-course Malabar dinner cooked over a wood fire with our executive chef.', time: '05:00 PM – 09:00 PM', image: eventImg3 },
  { id: 5, cat: 'Culture', date: { day: '12', month: 'Jul' }, title: 'Lakeside Sufi & Ghazal Soiree', type: 'Musical Evening', desc: 'A soulful evening of live Sufi and Ghazal music by the lakeside, accompanied by an authentic wood-fired barbecue and local delicacies.', time: '07:00 PM – 10:30 PM', image: eventImg8 },
  { id: 6, cat: 'Wellness', date: { day: '18', month: 'Jul' }, title: 'Forest Dome Sunrise Yoga & Meditation', type: 'Wellness Retreat', desc: 'Rejuvenate with a morning yoga class and breathing exercises under our glass domes, surrounded by mist-covered mountain valleys.', time: '06:00 AM – 09:00 AM', image: eventImg4 },
  { id: 7, cat: 'Culinary', date: { day: '26', month: 'Jul' }, title: 'Private Forest Deck Gala Dinner', type: 'Fine Dining', desc: 'An exclusive, multi-course culinary experience set on our elevated forest deck, featuring fusion cuisine under a canopy of stars.', time: '07:30 PM – 11:00 PM', image: eventImg9 },
  { id: 8, cat: 'Celebrations', date: { day: '01', month: 'Aug' }, title: 'Elite Bridal Couture Runway', type: 'Fashion & Bridal', desc: "An exclusive preview of the upcoming season's finest bridal couture collections, set against the backdrop of our mist-covered forest deck.", time: '06:30 PM – 09:30 PM', image: eventImg5 },
  { id: 9, cat: 'Culinary', date: { day: '09', month: 'Aug' }, title: 'Tropical Mixology & Cocktail Masterclass', type: 'Interactive Workshop', desc: 'Learn the art of crafting premium cocktails infused with local spices, fresh herbs, and tropical fruits under our master mixologists.', time: '04:00 PM – 06:30 PM', image: eventImg10 },
  { id: 10, cat: 'Culinary', date: { day: '18', month: 'Aug' }, title: 'Organic Tea Garden Tasting & High Tea', type: 'Tea Garden Tour', desc: "Walk through Wayanad's premier organic tea estate, sample rare artisanal single-origin teas, and enjoy a curated high-tea spread.", time: '03:00 PM – 05:30 PM', image: eventImg11 },
  { id: 11, cat: 'Wellness', date: { day: '24', month: 'Aug' }, title: 'Guided Forest Bathing & Canopy Walk', type: 'Nature Therapy', desc: 'Immerse in silent shinrin-yoku forest bathing, followed by a guided botanical canopy walk over the misty river valleys of Wayanad.', time: '07:30 AM – 10:00 AM', image: eventImg12 },
  { id: 12, cat: 'Wellness', date: { day: '31', month: 'Aug' }, title: 'Ayurvedic Rejuvenation & Healing Retreat', type: 'Wellness & Spa', desc: 'Experience a transformative day of classic Ayurveda therapies, custom herbal drinks, and a personalized holistic wellness consultation.', time: '09:00 AM – 04:00 PM', image: eventImg13 },
];

export default function EventsList() {
  const ref = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredEvents = activeCategory === 'All'
    ? allEvents
    : allEvents.filter(evt => evt.cat === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.evt-card', 
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section ref={ref} className="section" style={{ background: '#fafbfc' }}>
      <div className="container" style={{ padding: '0 clamp(1rem, 3vw, 2rem)' }}>
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
          <span className="section-label">Calendar</span>
          <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}>Upcoming Celebrations</h2>
          <div className="divider center" />
        </div>

        {/* Categories / Filter Tabs */}
        <div className="filter-tabs" style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '3rem',
        }}>
          {categories.map((cat) => {
            const active = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.6rem, 0.85vw, 0.68rem)',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  padding: 'clamp(0.5rem, 0.8vw, 0.6rem) clamp(1rem, 1.8vw, 1.4rem)',
                  borderRadius: '3px',
                  border: active ? '1.5px solid var(--brand-cyan)' : '1.5px solid rgba(13,30,53,0.12)',
                  background: active ? 'var(--brand-cyan)' : '#fff',
                  color: active ? '#fff' : 'var(--color-text-soft)',
                  cursor: 'pointer',
                  transition: 'all 0.3s var(--ease)',
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.borderColor = 'var(--brand-cyan)';
                    e.currentTarget.style.color = 'var(--brand-cyan-muted)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.borderColor = 'rgba(13,30,53,0.12)';
                    e.currentTarget.style.color = 'var(--color-text-soft)';
                  }
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery-style Event Grid */}
        <div className="evt-grid">
          {filteredEvents.map((evt) => {
            const isStaticImage = typeof evt.image === 'object';
            return (
              <div key={evt.id} className="evt-card">
                {/* Image Area */}
                <div className="evt-img-container">
                  <Image
                    src={evt.image}
                    alt={evt.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
                    className="evt-img"
                    {...(isStaticImage ? { placeholder: 'blur' } : {})}
                  />
                  {/* Floating Date Badge */}
                  <div className="evt-date">
                    <span className="day">{evt.date.day}</span>
                    <span className="month">{evt.date.month}</span>
                  </div>
                  {/* Floating Category Tag */}
                  <div className="evt-tag">
                    {evt.cat}
                  </div>
                </div>

                {/* Content Area */}
                <div className="evt-card-body">
                  <span className="evt-sub">{evt.type}</span>
                  <h3 className="evt-title">{evt.title}</h3>
                  <p className="evt-desc">{evt.desc}</p>
                  
                  {/* Meta (Time) */}
                  <div className="evt-meta">
                    <div className="time">
                      <ClockIcon />
                      <span>{evt.time}</span>
                    </div>
                  </div>

                  {/* Reserve Button */}
                  <Link href="/book-now" className="evt-btn">
                    <span>Reserve Spot</span>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .evt-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: clamp(1.5rem, 3vw, 2.5rem);
        }

        .evt-card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(13,30,53,0.03);
          border: 1px solid rgba(13,30,53,0.05);
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .evt-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(6,181,211,0.12);
          border-color: rgba(6,181,211,0.25);
        }

        .evt-card:hover :global(.evt-img) {
          transform: scale(1.06);
        }

        .evt-img-container {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
          background: #eaecef;
        }

        .evt-date {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 2;
          text-align: center;
          min-width: 54px;
          padding: 0.5rem 0.4rem;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }

        .evt-date .day {
          font-family: var(--font-sans);
          fontSize: 1.1rem;
          font-weight: 700;
          color: var(--brand-blue);
          display: block;
          line-height: 1;
        }

        .evt-date .month {
          font-family: var(--font-sans);
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--brand-cyan-muted);
          margin-top: 3px;
          display: block;
        }

        .evt-tag {
          position: absolute;
          bottom: 14px;
          right: 14px;
          z-index: 2;
          font-family: var(--font-sans);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.35rem 0.8rem;
          border-radius: 20px;
          background: rgba(13, 30, 53, 0.75);
          backdrop-filter: blur(6px);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .evt-card-body {
          padding: 1.8rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .evt-sub {
          font-family: var(--font-sans);
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--brand-cyan-muted);
          display: block;
          margin-bottom: 0.5rem;
        }

        .evt-title {
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-weight: 400;
          color: var(--color-text);
          margin-bottom: 0.8rem;
          line-height: 1.4;
        }

        .evt-desc {
          font-size: 0.85rem;
          line-height: 1.6;
          color: var(--color-text-soft);
          margin-bottom: 1.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex-grow: 1;
        }

        .evt-meta {
          display: flex;
          align-items: center;
          padding-top: 1.2rem;
          border-top: 1px solid rgba(13, 30, 53, 0.06);
          margin-bottom: 1.2rem;
        }

        .evt-meta .time {
          display: flex;
          align-items: center;
          gap: 6px;
          color: var(--color-text-soft);
          font-size: 0.8rem;
        }

        .evt-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 0.8rem;
          background: rgba(6, 181, 211, 0.06);
          border: 1px solid rgba(6, 181, 211, 0.12);
          border-radius: 8px;
          color: var(--brand-blue);
          font-family: var(--font-sans);
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .evt-card:hover .evt-btn {
          background: var(--brand-cyan);
          border-color: var(--brand-cyan);
          color: #fff;
          box-shadow: 0 4px 15px rgba(6, 181, 211, 0.3);
        }

        @media (max-width: 768px) {
          .evt-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.5rem;
          }
          .evt-img-container {
            height: 200px;
          }
        }

        @media (max-width: 480px) {
          .evt-grid {
            grid-template-columns: 1fr;
            gap: 1.2rem;
          }
          .evt-card-body {
            padding: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
}