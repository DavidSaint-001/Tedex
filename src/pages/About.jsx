import { motion } from "framer-motion";
import { Globe, Users, Video, Target, Zap, Microscope } from "lucide-react";
import img from "../assets/images/about img.avif";

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "circOut" }
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-20 overflow-hidden">
      
      {/* SECTION 1: ABOUT TEDx (GLOBAL MOVEMENT) */}
      <section className="py-24 px-6 relative border-b border-white/5 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-3 mb-6">
              {/* <span className="w-10 h-[2px] bg-[#eb0028]"></span> */}
              <span className="text-[#eb0028] font-black tracking-[0.4em] text-[10px] uppercase underline decoration-2 offset-4">Global Movement</span>
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
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img src={img} alt="TEDx Global" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-[#eb0028] text-white p-10 rounded-2xl hidden md:block">
              <span className="block text-5xl font-black tracking-tighter">3000+</span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-80">Global Events Yearly</span>
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

          {/* 2026 STATS CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              { icon: <Users size={32}/>, title: "400", desc: "Curated In-Person Attendees" },
              { icon: <Globe size={32}/>, title: "Thousands", desc: "Live Online Viewers" },
              { icon: <Target size={32}/>, title: "Diverse", desc: "Entrepreneurs, Students & Civic Leaders" }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="p-10 bg-white/5 border border-white/10 rounded-[2rem] text-center group hover:bg-[#eb0028] transition-all duration-500"
              >
                <div className="text-[#eb0028] group-hover:text-white flex justify-center mb-6">{stat.icon}</div>
                <h4 className="text-4xl font-black tracking-tighter mb-2">{stat.title}</h4>
                <p className="text-zinc-500 group-hover:text-white/80 text-[10px] font-bold tracking-widest uppercase">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: 2026 VISION (THE MANIFESTO) */}
      <section className="py-32 px-6 bg-[#eb0028] text-white relative overflow-hidden">
         {/* Big "X" Backdrop */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[60vw] font-black text-black/5 leading-none select-none pointer-events-none">X</div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div {...fadeIn}>
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-white/40"></span>
              <span className="text-[12px] font-black tracking-[0.5em] uppercase">2026 Theme: Shaping Tomorrow</span>
              <span className="w-12 h-[1px] bg-white/40"></span>
            </div>
            
            <h3 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-12 uppercase italic">
              Cities Do Not Transform By <br /> <span className="underline decoration-white/20 underline-offset-8">Accident.</span>
            </h3>

            <div className="space-y-8 text-xl md:text-2xl font-medium leading-relaxed max-w-4xl mx-auto opacity-90">
              <p>
                They evolve based on the ideas championed, the investments made, and the courage demonstrated by those who call them home.
              </p>
              <p className="font-black text-3xl md:text-5xl tracking-tighter border-y border-white/20 py-10 my-10">
                This is not just an event. <br />
                <span className="text-black/40">It is a platform shaping the next chapter of Warri’s story.</span>
              </p>
              <p>
                Join us as we explore how individuals, institutions, and communities actively design the future they desire.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="py-32 bg-white text-center border-t border-gray-100">
        <motion.div {...fadeIn} className="max-w-2xl mx-auto px-6">
          <h4 className="text-black text-4xl font-black tracking-tighter mb-8">Ready to Shape the Future?</h4>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://tix.africa/discover/tedxokumagba" target="_blank" className="bg-[#eb0028] text-white px-12 py-5 rounded-full font-black text-xs tracking-widest uppercase hover:bg-black transition-all">Secure Attendee Seat</a>
            <a href="" className="bg-black text-white px-12 py-5 rounded-full font-black text-xs tracking-widest uppercase hover:bg-[#eb0028] transition-all">Apply to Volunteer</a>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default About;