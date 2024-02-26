import "./orangeButton.css";

// animation
import { motion } from "framer-motion";
import { buttonAnimation } from "../../../animation/animationConfig";

export const OrangeButton = ({ children, index }) => {
  return (
    <motion.button
      className={`orange-btn ${index}`}
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      variants={buttonAnimation}
    >
      {children}
    </motion.button>
  );
};
