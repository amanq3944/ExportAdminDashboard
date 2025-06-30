import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const photos = [
  "https://tympanus.net/Development/PhotographyWebsiteConcept/img/type1/1.jpg",
  "https://tympanus.net/Development/PhotographyWebsiteConcept/img/type1/1.jpg",
  "https://tympanus.net/Development/PhotographyWebsiteConcept/img/type1/1.jpg",
  "https://tympanus.net/Development/PhotographyWebsiteConcept/img/type1/1.jpg",
  "https://tympanus.net/Development/PhotographyWebsiteConcept/img/type1/1.jpg",
  "https://tympanus.net/Development/PhotographyWebsiteConcept/img/type1/1.jpg",
  "https://tympanus.net/Development/PhotographyWebsiteConcept/img/type1/1.jpg",
  "https://tympanus.net/Development/PhotographyWebsiteConcept/img/type1/1.jpg",
];

const AnimatedIcons = () => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 1) % 360);
    }, 1000); // adjust speed
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center">
      <div className="relative w-[400px] h-[400px]">
        {photos.map((src, i) => {
          const itemAngle = (360 / photos.length) * i + angle;
          const radius = 160;
          const x = radius * Math.cos((itemAngle * Math.PI) / 180);
          const y = radius * Math.sin((itemAngle * Math.PI) / 180);
          const isCenter = Math.abs((itemAngle % 360) - 270) < 10;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full overflow-hidden"
              animate={
                isCenter
                  ? {
                      width: "100vw",
                      height: "100vh",
                      top: "0",
                      left: "0",
                      x: 0,
                      y: 0,
                      position: "fixed",
                      zIndex: 50,
                      borderRadius: "0%",
                    }
                  : {
                      width: 70,
                      height: 70,
                      x: x + 165,
                      y: y + 165,
                      zIndex: 10,
                      position: "absolute",
                      borderRadius: "50%",
                    }
              }
              transition={{ duration: 0.4 }}
            >
              <img src={src} alt={`img-${i}`} className="w-full h-full object-cover" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimatedIcons;
