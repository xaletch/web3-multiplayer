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
      <svg
        width="218"
        height="49"
        viewBox="0 0 218 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.528157 48.5L3.15918 0.5H217.437L211.737 48.5H0.528157Z"
          stroke="#F9F9F9"
        />
      </svg>
      {children}
    </motion.button>
  );
};
