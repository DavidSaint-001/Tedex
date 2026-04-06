import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "TEDxOkumagbaAve opened my mind to ideas I never considered. The energy in the room was electric.",
    author: "Sarah O.",
    role: "Entrepreneur",
    color: "#eb0028"
  },
  {
    quote: "The speakers were world-class. It wasn't just a talk; it was a blueprint for the future of Warri.",
    author: "David A.",
    role: "Software Engineer",
    color: "#000000"
  },
  {
    quote: "An event that sparks real conversations. I left feeling empowered to drive change in my community.",
    author: "Aisha M.",
    role: "Educator",
    color: "#eb0028"
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-[#eb0028] font-bold tracking-[0.3em] uppercase text-xs mb-4">
              Community Impact
            </h2>
            <h3 className="text-black text-5xl md:text-7xl font-black leading-tight tracking-tighter">
              VOICES OF THE <br /> 
              <span className="text-gray-200 uppercase">COMMUNITY</span>
            </h3>
          </motion.div>
          
          <motion.p 
            className="text-gray-400 text-sm md:text-base max-w-xs font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            The impact of TEDxOkumagbaAve goes beyond the stage. It lives in the minds of our attendees.
          </motion.p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative group pt-12"
            >
              {/* Floating Quote Icon */}
              <div className="absolute top-0 left-0 text-gray-100 group-hover:text-[#eb0028]/10 transition-colors duration-500">
                <Quote size={80} fill="currentColor" stroke="none" />
              </div>

              <div className="relative z-10 border-l border-gray-100 pl-8 group-hover:border-[#eb0028] transition-all duration-500">
                <blockquote className="text-xl md:text-2xl font-bold text-black leading-snug mb-8 tracking-tight italic">
                  "{t.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder with Initials */}
                  <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-black group-hover:text-white transition-all duration-300">
                    <span className="text-xs font-bold uppercase">{t.author[0]}</span>
                  </div>
                  
                  <div>
                    <p className="font-black text-black text-sm uppercase tracking-widest leading-none">
                      {t.author}
                    </p>
                    <p className="text-[#eb0028] text-[10px] font-bold tracking-widest uppercase mt-1">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Number */}
              <span className="absolute -bottom-8 right-0 text-8xl font-black text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Action Bar */}
        <motion.div 
          className="mt-32 p-12 bg-black rounded-sm flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative"
          whileHover={{ scale: 1.01 }}
        >
          {/* Background Text */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 text-white opacity-[0.03] text-9xl font-black select-none pointer-events-none">
            ATTEND
          </div>

          <div className="relative z-10">
            <h4 className="text-white text-3xl font-bold tracking-tighter">Ready to be part of the story?</h4>
            <p className="text-gray-400 text-sm mt-2 font-medium">Register for our next event at Okumagba Ave.</p>
          </div>

          <a className="relative z-10 bg-[#eb0028] text-white px-10 py-4 rounded-full font-bold text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all"
          href="https://tix.africa/discover/tedxokumagba"
          >
            Get Tickets
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;