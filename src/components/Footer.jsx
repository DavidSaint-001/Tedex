import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const revealRef = useRef([]);
  const tickerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Content Reveal Animation
      gsap.from(revealRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
      });

      // 2. Infinite "Live Sign Post" Ticker Animation
      const tickerWidth = tickerRef.current.offsetWidth;
      gsap.to(tickerRef.current, {
        x: `-${tickerWidth / 2}`,
        duration: 25, // Adjust speed here (higher = slower)
        ease: "none",
        repeat: -1,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el);
    }
  };

  return (
    <footer 
      ref={footerRef} 
      className="relative bg-black text-white pt-24 pb-0 px-8 md:px-16 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          
          {/* 1. Brand Section */}
          <div className="md:col-span-5" ref={addToRefs}>
            <Link to="/" className="text-3xl font-black tracking-tighter mb-6 block group">
              TEDx<span className="text-[#eb0028] group-hover:text-white transition-colors duration-300">OkumagbaAve</span>
            </Link>
            <p className="text-gray-500 max-w-sm mb-10 text-sm leading-relaxed font-medium">
              Independently organized TED event amplifying voices from the heart of the community.
            </p>
            
            <div className="flex gap-8">
              {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                <a key={social} href="#" className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-[#eb0028] transition-all relative group">
                  {social}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#eb0028] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Navigation */}
          <div className="md:col-span-3 flex flex-col gap-4" ref={addToRefs}>
            <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#eb0028] mb-4">Explore</h4>
            <ul className="space-y-4 text-sm font-bold tracking-tight">
              {['Speakers', 'About', 'Events',  'Contact'].map((item) => (
                <li key={item}><Link to={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          {/* 3. Newsletter & Disclaimer */}
          <div className="md:col-span-4" ref={addToRefs}>
            <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-white mb-6">Stay Connected</h4>
            <div className="relative flex items-center mb-10">
              <input type="email" placeholder="EMAIL ADDRESS" className="bg-transparent w-full border-b border-white/10 py-3 outline-none text-[11px] tracking-widest focus:border-[#eb0028] transition-colors" />
              <button className="absolute right-0 text-[#eb0028] font-black text-[10px] tracking-widest uppercase hover:text-white transition-colors">JOIN</button>
            </div>
            <div className="p-4 border border-white/5 rounded-sm bg-white/[0.02]">
              <p className="text-[9px] text-gray-500 leading-relaxed italic uppercase tracking-wider">
                Licensed by TED. Locally produced by Okumagba Ave.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 pb-10">
          <p className="text-[9px] font-bold tracking-widest text-gray-600 uppercase">© {new Date().getFullYear()} TEDXOKUMAGBAAVE</p>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="text-[9px] font-black tracking-[0.3em] uppercase hover:text-[#eb0028] transition-colors flex items-center gap-2 group">
            Back to Top <span className="w-8 h-[1px] bg-white group-hover:bg-[#eb0028] transition-all" />
          </button>
        </div>
      </div>

      {/* INFINITE LIVE SIGN POST (TICKER) */}
      <div className="relative w-full border-t border-white/5 bg-black py-4 overflow-hidden pointer-events-none select-none">
        <div ref={tickerRef} className="flex whitespace-nowrap">
          {/* Repeating Text for Seamless Loop */}
          {[1, 2, 3, 4].map((i) => (
            <span key={i} className="text-[15vw] font-black text-white/[1.09] leading-none tracking-tighter uppercase px-10">
               TEDEx Okumagba Ave 
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;