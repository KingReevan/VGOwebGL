import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/7022254378" // Replace with WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-49 bg-[#25D366]/75 text-white p-3 rounded-full shadow-lg hover:scale-100 sm:hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={40} className="opacity-100"/>
    </a>
  );
}

export default WhatsAppButton;
