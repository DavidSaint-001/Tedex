import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../assets/images/icon.png"
import image2 from "../assets/images/partner 1.png";
import image3 from "../assets/images/partner 2.png";

const Partners = () => {
  const partnerLogos = [
    { name: 'Partner 1', img: image1 },
    { name: 'Partner 2', img: image2 },
    { name: 'Partner 3', img: image3 },
  ];

  const duplicatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className="py-24 bg-black overflow-hidden border-y border-white/5 mb-30">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <span className="text-[#eb0028] font-black uppercase tracking-[0.4em] text-[10px] block mb-4">
            Our Collaborators
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white">
            TRUSTED BY <span className="text-[#eb0028] text-outline">LEADERS.</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-10">
        
        {/* Row 1: Moving Left */}
        <div className="flex overflow-hidden select-none">
          <motion.div 
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex flex-nowrap gap-12 items-center"
          >
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="w-48 md:w-64 h-32 md:h-40 flex-shrink-0 bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden"
              >
                <img 
                  src={logo.img} 
                  alt={logo.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Moving Right */}
        <div className="flex overflow-hidden select-none">
          <motion.div 
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex flex-nowrap gap-12 items-center"
          >
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={index} 
                className="w-48 md:w-64 h-32 md:h-40 flex-shrink-0 bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden"
              >
                <img 
                  src={logo.img} 
                  alt={logo.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 text-center"
      >
        <p className="text-zinc-600 text-sm font-medium uppercase tracking-widest">
          Want to partner with TEDxOkumagbaAve? 
          <a href="/contact" className="text-[#eb0028] ml-2 font-black border-b border-[#eb0028] pb-0.5 hover:text-white hover:border-white transition-all">
            Inquire Here
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default Partners;