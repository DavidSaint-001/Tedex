import { motion } from "framer-motion";
import { Globe, Users, Video, Target } from "lucide-react";
import img from "../assets/images/new about img.avif";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "circOut" }
  };

  return (
    <div className="bg-white min-h-screen pt-20 overflow-x-hidden">
      
      {/* SECTION 1: ABOUT TEDx (GLOBAL MOVEMENT) */}
      {/* Changed background to white to contrast with the dark hero/footer */}
      <section className="py-24 px-6 relative border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#eb0028] font-black tracking-[0.4em] text-[10px] uppercase border-b-2 border-[#eb0028] pb-1">
                Global Movement
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-8 text-black uppercase">
              Ideas Worth <br /> <span className="text-gray-200 italic font-light">Spreading.</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-medium">
              <p>
                TEDx is a globally recognized platform licensed by TED and independently organized in communities around the world. It is the gold standard for intellectual exchange, bringing together thought leaders and change-makers to share powerful ideas that inspire action.
              </p>
              <p className="text-sm border-l-4 border-[#eb0028] pl-6 py-2 bg-gray-50 italic">
                Every talk is professionally recorded and published on the global TEDx platform, giving our speakers and partners international visibility to millions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div className="flex flex-col gap-3">
                <Globe className="text-[#eb0028]" size={28} />
                <h4 className="font-black text-[10px] tracking-widest uppercase text-black">Universal Reach</h4>
              </div>
              <div className="flex flex-col gap-3">
                <Video className="text-[#eb0028]" size={28} />
                <h4 className="font-black text-[10px] tracking-widest uppercase text-black">Global Archive</h4>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)]">
              <img src={img} alt="TEDx Global" className="w-full h-full object-cover" />
            </div>
            {/* Responsive adjustment for the stats badge */}
            <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 bg-[#eb0028] text-white p-6 lg:p-10 rounded-2xl shadow-2xl">
              <span className="block text-4xl lg:text-5xl font-black tracking-tighter">3000+</span>
              <span className="text-[9px] lg:text-[10px] font-bold tracking-[0.3em] uppercase opacity-80">Global Events Yearly</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ABOUT TEDxOKUMAGBAAVE (THE PLATFORM) */}
      <section className="py-32 px-6 bg-zinc-950 text-white relative">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-24 max-w-4xl mx-auto">
            <h2 className="text-[#eb0028] font-bold tracking-[0.5em] text-[10px] uppercase mb-6">Warri's Leading Ideas Platform</h2>
            <h3 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-10 uppercase">
              Spotlighting the <br /> <span className="text-white/20">Niger Delta.</span>
            </h3>
            <p className="text-zinc-400 text-xl leading-relaxed">
              TEDxOkumagbaAve is committed to transformative voices. Previous editions have hosted respected public figures, industry leaders, and innovators, creating a high-level intellectual and cultural gathering in the heart of Delta State.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: <Users size={32}/>, title: "400", desc: "Curated In-Person Attendees" },
              { icon: <Globe size={32}/>, title: "Thousands", desc: "Live Online Viewers" },
              { icon: <Target size={32}/>, title: "Diverse", desc: "Entrepreneurs, Students & Civic Leaders" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10, backgroundColor: "#eb0028" }}
                className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] text-center group transition-all duration-500"
              >
                <div className="text-[#eb0028] group-hover:text-white flex justify-center mb-6 transition-colors">{stat.icon}</div>
                <h4 className="text-4xl font-black tracking-tighter mb-2">{stat.title}</h4>
                <p className="text-zinc-500 group-hover:text-white/80 text-[10px] font-bold tracking-widest uppercase transition-colors">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: 2026 VISION (THE MANIFESTO) */}
      <section className="py-32 px-6 bg-[#eb0028] text-white relative overflow-hidden">
         {/* Optimized Background "X" */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[70vw] font-black text-black/5 leading-none select-none pointer-events-none">X</div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div {...fadeIn}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="w-8 md:w-12 h-[1px] bg-white/40"></span>
              <span className="text-[10px] md:text-[12px] font-black tracking-[0.5em] uppercase">2026 Theme: SHAPES</span>
              <span className="w-8 md:w-12 h-[1px] bg-white/40"></span>
            </div>
            
            <h3 className="text-5xl md:text-[7rem] font-black tracking-tighter leading-[0.9] mb-12 uppercase italic">
              Cities Do Not Transform By <br /> <span className="underline decoration-white/30 underline-offset-8">Accident.</span>
            </h3>

            <div className="space-y-8 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto opacity-95">
              <p>
                They evolve based on the ideas championed, the investments made, and the courage demonstrated by those who call them home.
              </p>
              <p className="font-black text-3xl md:text-5xl tracking-tighter border-y border-white/20 py-12 my-12">
                This is not just an event. <br />
                <span className="text-black/30">It is a platform shaping the next chapter of Warri’s story.</span>
              </p>
              <p>
                Join us as we explore how individuals, institutions, and communities actively design the future they desire.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-32 bg-white text-center">
        <motion.div {...fadeIn} className="max-w-2xl mx-auto px-6">
          <h4 className="text-black text-4xl lg:text-5xl font-black tracking-tighter mb-10">Ready to Shape the Future?</h4>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://tix.africa/discover/tedxokumagba" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#eb0028] text-white px-10 py-5 rounded-full font-black text-xs tracking-widest uppercase hover:bg-black hover:scale-105 transition-all shadow-xl shadow-red-500/20"
            >
              Secure Attendee Seat
            </a>
            <a 
              href="https://forms.gle/SXvnbTjEfeFWJrWW7" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-10 py-5 rounded-full font-black text-xs tracking-widest uppercase hover:bg-[#eb0028] hover:scale-105 transition-all shadow-xl"
            >
              Apply to Volunteer
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default About;