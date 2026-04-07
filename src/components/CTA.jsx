import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import { motion } from "framer-motion";

const CTA = () => {
  const mountRef = useRef(null);
  // Create a motion-enabled version of the Link component
  const MotionLink = motion(Link);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Performance optimization
    mount.appendChild(renderer.domElement);

    // Floating shapes
    const shapes = [];
    const geometry = new THREE.IcosahedronGeometry(0.4, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0xeb0028, // Official TED Red
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });

    for (let i = 0; i < 20; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      mesh.scale.setScalar(Math.random() * 0.5 + 0.3);
      scene.add(mesh);
      shapes.push(mesh);
    }

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xeb0028, 2);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    let animationFrameId;
    const animate = () => {
      shapes.forEach((mesh, i) => {
        mesh.rotation.x += 0.001 + i * 0.0001;
        mesh.rotation.y += 0.002 + i * 0.0001;
        // Smoother floating movement
        mesh.position.y += Math.sin(Date.now() * 0.001 + i) * 0.002;
      });
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!mount) return;
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      // Dispose of geometry and materials to prevent memory leaks
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-black px-6">
      {/* Three.js mount */}
      <div ref={mountRef} className="absolute inset-0 z-0 opacity-60" />

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* CTA content */}
      <div className="relative z-10 text-center max-w-4xl">
        <motion.h2
          className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase leading-none"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Spread <span className="text-[#eb0028]">Ideas.</span>
        </motion.h2>

        <motion.p
          className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Be part of the community in Warri pushing the boundaries of technology, entertainment, and design.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Using the custom MotionLink */}
          <MotionLink
            to="/speakers"
            className="w-full sm:w-auto bg-[#eb0028] text-white px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-colors duration-300 shadow-2xl"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Speakers
          </MotionLink>

          <MotionLink
            to="/events"
            className="w-full sm:w-auto border-2 border-white/20 text-white px-12 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ y: -5, borderColor: "rgba(255,255,255,1)" }}
            whileTap={{ scale: 0.95 }}
          >
            Past Events
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;