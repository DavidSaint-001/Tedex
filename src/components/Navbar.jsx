import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const sidebarRef = useRef(null);
  const backdropRef = useRef(null);
  const linksRef = useRef([]);
  const line1 = useRef(null);
  const line2 = useRef(null);

  const TICKET_URL = "https://tix.africa/discover/tedxokumagba";

  // Scroll Detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    setIsOpen(false); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  // Sidebar Animation
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
        gsap.to(backdropRef.current, { opacity: 1, pointerEvents: "auto", duration: 0.4 });
        gsap.to(sidebarRef.current, { x: 0, duration: 1, ease: "expo.out" });
        gsap.fromTo(
          linksRef.current,
          { x: 100, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power4.out", delay: 0.3 }
        );
        gsap.to(line1.current, { rotate: 45, y: 4, duration: 0.4, ease: "back.out(2)" });
        gsap.to(line2.current, { rotate: -45, y: -4, duration: 0.4, ease: "back.out(2)" });
      } else {
        document.body.style.overflow = "auto";
        gsap.to(backdropRef.current, { opacity: 0, pointerEvents: "none", duration: 0.4 });
        gsap.to(sidebarRef.current, { x: "100%", duration: 0.8, ease: "expo.inOut" });
        gsap.to(line1.current, { rotate: 0, y: 0, duration: 0.4 });
        gsap.to(line2.current, { rotate: 0, y: 0, duration: 0.4 });
      }
    });
    return () => ctx.revert();
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Speakers", path: "/speakers" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
    { name: "Meet Team", path: "/team" },

  ];

  return (
    <>
      <nav
        className={`fixed w-full z-[100] transition-all duration-700 ease-in-out ${
          scrolled 
            ? "bg-black/80 backdrop-blur-2xl py-3 border-b border-white/5" 
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">
          
          {/* Logo Section */}
          <Link to="/" className="relative z-[110] flex flex-col group">
            <div className="flex items-center text-2xl font-black tracking-tighter leading-none">
              <span className="text-[#eb0028]">TED</span>
              <span className="text-[#eb0028]">x</span>
            </div>
            <span className="text-white text-[11px] font-bold tracking-[0.1em] uppercase -mt-0.5">
              OkumagbaAve
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 relative group ${
                  location.pathname === link.path ? "text-[#eb0028]" : "text-white/60 hover:text-white"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[1.5px] bg-[#eb0028] transition-all duration-500 ${
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}

            {/* EXTERNAL TICKETS LINK */}
            <a 
              href={TICKET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#eb0028] text-white text-[9px] tracking-[0.3em] font-black px-8 py-3.5 rounded-sm hover:bg-white hover:text-black transition-all transform active:scale-95 shadow-lg shadow-red-600/10"
            >
              GET TICKETS
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-[110] md:hidden flex flex-col gap-2 p-3 focus:outline-none group"
          >
            <div ref={line1} className="w-8 h-[2px] bg-white rounded-full group-hover:bg-[#eb0028] transition-colors" />
            <div ref={line2} className="w-6 h-[2px] bg-white self-end rounded-full group-hover:bg-[#eb0028] transition-colors" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div 
        ref={backdropRef}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[90] opacity-0 pointer-events-none transition-all duration-500"
      />

      <aside
        ref={sidebarRef}
        className="fixed top-0 right-0 h-screen w-full md:w-[450px] bg-black z-[105] translate-x-full flex flex-col p-10 md:p-16 border-l border-white/5"
      >
        <div className="mt-24 mb-10">
          <p className="text-white/30 text-[9px] font-black tracking-[0.5em] uppercase border-b border-white/10 pb-4">Menu</p>
        </div>

        <div className="flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              ref={(el) => (linksRef.current[i] = el)}
              to={link.path}
              className={`text-5xl md:text-6xl font-black tracking-tighter transition-all duration-300 ${
                location.pathname === link.path ? "text-[#eb0028]" : "text-white hover:pl-4 hover:text-[#eb0028]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div 
          ref={(el) => (linksRef.current[navLinks.length] = el)}
          className="mt-auto pt-10"
        >
          {/* EXTERNAL TICKETS LINK (MOBILE) */}
          <a 
            href={TICKET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#eb0028] py-5 rounded-sm text-center text-white font-black tracking-[0.2em] text-[11px] uppercase mb-8 hover:bg-white hover:text-black transition-all"
          >
              GET TICKETS NOW
          </a>
          
          <div className="flex justify-between items-center text-[10px] font-bold tracking-widest text-white/40 uppercase">
            <div className="flex gap-6">
              <span className="hover:text-white transition-colors cursor-pointer">IG</span>
              <span className="hover:text-white transition-colors cursor-pointer">TW</span>
              <span className="hover:text-white transition-colors cursor-pointer">LI</span>
            </div>
            <span>Warri, NG</span>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;