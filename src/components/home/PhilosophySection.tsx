import { useEffect, useRef, useState } from "react";

const PhilosophySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-off-white section-padding"
    >
      <div className="content-container max-w-3xl">
        {/* Gold divider */}
        <div 
          className={`gold-divider mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 w-[60px]" : "opacity-0 w-0"
          }`} 
        />
        
        <h2 
          className={`font-serif text-3xl md:text-4xl text-charcoal mb-8 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          The Pursuit of Mastery
        </h2>
        
        <p 
          className={`text-charcoal/80 leading-relaxed text-base md:text-lg transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          At Shikharam, we believe that true artistry emerges from patience and devotion. 
          Our approach honors the guru-shishya tradition, where knowledge is transmitted 
          not merely through instruction, but through presence, practice, and an 
          unwavering commitment to the classical path.
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;
