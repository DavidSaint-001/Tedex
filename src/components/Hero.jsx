import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import * as THREE from "three";
import { AnimatePresence, motion } from "framer-motion";
import img1 from "../assets/images/hero img 1.jpg";
import img2 from "../assets/images/hero img 2.avif";
import img3 from "../assets/images/hero img 3.avif";

const EVENT_DATE = new Date("2026-04-26T09:00:00");

const Hero = () => {
  const mountRef = useRef(null);
  const bgRef = useRef(null);
  const [showCountdown, setShowCountdown] = useState(false);
  const [isPast, setIsPast] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, mins: 0 });

  const images = [
    img1,
    img2,
    img3
  ];

  useEffect(() => {
    const now = new Date();
    setIsPast(now > EVENT_DATE);

    // 1. Background Image Slider (GSAP) - Changes every 10s
    let sliderCtx = gsap.context(() => {
      const bgElements = bgRef.current.children;
      let currentIndex = 0;
      gsap.set(bgElements[0], { opacity: 0.4 });

      const transitionSlides = () => {
        const prev = bgElements[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
        const next = bgElements[currentIndex];
        gsap.to(prev, { opacity: 0, scale: 1.1, duration: 3 });
        gsap.fromTo(next, 
          { opacity: 0, scale: 1.2 },
          { opacity: 0.4, scale: 1, duration: 4, ease: "power2.inOut" }
        );
      };
      const slideInterval = setInterval(transitionSlides, 10000);
      return () => clearInterval(slideInterval);
    }, bgRef);

    // 2. Countdown Logic (Updates every minute for performance)
    const updateCountdown = () => {
      const diff = EVENT_DATE - new Date();
      if (diff <= 0) {
        setIsPast(true);
        setShowCountdown(false);
      } else {
        setCountdown({
          days: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
          hours: Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0),
          mins: Math.max(Math.floor((diff / (1000 * 60)) % 60), 0),
        });
      }
    };
    
    updateCountdown();
    const timer = setInterval(updateCountdown, 60000); // Check time every 1 minute

    // 3. View Switcher Logic (SWITCHES EVERY 1 MINUTE)
    let viewSwitcher;
    if (now < EVENT_DATE) {
      viewSwitcher = setInterval(() => {
        setShowCountdown(prev => !prev);
      }, 60000); // 1 Minute Interval
    }

    // 4. Three.js Particle Field
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);
    
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(800 * 3);
    for (let i = 0; i < 800 * 3; i++) pos[i] = (Math.random() - 0.5) * 12;
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ size: 0.02, color: 0xeb0028, transparent: true, opacity: 0.35 });
    const points = new THREE.Points(geo, mat);
    scene.add(points);
    camera.position.z = 5;

    const animate = () => {
      points.rotation.y += 0.0002;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      sliderCtx.revert();
      clearInterval(timer);
      if (viewSwitcher) clearInterval(viewSwitcher);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden select-none">
      
      {/* Background Images */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        {images.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-0 pointer-events-none"
            style={{ backgroundImage: `url(${img})`, filter: 'brightness(0.40)' }}
          />
        ))}
      </div>

      {/* Particle field */}
      <div ref={mountRef} className="absolute inset-0 z-[1] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-[10] text-center px-6 pt-32 w-full max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {!showCountdown || isPast ? (
            /* BRAND VIEW (Displayed for 1 min) */
            <motion.div
              key="brand"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="mb-6 flex items-center justify-center gap-4">
                <div className="h-[1px] w-12 bg-white/20" />
                <p className="text-[#eb0028] font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase">
                  TEDxOkumagbaAve 2026
                </p>
                <div className="h-[1px] w-12 bg-white/20" />
              </div>

              <h1 className="text-6xl md:text-[140px] text-white font-black leading-[0.8] tracking-tighter mb-12 uppercase">
                IDEAS THAT <br /> 
                <span className="text-[#eb0028]">MOVE US.</span>
              </h1>

              <div className="flex justify-center">
                <a href="https://tix.africa/discover/tedxokumagba" target="_blank" rel="noreferrer" className="group relative px-14 py-5 bg-[#eb0028] text-white rounded-full font-black text-xs tracking-[0.2em] uppercase transition-all hover:scale-105 active:scale-95">
                  Secure Your Ticket
                </a>
              </div>
            </motion.div>
          ) : (
            /* COUNTDOWN VIEW (Displayed for 1 min) */
            <motion.div
              key="countdown"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="inline-block px-6 py-2 border border-white/10 rounded-full mb-10 backdrop-blur-sm">
                <span className="text-white text-[9px] font-black tracking-[0.4em] uppercase">Status: Live Countdown</span>
              </div>
              
              <h2 className="text-white text-5xl md:text-[110px] font-black leading-[0.85] tracking-tighter uppercase mb-16">
                {countdown.days} Days <br />
                <span className="text-white/20 italic">Remaining</span>
              </h2>

              <div className="flex justify-center gap-16 md:gap-32 tabular-nums">
                {[{l: "HOURS", v: countdown.hours}, {l: "MINUTES", v: countdown.mins}].map((item, i) => (
                  <div key={i} className="flex flex-col relative">
                    <span className="text-5xl md:text-8xl font-thin text-white tracking-tighter">
                      {String(item.v).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] tracking-[0.5em] text-[#eb0028] font-black mt-4 uppercase">{item.l}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative HUD Elements */}
      <div className="absolute bottom-10 left-10 z-10 hidden md:block">
        <div className="flex flex-col gap-2">
            <span className="text-white/20 text-[8px] font-black tracking-[0.3em] uppercase underline decoration-[#eb0028]">Location</span>
            <span className="text-white text-[10px] font-bold tracking-widest uppercase">Okumagba Ave, Warri</span>
        </div>
      </div>

      {/* Noise Grain Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-[5]" />
    </section>
  );
};

export default Hero;