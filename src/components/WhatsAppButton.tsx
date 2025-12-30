import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919876543210"; // Replace with actual number
  const message = "Hello, I would like to enquire about classes at Shikharam.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 md:hidden bg-charcoal-light border border-gold/30 text-gold p-4 rounded-full shadow-lg hover:bg-charcoal transition-colors duration-300"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppButton;
