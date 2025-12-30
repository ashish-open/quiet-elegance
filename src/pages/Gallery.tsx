import { useEffect, useRef, useState } from "react";
import Layout from "@/components/layout/Layout";

// Placeholder images - to be replaced with actual images
const galleryImages = [
  { id: 1, alt: "Classical performance in intimate setting" },
  { id: 2, alt: "Veena practice session" },
  { id: 3, alt: "Guru-shishya learning moment" },
  { id: 4, alt: "Annual recital" },
  { id: 5, alt: "Morning riyaz" },
  { id: 6, alt: "Student concert" },
];

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <section className="bg-off-white min-h-screen section-padding">
        <div ref={sectionRef} className="content-container">
          <div 
            className={`gold-divider mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 w-[60px]" : "opacity-0 w-0"
            }`} 
          />
          
          <h1 
            className={`font-serif text-4xl md:text-5xl text-charcoal mb-8 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Gallery
          </h1>

          <p 
            className={`text-charcoal/70 max-w-2xl mb-16 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Moments from our journey—captured in stillness.
          </p>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {galleryImages.map((image, index) => (
              <div 
                key={image.id}
                className={`aspect-[4/3] bg-charcoal/5 border border-charcoal/10 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-charcoal/30 text-sm">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
