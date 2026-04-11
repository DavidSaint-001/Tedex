import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter, Send, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Using your provided EmailJS Credentials
    const SERVICE_ID = "service_5gginqu";
    const TEMPLATE_ID = "template_mdnw30x";
    const PUBLIC_KEY = "f0poUfzQw_6i3mD79";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setIsSending(false);
        setIsSubmitted(true);
      })
      .catch((error) => {
        setIsSending(false);
        alert("Something went wrong. Please try again.");
        console.error("EmailJS Error:", error);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Write Us an E-mail',
      value: 'tedxokumagbaave@gmail.com',
      href: 'mailto:tedxokumagbaave@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Primary Venue',
      value: 'Okumagba Ave, Warri',
      href: null
    },
    {
      icon: Phone,
      label: 'Office Line',
      value: '+234 7066112211',
      href: 'tel:+2347066112211'
    }
  ];

  const socials = [
    { icon: Instagram, href: 'https://www.instagram.com/tedxokumagbaave/', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 md:pt-40 pb-20 px-4 sm:px-6 lg:px-8 selection:bg-[#eb0028]">
      <main className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <section className="mb-12 md:mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#eb0028] font-black uppercase tracking-[0.3em] text-[10px] block mb-4">Get in Touch</span>
            <h1 className="text-5xl sm:text-7xl lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.9]">
              LET'S <br /><span className="text-zinc-800">CONNECT.</span>
            </h1>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
          
          {/* Form Side */}
          <motion.div className="bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-14 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div key="form-container">
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-8">Send a Message</h2>
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-[#eb0028] ml-1">Full Name</label>
                        <input type="text" name="name" required placeholder="Jane Doe" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:border-[#eb0028] outline-none transition-all text-lg" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-[#eb0028] ml-1">Email</label>
                        <input type="email" name="email" required placeholder="jane@email.com" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:border-[#eb0028] outline-none transition-all text-lg" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-[#eb0028] ml-1">Subject</label>
                      <input type="text" name="subject" required placeholder="General Inquiry" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:border-[#eb0028] outline-none transition-all text-lg" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-[#eb0028] ml-1">Message</label>
                      <textarea name="message" required rows={4} placeholder="Tell us more..." className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 focus:border-[#eb0028] outline-none transition-all text-lg resize-none" />
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isSending}
                      className="w-full py-5 md:py-8 bg-[#eb0028] text-white rounded-2xl md:rounded-3xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-white hover:text-black transition-all disabled:opacity-50"
                    >
                      {isSending ? <Loader2 className="animate-spin" /> : <Send size={18} />}
                      {isSending ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-20"
                >
                  <div className="w-24 h-24 bg-[#eb0028]/10 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="w-12 h-12 text-[#eb0028]" />
                  </div>
                  <h3 className="text-3xl font-black uppercase mb-4 tracking-tight">Sent Successfully</h3>
                  <p className="text-zinc-500 mb-8 max-w-xs mx-auto text-lg">We have received your message and will reach out shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-black uppercase tracking-widest text-[#eb0028] border-b-2 border-[#eb0028] pb-1"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Info Side (RESTORED) */}
          <div className="flex flex-col gap-6 md:gap-8 order-1 lg:order-2">
            <div className="grid grid-cols-1 gap-4 md:gap-6">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="bg-zinc-900/30 border border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-10 flex items-center gap-5 md:gap-8 group"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#eb0028]/10 rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <info.icon className="w-5 h-5 md:w-7 md:h-7 text-[#eb0028]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-1">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-lg md:text-2xl font-black tracking-tight hover:text-[#eb0028] transition-colors truncate block">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg md:text-2xl font-black tracking-tight text-white/90 truncate block">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-zinc-900/30 border border-white/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 text-center md:text-left"
            >
              <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-zinc-600 mb-6 md:mb-8">Digital Ecosystem</h3>
              <div className="flex justify-center md:justify-start gap-4 md:gap-8">
                {socials.map((social, idx) => (
                  <a
                    key={idx} href={social.href}
                    className="w-14 h-14 md:w-16 md:h-16 bg-white/5 rounded-2xl md:rounded-3xl flex items-center justify-center hover:bg-[#eb0028] transition-all duration-500 group"
                  >
                    <social.icon size={22} className="md:size-26 group-hover:scale-110 transition-transform text-white" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Contact;