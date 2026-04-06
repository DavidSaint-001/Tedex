import { motion } from "framer-motion";
import logo from "../assets/images/Gemini_Generated_Image_dmzagidmzagidmza-removebg-preview.png";

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, y: "-100%" }} // Quick slide up exit
      transition={{ delay: 1.5, duration: 0.8, ease: [0.87, 0, 0.13, 1] }}
    >
      {/* Subtle Glow */}
      <div className="absolute w-[250px] h-[250px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative flex flex-col items-center">
        {/* Simple Logo Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img
            src={logo}
            alt="TEDx Okumagba Ave"
            className="h-20 md:h-24 w-auto object-contain"
          />
        </motion.div>

        {/* Minimalist Progress Line */}
        <div className="mt-8 w-32 h-[1px] bg-white/10 overflow-hidden">
          <motion.div 
            className="h-full bg-red-600"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ 
              duration: 1.2, 
              ease: "easeInOut"
            }}
          />
        </div>

        <motion.p
          className="mt-4 text-white/30 text-[9px] tracking-[0.4em] uppercase font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Loading Experience
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;