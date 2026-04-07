import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as THREE from "three";
import { motion } from "framer-motion";

const CTA = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    //  Scene Setup
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
    mount.appendChild(renderer.domElement);

    //  Floating shapes
    const shapes = [];
    const geometry = new THREE.IcosahedronGeometry(0.4, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0xe62b1e,
      wireframe: true,
    });

    for (let i = 0; i < 20; i++) {
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      mesh.scale.setScalar(Math.random() * 0.5 + 0.3);
      scene.add(mesh);
      shapes.push(mesh);
    }

    //  Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xff0000, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    //  Animate shapes
    const animate = () => {
      shapes.forEach((mesh, i) => {
        mesh.rotation.x += 0.002 + i * 0.0005;
        mesh.rotation.y += 0.003 + i * 0.0005;
        mesh.position.y += Math.sin(Date.now() * 0.001 + i) * 0.001;
      });
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    //  Handle resize
    const handleResize = () => {
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black px-6">
      {/* Three.js mount */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* Gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* CTA content */}
      <div className="relative z-10 text-center max-w-3xl">
        <motion.h2
          className="font-heading text-5xl md:text-7xl text-white mb-6 leading-tight"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Join the Conversation
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Don’t miss the next TEDx Warri event. Connect, learn, and inspire.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.Link
            to="/speakers"
            className="bg-red-600 hover:bg-red-700 px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl text-white transition-all duration-500 "
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(230,43,30,0.6)" }}
          >
            View Speakers
          </motion.Link>

          <motion.Link
            to="/events"
            className="border border-white px-10 py-4 rounded-full font-semibold text-white hover:bg-white hover:text-black transition-all duration-500"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.5)" }}
          >
            View Events
          </motion.Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;