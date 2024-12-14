'use client';

import { Navbar } from '@/components/navigation/Navbar';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';

export function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Features />
      </div>
    </div>
  );
}