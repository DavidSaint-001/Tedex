import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Instagram, Linkedin, Twitter, Quote, Briefcase } from "lucide-react";

// Mock Data - Replace with your actual team data file
const teamData = [
  {
    id: 1,
    name: "Ovie Maxwell",
    role: "Lead Organizer",
    bio: "Visionary behind TEDxOkumagbaAve, Ovie has spent a decade curating local talent and bringing global ideas to the heart of Warri. He believes that stories told at the avenue can change the world.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    socials: { twitter: "#", linkedin: "#", instagram: "#" },
    department: "Executive"
  },
  {
    id: 2,
    name: "Sarah Enajite",
    role: "Curation Lead",
    bio: "Sarah is the gatekeeper of ideas. She works closely with speakers to refine their talks, ensuring every performance meets the TED standard of excellence and emotional resonance.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    socials: { linkedin: "#", instagram: "#" },
    department: "Curation"
  },
  // Add more team members here...
];

const MeetTheTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);
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
        
        {/* HEADER - Matches Events page style */}
        <div className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none"
          >
            THE <span className="text-[#eb0028]">TEAM.</span>
          </motion.h1>
          <p className="text-zinc-500 mt-6 max-w-lg text-sm tracking-widest uppercase font-bold">
            The curators, designers, and thinkers making every second of the session count.
          </p>
        </div>

        {/* TEAM GRID - Same style as Events page */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamData.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => setSelectedMember(member)}
              className="group relative cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5 shadow-2xl">
                
                {/* PORTRAIT - Full Color */}
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />

                {/* BOTTOM INFO OVERLAY - Matches Events page */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
                  <div className="flex items-center gap-2 text-[#eb0028] mb-2 font-black tracking-widest text-[10px] uppercase">
                    <Briefcase size={12} />
                    <span>{member.role}</span>
                  </div>
                  
                  <h3 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">
                    {member.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SIDEBAR / BOTTOM SHEET - Matches Events page logic */}
      <AnimatePresence>
        {selectedMember && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] cursor-pointer"
            />

            <motion.div
              initial={isMobile ? { y: "100%" } : { x: "100%" }}
              animate={isMobile ? { y: 0 } : { x: 0 }}
              exit={isMobile ? { y: "100%" } : { x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className={`fixed z-[101] bg-zinc-900/40 backdrop-blur-3xl border-white/10 flex flex-col
                ${isMobile ? "bottom-0 left-0 right-0 h-[85vh] rounded-t-[3rem] border-t" : "top-0 right-0 w-[550px] h-full border-l"}`}
            >
              {/* Close Button */}
              <button onClick={() => setSelectedMember(null)} className="absolute top-8 right-8 p-3 bg-white/5 rounded-full text-white hover:bg-[#eb0028] transition-colors">
                <X size={20} />
              </button>

              <div className="p-10 md:p-16 overflow-y-auto custom-scrollbar flex-1">
                {/* Sidebar Image */}
                <div className="w-full h-80 rounded-[2rem] overflow-hidden mb-10 shadow-2xl border border-white/10">
                  <img src={selectedMember.img} alt={selectedMember.name} className="w-full h-full object-cover" />
                </div>

                {/* Role & Name */}
                <span className="text-[#eb0028] font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                  {selectedMember.department} Department
                </span>
                <h2 className="text-5xl font-black uppercase tracking-tighter leading-none mb-4">
                  {selectedMember.name}
                </h2>
                <p className="text-xl text-zinc-400 font-bold uppercase tracking-widest mb-8">{selectedMember.role}</p>
                
                {/* Bio Section */}
                <div className="space-y-8 mb-12">
                   <div className="p-8 bg-white/5 rounded-[quote-radius, e.g., 2rem] border border-white/5 relative">
                      <Quote className="text-[#eb0028] absolute top-6 left-6 opacity-20" size={40} />
                      <p className="text-zinc-300 leading-relaxed text-lg relative z-10 italic">
                        {selectedMember.bio}
                      </p>
                   </div>
                </div>

                {/* SOCIAL LINKS */}
                <div className="flex gap-6 pt-4">
                    {selectedMember.socials.instagram && (
                      <a href={selectedMember.socials.instagram} className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#eb0028] transition-all group">
                        <Instagram size={22} className="group-hover:scale-110 transition-transform" />
                      </a>
                    )}
                    {selectedMember.socials.linkedin && (
                      <a href={selectedMember.socials.linkedin} className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#eb0028] transition-all group">
                        <Linkedin size={22} className="group-hover:scale-110 transition-transform" />
                      </a>
                    )}
                    {selectedMember.socials.twitter && (
                      <a href={selectedMember.socials.twitter} className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#eb0028] transition-all group">
                        <Twitter size={22} className="group-hover:scale-110 transition-transform" />
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

export default MeetTheTeam;