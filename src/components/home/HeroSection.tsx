import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to trigger animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center bg-charcoal relative">
      <div className="content-container text-center">
        {/* Logo / Brand Name */}
        <h1 
          className={`font-serif text-5xl md:text-7xl lg:text-8xl text-off-white mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Shikharam
        </h1>
        
        {/* Tagline */}
        <p 
          className={`text-gold text-lg md:text-xl tracking-wide mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Learning Art, The Classical Way
        </p>
        
        {/* Sub-tagline */}
        <p 
          className={`text-warm-grey text-sm md:text-base italic transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Where discipline meets expression.
        </p>
      </div>

      {/* Subtle scroll indicator */}
      <div 
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
