import React from 'react';
import SectionLabel from '../ui/SectionLabel';
import { CircularTestimonials } from '../ui/CircularTestimonials';
import { reviewsData } from '../../data/reviewsData';
import StarRating from '../ui/StarRating';

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-background-dark relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
      </div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <SectionLabel>Client Voices</SectionLabel>
          <div className="flex flex-col items-center mt-4">
            <span className="text-7xl md:text-8xl font-serif text-primary leading-none">4.8</span>
            <div className="mt-4">
              <StarRating rating={5} />
            </div>
            <p className="text-stone-500 mt-4 uppercase tracking-widest text-xs">
              Based on <span className="text-white font-bold">10,742+</span> Verified Logs
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <CircularTestimonials 
            testimonials={reviewsData}
            autoplay={true}
            colors={{
              name: "white",
              designation: "#94a3b8",
              testimony: "#e2e8f0",
              accent: "#D4AF37"
            }}
            fontSizes={{
              name: "clamp(1.5rem, 5vw, 2.5rem)",
              designation: "0.875rem",
              quote: "clamp(1rem, 3vw, 1.5rem)"
            }}
          />
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-primary/30 text-primary text-sm font-sans tracking-widest uppercase hover:bg-primary hover:text-black transition-all duration-500"
          >
            Read More on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
