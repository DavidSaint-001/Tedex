import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, History, X, Play, Instagram, Twitter, Linkedin } from "lucide-react";
import s1 from "../assets/images/hero3.avif";
import s2 from "../assets/images/paddy iyamu.avif";
import s3 from "../assets/images/nichole.avif";
import s4 from "../assets/images/mr ben.avif";
import s8 from "../assets/images/hero2.avif";

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const speakers = [
    {
      name: "Erigga",
      role: "musician",
      topic: "How environment shapes creativity",
      bio: "Erigga is a Nigerian rapper from Warri known for his street storytelling and Pidgin English style, often called the King of the South.",  
      img: s8,
      isPast: true,
      year: "2024",
      socials: { ig: "#", x: "#", li: "#" },
      videoUrl: "#"
    },
   
    {
      name: "Frances Ayanrouh",
      role: "Urban Planner",
      topic: "Women in entrepreneurship",
      bio: "Frances Ayanrouh is a passionate speaker and changemaker known for her work in empowering communities and driving meaningful conversations around growth, leadership, and impact.",
      img: s1,
      isPast: true,
      year: "2023",
      socials: { ig: "#", x: "#", li: "#" },
      videoUrl: "#"
    },
    {
      name: "Paddy Iyamu",
      role: "2026 Keynote",
      topic: "Leadership through service and discipline",
      bio: "Paddy Iyamu is a visionary leader and creative entrepreneur known for his work in community development and youth empowerment, inspiring others through innovation, leadership, and impact-driven initiatives.",
      img: s2,
      isPast: true,
      year: "2026",
      socials: { ig: "#", x: "#", li: "#" }
    },
    {
      name: "Nicole Yembra",
      role: "2026 Keynote",
      topic: "Building sustainable African businesses",
      bio: "Nicole Yembra is a dynamic speaker and creative professional known for her work in personal development and community impact, inspiring young people to embrace growth, innovation, and purpose.",
      img: s3,
      isPast: true,
      year: "2026",
      socials: { ig: "#", x: "#", li: "#" }
    },
    {
      name: "Ben Igbakpa",
      role: "2026 Keynote",
      topic: "The Architecture of Hope",
      bio: " mr Ben Igbakpa is a Nigerian leader and public servant known for his contributions to governance and community development, with a strong focus on empowering people and driving sustainable progress.",
      img: s4,
      isPast: true,
      year: "2026",
      socials: { ig: "#", x: "#", li: "#" }
    },
  ];

  return (
    <div className="bg-black min-h-screen pt-32 pb-24 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl text-white font-black tracking-tighter uppercase leading-none"
          >
            OUR <span className="text-[#eb0028]">VOICES.</span>
          </motion.h1>
          <p className="text-zinc-500 mt-6 max-w-lg text-sm tracking-widest uppercase font-bold">
            Honoring our past voices while preparing for the 2026 session.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {speakers.map((speaker, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5">
                
                {/* IMAGE (NO GRAYSCALE OVERLAY) */}
                <img 
                  src={speaker.img} 
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />

                {/* PAST BADGE (PERSISTENT) */}
                {speaker.isPast && (
                  <div className="absolute top-6 left-6 z-20">
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                      <History size={12} className="text-[#eb0028]" />
                      <span className="text-white text-[9px] font-black tracking-[0.2em] uppercase">
                        Past Speaker
                      </span>
                    </div>
                  </div>
                )}

                {/* INFO OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent p-10 flex flex-col justify-end">
                  <p className="text-[#eb0028] font-black tracking-widest text-[10px] uppercase mb-2">
                    {speaker.role}
                  </p>
                  
                  {/* NAME & VIEW HISTORY ROW */}
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">
                      {speaker.name}
                    </h3>
                    
                    <button 
                      onClick={() => setSelectedSpeaker(speaker)}
                      className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group/btn pb-1"
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest">View History</span>
                      <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ADAPTIVE SIDEBAR / BOTTOM SHEET */}
      <AnimatePresence>
        {selectedSpeaker && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSpeaker(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] cursor-pointer"
            />

            {/* Content Container */}
            <motion.div
              initial={isMobile ? { y: "100%" } : { x: "100%" }}
              animate={isMobile ? { y: 0 } : { x: 0 }}
              exit={isMobile ? { y: "100%" } : { x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed z-[101] bg-white/10 backdrop-blur-3xl border-white/10 shadow-2xl flex flex-col 
                ${isMobile 
                  ? "bottom-0 left-0 right-0 h-[85vh] rounded-t-[3rem] border-t" 
                  : "top-0 right-0 w-[500px] h-full border-l"
                }`}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-8 right-8 p-3 rounded-full bg-white/5 hover:bg-[#eb0028] text-white transition-all"
              >
                <X size={20} />
              </button>

              <div className="p-10 md:p-16 overflow-y-auto custom-scrollbar flex-1">
                {/* Speaker Header */}
                <div className="mb-12">
                  <span className="text-[#eb0028] font-black uppercase tracking-[0.3em] text-[10px] block mb-4">
                    {selectedSpeaker.isPast ? `Session ${selectedSpeaker.year}` : "2026 Keynote"}
                  </span>
                  <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                    {selectedSpeaker.name}
                  </h2>
                  <p className="text-zinc-400 font-bold uppercase text-sm tracking-widest">
                    {selectedSpeaker.role}
                  </p>
                </div>

                {/* Talk Info */}
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 mb-10">
                  <h4 className="text-[#eb0028] text-[10px] font-black uppercase tracking-widest mb-3">Topic Spoken</h4>
                  <p className="text-xl md:text-2xl font-bold text-white italic">"{selectedSpeaker.topic}"</p>
                </div>

                {/* Bio */}
                <div className="mb-12">
                  <h4 className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-4">Biography</h4>
                  <p className="text-zinc-300 leading-relaxed text-lg">{selectedSpeaker.bio}</p>
                </div>

                {/* Socials & Action */}
                <div className="space-y-8 pt-8 border-t border-white/10">
                  <div className="flex gap-6 items-center">
                    <h4 className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Connect:</h4>
                    <div className="flex gap-4 text-white/50">
                       <a href={selectedSpeaker.socials.ig} className="hover:text-[#eb0028] transition-colors"><Instagram size={20}/></a>
                       <a href={selectedSpeaker.socials.x} className="hover:text-[#eb0028] transition-colors"><Twitter size={20}/></a>
                       <a href={selectedSpeaker.socials.li} className="hover:text-[#eb0028] transition-colors"><Linkedin size={20}/></a>
                    </div>
                  </div>

                  {selectedSpeaker.isPast && (
                    <a 
                      href={selectedSpeaker.videoUrl} 
                      className="flex items-center justify-center gap-3 w-full py-6 bg-[#eb0028] text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all"
                    >
                      <Play size={18} fill="currentColor" /> Watch Full Clip
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Speakers;