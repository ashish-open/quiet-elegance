import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="content-container py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-off-white mb-4">Shikharam</h3>
            <p className="text-warm-grey text-sm leading-relaxed max-w-xs">
              Learning art, the classical way. Where discipline meets expression.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase mb-6">Navigate</h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About" },
                { href: "/courses", label: "Learning" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-off-white/70 text-sm hover:text-off-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold text-xs tracking-widest uppercase mb-6">Reach Us</h4>
            <address className="not-italic text-sm text-off-white/70 space-y-2">
              <p>Shikharam School of Classical Arts</p>
              <p>Bengaluru, Karnataka</p>
              <p className="pt-2">
                <a 
                  href="mailto:hello@shikharam.in" 
                  className="hover:text-off-white transition-colors duration-300"
                >
                  hello@shikharam.in
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-warm-grey text-xs text-center">
            © {new Date().getFullYear()} Shikharam. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
