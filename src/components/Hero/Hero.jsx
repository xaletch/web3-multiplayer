// animation
import { motion } from "framer-motion";
import { textAnimation } from "../../animation/animationConfig";

import "./hero.css";

export const Hero = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      className="hero"
    >
      <div className="hero_content">
        <motion.h1
          variants={textAnimation}
          custom={1}
          className="hero_content-title"
        >
          Web 3 Multiplayer Battle Arena - The Future Of Gaming
        </motion.h1>
        <motion.div
          variants={textAnimation}
          custom={2}
          className="hero_content-description"
        >
          <p>
            Immerse Yourself in DOT - Defense of Titans, a groundbreaking online
            battle arena, drawing inspiration from the epic Dota 2.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
