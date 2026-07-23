'use client';

import Link from 'next/link';
import ScrollVideoScene from '@/components/showcase/ScrollVideoScene';
import './styles.css';

export default function ScrollVideoTestPage() {
  return (
    <div className="page-container">
      {/* Intro Spacer Section */}
      <section className="intro-section">
        <h1>Scroll Showcase Scene</h1>
        <p>
          This test page showcases the reusable <code>ScrollVideoScene</code> component, which demonstrates
          a high-performance, scroll-scrubbed image sequence rendered on an HTML5 canvas.
        </p>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <svg className="arrow-down" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Scrub Scene Showcase Component */}
      <ScrollVideoScene frameCount={90} scrollLength="300%">
        {/* Floating Text Overlays */}
        <div className="overlay-layer">
          <div className="text-overlay text-overlay-1">
            <h2>01 / ARCHITECTURE</h2>
            <p>
              By utilizing a canvas image sequence instead of native video seeking, we avoid browser decode queue lag.
            </p>
          </div>

          <div className="text-overlay text-overlay-2">
            <h2>02 / SMOOTHNESS</h2>
            <p>
              Each frame is pre-loaded directly into system memory, ensuring zero-latency frame seek capabilities.
            </p>
          </div>

          <div className="text-overlay text-overlay-3">
            <h2>03 / COMPATIBILITY</h2>
            <p>
              Works consistently across iOS Safari, Chrome, and Firefox without range request issues.
            </p>
          </div>
        </div>
      </ScrollVideoScene>

      {/* Outro Spacer Section */}
      <section className="outro-section">
        <h2>Cinematic Web Showcase</h2>
        <p>
          Integrate the <code>ScrollVideoScene</code> component into future landing pages to build
          immersive storytelling experiences with zero codec bottlenecks.
        </p>
        <Link href="/" className="back-btn">
          Return to Home
        </Link>
      </section>
    </div>
  );
}
