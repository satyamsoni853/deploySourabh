"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";

export default function SpaceBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    console.log("SpaceBackground mounted");

    const container = containerRef.current;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 2000;
    const posArray = new Float32Array(starsCount * 3);

    for (let i = 0; i < starsCount * 3; i++) {
      // Random positions spread out
      posArray[i] = (Math.random() - 0.5) * 15;
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const starsMaterial = new THREE.PointsMaterial({
      size: 0.025,
      color: 0xaaaaaa,
      transparent: true,
      opacity: 0.4,
    });

    const starMesh = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starMesh);

    camera.position.z = 3;

    // Animation
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      starMesh.rotation.x += 0.0003;
      starMesh.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      if (container) {
        container.removeChild(renderer.domElement);
      }
      starsGeometry.dispose();
      starsMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-dvh z-0 bg-black overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 z-0" />

      {/* Moving Planets - Hidden on Mobile */}
      <div className="hidden md:block w-full h-full absolute inset-0">
        {/* 1. Sun (New) */}
        <motion.div
          initial={{ x: "-20vw", y: "-20%", opacity: 0 }}
          animate={{
            x: ["-20vw", "120vw"],
            y: ["-20%", "40%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: "linear",
            delay: 0,
          }}
          className="absolute w-64 h-64 rounded-full z-0 shadow-[0_0_100px_rgba(253,224,71,0.6)]"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #fef08a, #facc15, #ea580c)",
            top: "5%",
            left: 0,
          }}
        />

        {/* 2. Mercury (New) */}
        <motion.div
          initial={{ x: "110vw", y: "30%", opacity: 0 }}
          animate={{
            x: ["110vw", "-10vw"],
            y: ["30%", "10%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            delay: 10,
          }}
          className="absolute w-12 h-12 rounded-full z-0 shadow-[0_0_20px_rgba(209,213,219,0.5)]"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #f3f4f6, #d1d5db, #9ca3af)",
            top: "20%",
            left: 0,
          }}
        />

        {/* 3. Venus (New) */}
        <motion.div
          initial={{ x: "-10vw", y: "40%", opacity: 0 }}
          animate={{
            x: ["-10vw", "110vw"],
            y: ["40%", "20%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
            delay: 5,
          }}
          className="absolute w-28 h-28 rounded-full z-0 shadow-[0_0_40px_rgba(254,240,138,0.5)]"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #fef9c3, #fde047, #eab308)",
            top: "30%",
            left: 0,
          }}
        />

        {/* 4. Earth (Brightened) */}
        <motion.div
          initial={{ x: "-20vw", y: "60%", opacity: 0 }}
          animate={{
            x: ["-20vw", "120vw"],
            y: ["60%", "40%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
            delay: 15,
          }}
          className="absolute w-36 h-36 rounded-full z-0 shadow-[0_0_50px_rgba(96,165,250,0.6)]"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #86efac, #60a5fa, #1d4ed8)",
            bottom: "30%",
            left: 0,
          }}
        />

        {/* 5. Moon (Brightened) - Orbiting near Earth path */}
        <motion.div
          initial={{ x: "-22vw", y: "58%", opacity: 0 }}
          animate={{
            x: ["-22vw", "118vw"],
            y: ["58%", "38%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
            delay: 15.5, // Slightly offset from Earth
          }}
          className="absolute w-12 h-12 rounded-full z-0 shadow-[0_0_30px_rgba(255,255,255,0.6)]"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #ffffff, #e5e7eb, #9ca3af)",
            left: 0,
          }}
        />

        {/* 6. Mars (Brightened) */}
        <motion.div
          initial={{ x: "110vw", y: "70%", opacity: 0 }}
          animate={{
            x: ["110vw", "-10vw"],
            y: ["70%", "90%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            delay: 20,
          }}
          className="absolute w-24 h-24 rounded-full z-0 shadow-[0_0_40px_rgba(252,165,165,0.6)]"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, #fca5a5, #f87171, #b91c1c)",
            bottom: "10%",
            left: 0,
          }}
        />

        {/* 7. Jupiter (Brightened) */}
        <motion.div
          initial={{ x: "120vw", y: "10%", opacity: 0 }}
          animate={{
            x: ["120vw", "-20vw"],
            y: ["10%", "30%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute w-52 h-52 rounded-full z-0 shadow-[0_0_60px_rgba(253,186,116,0.4)]"
          style={{
            background:
              "linear-gradient(135deg, #ffedd5 0%, #fdba74 20%, #c2410c 40%, #fdba74 60%, #ffedd5 80%, #c2410c 100%)",
            transform: "rotate(-20deg)",
            top: "10%",
            left: 0,
          }}
        />
      </div>
    </div>
  );
}
