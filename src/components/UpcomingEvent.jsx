import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Play, Ticket, ArrowRight } from "lucide-react";
import img from "../assets/images/event.jpg";

const UpcomingEvent = () => {
  // CONFIGURATION
  const EVENT_DATE = new Date("2026-04-27T09:00:00");
  const TICKET_URL = "https://tix.africa/discover/tedxokumagba";
  const HIGHLIGHTS_URL = "https://youtube.com/@tedx"; 

  const [isPast, setIsPast] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = EVENT_DATE - now;

      if (difference <= 0) {
        setIsPast(true);
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          mins: Math.floor((difference / 1000 / 60) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden shadow-3xl border border-white/5 relative">
          
          {/* VISUAL SIDE */}
          <div className="lg:w-5/12 relative min-h-[450px] group">
            <img 
              src={img} 
              alt="TEDx Stage Setup" 
              className="absolute inset-0 w-full h-full object-cover  "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent lg:bg-gradient-to-r lg:from-black/40 lg:to-transparent" />
            
            {/* Countdown Overlay */}
            {!isPast && (
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex justify-between text-white text-center">
                <div>
                  <span className="block text-2xl font-black">{timeLeft.days}</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60">Days</span>
                </div>
                <div className="w-[1px] bg-white/20" />
                <div>
                  <span className="block text-2xl font-black">{timeLeft.hours}</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60">Hrs</span>
                </div>
                <div className="w-[1px] bg-white/20" />
                <div>
                  <span className="block text-2xl font-black">{timeLeft.mins}</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60">Mins</span>
                </div>
              </div>
            )}
          </div>

          {/* CONTENT SIDE */}
          <div className="lg:w-7/12 p-10 md:p-16 lg:p-20 flex flex-col justify-center relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`h-2 w-2 rounded-full ${isPast ? 'bg-zinc-600' : 'bg-[#eb0028] animate-ping'}`} />
                <span className="text-white/40 font-bold tracking-[0.4em] uppercase text-[10px]">
                  {isPast ? "Event Archived" : "Main Stage Event"}
                </span>
              </div>

              <h2 className="text-white text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
                {isPast ? "IDEAS IN \nRETROSPECT" : "SHAPES"}
              </h2>

              <p className="text-zinc-400 text-sm md:text-base max-w-md mb-10 leading-relaxed">
                {isPast 
                  ? "Our 2026 session at Okumagba Ave has concluded. Explore the talks that sparked a new conversation in Warri." 
                  : "Join us for a day of powerful storytelling and groundbreaking ideas at Okumagba Avenue. Seats are limited."}
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                {isPast ? (
                  <a 
                    href={HIGHLIGHTS_URL}
                    target="_blank"
                    className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-12 py-5 rounded-full font-black text-xs tracking-widest uppercase hover:bg-[#eb0028] hover:text-white transition-all duration-300"
                  >
                    <Play size={14} fill="currentColor" /> Watch Highlights
                  </a>
                ) : (
                  <a 
                    href={TICKET_URL}
                    target="_blank"
                    className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#eb0028] text-white px-12 py-5 rounded-full font-black text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-2xl shadow-red-600/30"
                  >
                    <Ticket size={16} /> Get Tickets
                  </a>
                )}
                
                <Link to="/about" className="flex items-center gap-2 text-white/40 hover:text-[#eb0028] font-black text-xs tracking-widest uppercase transition-all group">
                  Learn More <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Location Footer Details */}
            <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-[#eb0028]" />
                <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Cedar House, warri</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-[#eb0028]" />
                <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">01:00 - 05:00PM • April 26</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;