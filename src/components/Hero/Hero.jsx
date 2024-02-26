// animation
import { motion } from "framer-motion";
import { textAnimation } from "../../animation/animationConfig";

import "./hero.css";
import { OrangeButton } from "../Buttons/OrangeButton/OrangeButton";

export const Hero = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      className="hero"
    >
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_content">
            <motion.h1
              variants={textAnimation}
              custom={1}
              className="hero_content-title"
            >
              Web 3 Multiplayer Battle Arena
            </motion.h1>
            <motion.h2
              variants={textAnimation}
              custom={2}
              className="hero_content-title_two"
            >
              The Future Of Gaming
            </motion.h2>
            <motion.p
              variants={textAnimation}
              custom={3}
              className="hero_content-description"
            >
              Immerse Yourself in DOT - Defense of Titans, a groundbreaking
              online battle arena, drawing inspiration from the epic Dota 2.
            </motion.p>
            <OrangeButton index={"hero_content-btn"}>
              Play for free
            </OrangeButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
