import { useEffect, useRef, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const learningAreas = [
  {
    title: "Classical Vocal Music",
    description: "The voice is the primordial instrument. Our vocal training encompasses both Hindustani and Carnatic traditions, beginning with the fundamentals of sruthi, swara, and raga, and progressing through the intricate forms of composition and improvisation.",
  },
  {
    title: "Instrumental Studies",
    description: "We offer instruction in traditional stringed instruments including the Veena and Sitar. Students learn not merely technique, but the art of making the instrument speak—of finding one's voice through its strings.",
  },
  {
    title: "Rhythm & Percussion",
    description: "Tala is the heartbeat of classical music. Through training in Mridangam and Tabla, students develop an intimate understanding of rhythmic structure, mathematical precision, and the subtle art of accompanying.",
  },
  {
    title: "Theory & Musicology",
    description: "Understanding the 'why' enriches the 'how'. Our theory curriculum explores raga grammar, compositional forms, aesthetic principles, and the philosophical foundations that have shaped Indian classical music.",
  },
];

const Courses = () => {
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
      {/* Introduction */}
      <section className="bg-off-white section-padding">
        <div ref={sectionRef} className="content-container max-w-3xl">
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
            Our Approach to Learning
          </h1>

          <p 
            className={`text-charcoal/80 leading-relaxed text-lg mb-8 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            At Shikharam, we do not offer 'courses' in the conventional sense. 
            There are no fixed durations, no certificates, no levels to 
            complete. Instead, we offer guidance along a path—one that unfolds 
            according to each student's capacity, commitment, and readiness.
          </p>

          <p 
            className={`text-charcoal/80 leading-relaxed transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            The classical tradition teaches us that learning is not linear. 
            Progress is measured not in songs mastered but in understanding 
            deepened, in the quality of listening refined, in the ego gradually 
            surrendered to the music itself.
          </p>
        </div>
      </section>

      {/* Learning Areas */}
      <section className="bg-charcoal section-padding">
        <div className="content-container max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl text-off-white mb-16">
            Areas of Study
          </h2>

          <div className="space-y-16">
            {learningAreas.map((area, index) => (
              <div 
                key={area.title}
                className="border-b border-border pb-12 last:border-0"
              >
                <h3 className="font-serif text-xl md:text-2xl text-off-white mb-4">
                  {area.title}
                </h3>
                <p className="text-off-white/70 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="bg-off-white section-padding">
        <div className="content-container max-w-3xl">
          <div className="gold-divider mb-12" />
          
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-8">
            What We Expect
          </h2>

          <div className="space-y-6 text-charcoal/80 leading-relaxed">
            <p>
              <strong className="text-charcoal">Regular practice.</strong> Learning 
              classical music requires daily engagement with the material. We 
              expect students to maintain a consistent practice routine between 
              sessions.
            </p>
            <p>
              <strong className="text-charcoal">Patience.</strong> Progress in 
              classical music is often slow and sometimes invisible. Students 
              must cultivate the patience to trust the process.
            </p>
            <p>
              <strong className="text-charcoal">Respect for tradition.</strong> While 
              we encourage questions and exploration, we ask that students 
              approach the tradition with humility and openness.
            </p>
            <p>
              <strong className="text-charcoal">Long-term commitment.</strong> Classical 
              music is not a hobby to be picked up and set down. Those who 
              join Shikharam should be prepared for a relationship that 
              extends over years, not months.
            </p>
          </div>

          <div className="mt-16 pt-12 border-t border-charcoal/10 text-center">
            <p className="text-charcoal/60 mb-6">
              If our approach resonates with you, we invite you to reach out.
            </p>
            <Button asChild variant="elegant-light" size="lg">
              <Link to="/contact">Begin a Conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;
