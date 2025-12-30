import { useEffect, useRef, useState } from "react";

const FounderSection = () => {
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
      className="bg-charcoal-light section-padding"
    >
      <div className="content-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Portrait placeholder */}
          <div 
            className={`aspect-[4/5] bg-charcoal border border-border transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-warm-grey text-sm">Portrait</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <div 
              className={`gold-divider mb-8 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 w-[60px]" : "opacity-0 w-0"
              }`} 
            />
            
            <h2 
              className={`font-serif text-3xl md:text-4xl text-off-white mb-6 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              The Guru
            </h2>
            
            <p 
              className={`text-off-white/80 leading-relaxed mb-6 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              With over four decades of practice and pedagogy, Vidwan Ramakrishna 
              has dedicated his life to preserving and transmitting the essence of 
              classical music. His approach emphasizes not just technical proficiency, 
              but the cultivation of an artistic temperament rooted in patience, 
              humility, and devotion.
            </p>
            
            <p 
              className={`text-warm-grey text-sm italic transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              "Music is not learned—it is lived."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
