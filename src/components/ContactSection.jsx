import { CONTACT } from "../constants";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const getIcon = (key) => {
  switch (key.toLowerCase()) {
    case "phone":
      return <FaPhone className="text-rose-300 mr-3" />;
    case "email":
      return <FaEnvelope className="text-rose-300 mr-3" />;
    case "address":
      return <FaMapMarkerAlt className="text-rose-300 mr-3" />;
    default:
      return null;
  }
};

const ContactSection = () => {
  return (
    <section className="container mx-auto py-16 px-4" id="contact">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl font-semibold tracking-tight">
        Contact Us
      </h2>

      <div className="text-neutral-400 flex flex-col gap-8">
        {CONTACT.map((detail) => (
          <div 
            key={detail.key} 
            className="flex justify-center items-center border-b-2 border-dotted border-neutral-700 pb-8 text-2xl tracking-tighter lg:text-3xl transition hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-rose-300/20"
          >
            {getIcon(detail.key)}
            {detail.value}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
