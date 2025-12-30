import { useEffect, useRef, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your enquiry. We will respond shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="bg-charcoal min-h-screen section-padding">
        <div ref={sectionRef} className="content-container">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Contact Info */}
            <div>
              <div 
                className={`gold-divider mb-12 transition-all duration-700 ${
                  isVisible ? "opacity-100 w-[60px]" : "opacity-0 w-0"
                }`} 
              />
              
              <h1 
                className={`font-serif text-4xl md:text-5xl text-off-white mb-8 transition-all duration-700 delay-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Reach Us
              </h1>

              <p 
                className={`text-off-white/70 mb-12 max-w-md transition-all duration-700 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                We welcome sincere enquiries from those interested in pursuing 
                classical music education at Shikharam.
              </p>

              {/* Contact Details */}
              <div 
                className={`space-y-6 transition-all duration-700 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-off-white">Shikharam School of Classical Arts</p>
                    <p className="text-warm-grey text-sm">Jayanagar, Bengaluru</p>
                    <p className="text-warm-grey text-sm">Karnataka 560041</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-gold flex-shrink-0" size={18} />
                  <a 
                    href="tel:+919876543210" 
                    className="text-off-white hover:text-gold transition-colors duration-300"
                  >
                    +91 98765 43210
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <MessageCircle className="text-gold flex-shrink-0" size={18} />
                  <a 
                    href="https://wa.me/919876543210" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-off-white hover:text-gold transition-colors duration-300"
                  >
                    WhatsApp
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="text-gold flex-shrink-0" size={18} />
                  <a 
                    href="mailto:hello@shikharam.in" 
                    className="text-off-white hover:text-gold transition-colors duration-300"
                  >
                    hello@shikharam.in
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              className={`transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h2 className="font-serif text-2xl text-off-white mb-8">
                Send an Enquiry
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-charcoal-light border-border text-off-white placeholder:text-warm-grey focus:border-gold focus:ring-0 h-12"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-charcoal-light border-border text-off-white placeholder:text-warm-grey focus:border-gold focus:ring-0 h-12"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-charcoal-light border-border text-off-white placeholder:text-warm-grey focus:border-gold focus:ring-0 resize-none"
                  />
                </div>

                <Button type="submit" variant="elegant" size="lg" className="w-full md:w-auto">
                  Submit Enquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
