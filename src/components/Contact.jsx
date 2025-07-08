import { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    })
    .catch(error => {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again later.');
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#0f172a] text-gray-200 relative overflow-hidden">
      {/* Cosmic background */}
      <div className="cosmic-contact-bg">
        <div className="contact-particle" style={{top: '10%', left: '8%', animationDelay: '0s'}}></div>
        <div className="contact-particle" style={{top: '30%', left: '90%', animationDelay: '2s'}}></div>
        <div className="contact-particle" style={{top: '60%', left: '5%', animationDelay: '4s'}}></div>
        <div className="contact-particle" style={{top: '80%', left: '85%', animationDelay: '6s'}}></div>
        <div className="contact-particle" style={{top: '45%', left: '50%', animationDelay: '8s'}}></div>
        <div className="contact-dust" style={{width: '160px', height: '160px', top: '15%', left: '15%', animationDelay: '0s'}}></div>
        <div className="contact-dust" style={{width: '200px', height: '200px', top: '65%', left: '75%', animationDelay: '5s'}}></div>
        <div className="contact-nebula contact-nebula-1"></div>
        <div className="contact-nebula contact-nebula-2"></div>
        <div className="contact-line contact-line-1"></div>
        <div className="contact-line contact-line-2"></div>
      </div>

      <Toaster position="top-right" />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow animate-gradient-x">
          Get In Touch
        </h2>

        <div className="flex flex-col md:flex-row">
          {/* Left Side - Contact Info */}
          <div className="md:w-1/2 mb-12 md:mb-0 animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6">Let's talk about your project</h3>
            <p className="text-gray-400 mb-8 max-w-md">
              I'm currently available for freelance work. If you have a project that you want to get started or think you need my help with something, then get in touch.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-gray-800 p-3 rounded-full mr-4 cosmic-contact-icon">
                  <FontAwesomeIcon icon={faEnvelope} className="text-blue-400" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:digvijayrana369@gmail.com" className="text-gray-400 hover:text-blue-400 transition">digvijayrana369@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-gray-800 p-3 rounded-full mr-4 cosmic-contact-icon">
                  <FontAwesomeIcon icon={faPhoneAlt} className="text-purple-400" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+919813824250" className="text-gray-400 hover:text-purple-400 transition">+91 98138 24250</a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-gray-800 p-3 rounded-full mr-4 cosmic-contact-icon">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-400" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-400">Kota, Rajasthan</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <a href="https://github.com/digvijay778" target="_blank" rel="noopener noreferrer"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-600 cosmic-contact-social transition">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/digvijay-singh-759642297/" target="_blank" rel="noopener noreferrer"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-500 cosmic-contact-social transition">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.instagram.com/digvijay.singh17/" target="_blank" rel="noopener noreferrer"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-pink-500 cosmic-contact-social transition">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="md:w-1/2 md:pl-12 animate-slide-in-right">
            <form className="space-y-6 cosmic-contact-form" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full font-medium hover:opacity-90 transition w-full md:w-auto cosmic-contact-btn"
              >
                Send Message <FontAwesomeIcon icon={faPaperPlane} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
