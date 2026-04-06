import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight, X, Play, Ticket, History } from "lucide-react";
import { eventsData } from "../data/events";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="bg-black min-h-screen pt-32 pb-24 px-6 text-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none"
          >
            THE <span className="text-[#eb0028]">STAGES.</span>
          </motion.h1>
          <p className="text-zinc-500 mt-6 max-w-lg text-sm tracking-widest uppercase font-bold">
            Honoring our past journeys while preparing for the 2026 session.
          </p>
        </div>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {eventsData.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5">
                
                {/* FULL COLOR IMAGE (NO OVERLAY) */}
                <img 
                  src={event.img} 
                  alt={event.theme}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />

                {/* PAST BADGE (PERSISTENT) */}
                {!event.isUpcoming && (
                  <div className="absolute top-6 left-6 z-20">
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                      <History size={12} className="text-[#eb0028]" />
                      <span className="text-white text-[9px] font-black tracking-[0.2em] uppercase">
                        Past Event
                      </span>
                    </div>
                  </div>
                )}

                {/* BOTTOM INFO OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
                  <div className="flex items-center gap-2 text-[#eb0028] mb-2 font-black tracking-widest text-[10px] uppercase">
                    <Calendar size={12} />
                    <span>{event.date}</span>
                  </div>
                  
                  {/* NAME & VIEW HISTORY ROW */}
                  <div className="flex items-end justify-between gap-4">
                    <h3 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">
                      {event.theme}
                    </h3>
                    
                    <button 
                      onClick={() => setSelectedEvent(event)}
                      className="flex items-center gap-2 text-white/50 hover:text-white transition-colors group/btn pb-1 shrink-0"
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        {event.isUpcoming ? "Details" : "History"}
                      </span>
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
        {selectedEvent && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] cursor-pointer"
            />

            <motion.div
              initial={isMobile ? { y: "100%" } : { x: "100%" }}
              animate={isMobile ? { y: 0 } : { x: 0 }}
              exit={isMobile ? { y: "100%" } : { x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className={`fixed z-[101] bg-white/10 backdrop-blur-3xl border-white/10 flex flex-col
                ${isMobile ? "bottom-0 left-0 right-0 h-[85vh] rounded-t-[3rem] border-t" : "top-0 right-0 w-[550px] h-full border-l"}`}
            >
              <button onClick={() => setSelectedEvent(null)} className="absolute top-8 right-8 p-3 bg-white/5 rounded-full text-white hover:bg-[#eb0028] transition-colors">
                <X size={20} />
              </button>

              <div className="p-10 md:p-16 overflow-y-auto custom-scrollbar flex-1">
                <div className="w-full h-64 rounded-[2rem] overflow-hidden mb-10 shadow-2xl">
                  <img src={selectedEvent.img} alt={selectedEvent.theme} className="w-full h-full object-cover" />
                </div>

                <span className="text-[#eb0028] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                  TEDxOkumagbaAve {selectedEvent.year}
                </span>
                <h2 className="text-5xl font-black uppercase tracking-tighter leading-none mb-8">
                  {selectedEvent.theme}
                </h2>
                
                {/* Stats */}
                <div className="flex justify-between py-8 border-y border-white/10 mb-10 text-center">
                   <div className="flex-1">
                      <p className="text-[9px] font-black text-zinc-500 uppercase mb-1">Speakers</p>
                      <p className="text-xl font-black">{selectedEvent.stats.speakers}</p>
                   </div>
                   <div className="flex-1 border-x border-white/10 px-4">
                      <p className="text-[9px] font-black text-zinc-500 uppercase mb-1">Attendees</p>
                      <p className="text-xl font-black">{selectedEvent.stats.attendees}</p>
                   </div>
                   <div className="flex-1">
                      <p className="text-[9px] font-black text-zinc-500 uppercase mb-1">Talks</p>
                      <p className="text-xl font-black">{selectedEvent.stats.talks}</p>
                   </div>
                </div>

                <div className="space-y-8 mb-12">
                   <div>
                      <h4 className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
                        <MapPin size={14} className="text-[#eb0028]" /> Venue Details
                      </h4>
                      <p className="text-lg font-bold uppercase text-white/90">{selectedEvent.venue}</p>
                   </div>
                   <div>
                      <h4 className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-3">Event Narrative</h4>
                      <p className="text-zinc-300 leading-relaxed text-lg">{selectedEvent.description}</p>
                   </div>
                </div>

                <div className="pt-4">
                   {selectedEvent.isUpcoming ? (
                     <button 
                     className="w-full py-6 bg-[#eb0028] text-white rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all"
                     href="https://tix.africa/discover/tedxokumagba"
                     target="_blank"
                     rel="noopener noreferrer"                    
                     >
                       <Ticket size={18} /> Register for 2026
                     </button>
                   ) : (
                     <button className="w-full py-6 bg-white text-black rounded-2xl font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-[#eb0028] hover:text-white transition-all">
                       <Play size={18} fill="currentColor" /> Watch Highlight Reel
                     </button>
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

export default Events;