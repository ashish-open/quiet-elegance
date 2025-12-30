import { useEffect, useRef, useState } from "react";

const disciplines = [
  {
    name: "Classical Vocal",
    description: "Hindustani and Carnatic traditions",
  },
  {
    name: "Instrumental",
    description: "Veena, Sitar, and allied instruments",
  },
  {
    name: "Rhythm & Percussion",
    description: "Mridangam, Tabla, and tala studies",
  },
  {
    name: "Theory & Musicology",
    description: "Raga, composition, and aesthetic inquiry",
  },
];

const DisciplinesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-charcoal section-padding"
    >
      <div className="content-container">
        <div 
          className={`gold-divider mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 w-[60px]" : "opacity-0 w-0"
          }`} 
        />
        
        <h2 
          className={`font-serif text-3xl md:text-4xl text-off-white mb-16 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          What We Teach
        </h2>

        <div className="space-y-8 max-w-2xl">
          {disciplines.map((discipline, index) => (
            <div 
              key={discipline.name}
              className={`border-b border-border pb-6 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <h3 className="font-serif text-xl md:text-2xl text-off-white mb-2">
                {discipline.name}
              </h3>
              <p className="text-warm-grey text-sm">
                {discipline.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisciplinesSection;
