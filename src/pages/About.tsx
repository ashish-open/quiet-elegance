import { useEffect, useRef, useState } from "react";
import Layout from "@/components/layout/Layout";

const About = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation immediately on mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <article className="bg-off-white min-h-screen">
        <div ref={contentRef} className="content-container section-padding max-w-3xl">
          {/* Gold divider */}
          <div 
            className={`gold-divider mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 w-[60px]" : "opacity-0 w-0"
            }`} 
          />
          
          <h1 
            className={`font-serif text-4xl md:text-5xl text-charcoal mb-12 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            About Shikharam
          </h1>

          <div 
            className={`prose prose-lg max-w-none transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-charcoal/80 leading-relaxed mb-8">
              Shikharam was established with a singular purpose: to create a space 
              where the classical arts could be learned in their authentic form, 
              free from the compromises of commercialization and the haste of 
              modern pedagogy.
            </p>

            <p className="text-charcoal/80 leading-relaxed mb-8">
              The name 'Shikharam' translates to 'peak' or 'summit'—a reference 
              not to a destination, but to the journey itself. In the classical 
              tradition, mastery is understood not as an endpoint but as a 
              perpetual ascent, where each level of attainment reveals new 
              horizons of possibility.
            </p>

            <div className="gold-divider my-12" />

            <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-6">
              Our Philosophy
            </h2>

            <p className="text-charcoal/80 leading-relaxed mb-8">
              We follow the guru-shishya parampara—the traditional lineage of 
              teacher and student—where knowledge is transmitted through direct, 
              sustained engagement. This is not a method of convenience; it is 
              a commitment that demands patience from both teacher and student.
            </p>

            <p className="text-charcoal/80 leading-relaxed mb-8">
              Our curriculum is not designed for quick results. We do not 
              promise proficiency in weeks or performances in months. What we 
              offer instead is a foundation—deep, considered, and lasting.
            </p>

            <div className="gold-divider my-12" />

            
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default About;
