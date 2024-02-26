import { useState } from "react";

// animation
import { motion } from "framer-motion";
import {
  descriptionCharactersAnimation,
  descriptionCharactersTextAnimation,
} from "../../animation/animationConfig";

import link_img from "../../assets/LinkImg";
import "./DescriptionCharacters.css";

const heroItems = [
  {
    img: link_img.gorgomath,
    backgroundImg: link_img.gorgomathBg,
    name: "Gorgomath",
    ability: "Unseen Terror",
    description:
      "In the dark chasms of the Underworld, where light fears to tread, Gorgomath was born from the chaos of unbridled magic and the remnants of forgotten beasts. A creature of nightmares, Gorgomath roams the battlefields, seeking to impose the terror of the Underworld onto the land of the living. With each battle, it grows stronger, feeding on the fear and despair of its foes.",
  },
  {
    img: link_img.sylvanthea,
    backgroundImg: link_img.sylvantheaBg,
    name: "Sylvanthea",
    ability: "Guardian of the Enchanted Forest",
    description:
      "Sylvanthea, a spirit as old as the forest itself, has watched over the Enchanted Forest for centuries. Born from the heart of the oldest tree and nurtured by the magic of the earth, she embodies the tranquility and resilience of nature. Sylvanthea stands as the guardian against those who seek to harm the natural balance, using her powers to heal and protect her domain.",
  },
  {
    img: link_img.oculothorax,
    backgroundImg: link_img.oculothoraxBg,
    name: "Oculothorax",
    ability: "Visionary Terror",
    description:
      "Oculothorax, the Visionary Terror, is a being of nightmares, inspired by the eerie creatures of Pan's Labyrinth. This hero, with an eyeless face and eyes on the palms of its hands, embodies the essence of dark fantasy and terror. Roaming the shadowy realms, Oculothorax sees all, using its hand-eyes to gaze into both the physical and spiritual worlds. Its elongated, twisted body moves with an otherworldly grace, instilling dread in the hearts of those who encounter it. Oculothorax is not just a creature of horror, but a guardian of ancient, mystical secrets, lurking in the places where reality bends.",
  },
  {
    img: link_img.vorix,
    backgroundImg: link_img.vorixBg,
    name: "Vorix",
    ability: "Nightmare Weaver",
    description:
      "The Nightmare Weaver is the embodiment of fear and revulsion, a being so grotesque that its mere presence warps the fabric of reality. With a body that horrifies the senses, Vorix's distended, rotting stomach, unnaturally twisted skinny legs, and a nightmarish rat-like head set it apart as a creature of darkness and despair. Its eyes, filled with the glow of malice, and its jagged-toothed maw, speak of a hunger for suffering and chaos.",
  },
  {
    img: link_img.natureBind,
    backgroundImg: link_img.natureBindBg,
    name: "Nature Bind",
    ability: "Wild Guardian",
    description:
      "Once a humble guardian of ancient forests, Nature Bind transformed into a formidable entity, embodying the untamed power of nature to defend against dark forces. A towering figure, resembling a fusion of natural elements like gnarled wood, moss, and living vines. His eyes shine like emerald leaves, and he moves with the grace of a predator. His presence is marked by the rustling of leaves and whispering wind.",
  },
];

export const DescriptionCharacters = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);

  const handlePrevClick = () => {
    setIsAnimating(true);
    setCurrentIndex(
      currentIndex === 0 ? heroItems.length - 1 : currentIndex - 1
    );
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handleNextClick = () => {
    setIsAnimating(true);
    setCurrentIndex(
      currentIndex === heroItems.length - 1 ? 0 : currentIndex + 1
    );
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <motion.div
      className="description-characters"
      initial={"hidden"}
      whileInView={"visible"}
    >
      <div
        className={`description-characters_wrapper ${
          isAnimating ? "slide-anim-bg" : ""
        }`}
        style={{
          backgroundImage: `url(${heroItems[currentIndex].backgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="description-characters_content">
          <motion.img
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ amount: 0.2, once: true }}
            variants={descriptionCharactersAnimation}
            className={`description-characters_hero ${
              currentIndex == 0
                ? "description-characters_hero-img_1"
                : "" || currentIndex == 1
                ? "description-characters_hero-img_2-2"
                : "" || currentIndex == 3
                ? "description-characters_hero-img_3"
                : "" || currentIndex == 2
                ? "description-characters_hero-img_2"
                : ""
            } ${isAnimating ? "slide-anim-img" : ""}`}
            src={heroItems[currentIndex].img}
            alt={heroItems[currentIndex].name}
          />
          <div className="description-characters_content-inner">
            <motion.div
              className={`description-characters_description ${
                isAnimating ? "slide-anim-content" : ""
              }`}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ amount: 0.2, once: true }}
            >
              <motion.h2
                className="description-characters_description-name"
                variants={descriptionCharactersTextAnimation}
                custom={1}
              >
                {heroItems[currentIndex].name}
              </motion.h2>
              <motion.span
                className="description-characters_description-ability"
                variants={descriptionCharactersTextAnimation}
                custom={2}
              >
                {heroItems[currentIndex].ability}
              </motion.span>
              <motion.p
                className="description-characters_description-text"
                variants={descriptionCharactersTextAnimation}
                custom={3}
              >
                {heroItems[currentIndex].description}
              </motion.p>
              <motion.button
                className="description-characters_description-more"
                onClick={() => setOpenMenu(!isOpenMenu)}
                variants={descriptionCharactersTextAnimation}
                custom={3}
              >
                more detailed
                <span>
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289L7.34315 0.928932C6.95262 0.538408 6.31946 0.538408 5.92893 0.928932C5.53841 1.31946 5.53841 1.95262 5.92893 2.34315L11.5858 8L5.92893 13.6569C5.53841 14.0474 5.53841 14.6805 5.92893 15.0711C6.31946 15.4616 6.95262 15.4616 7.34315 15.0711L13.7071 8.70711ZM1 9H13V7H1V9Z"
                      fill="#FF5C00"
                    />
                  </svg>
                </span>
              </motion.button>
            </motion.div>
            <motion.div
              className="description-characters_buttons"
              variants={descriptionCharactersTextAnimation}
              viewport={{ amount: 0.2, once: true }}
              custom={4}
            >
              <button
                onClick={handlePrevClick}
                className="description-characters_buttons-prev description-characters_btn"
                disabled={currentIndex === 0}
              >
                {currentIndex === 0 ? (
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8677 -0.000139236C11.3421 -0.000139236 11.7606 0.171923 12.1233 0.516045L13.1696 1.56236C13.5231 1.91578 13.6998 2.33896 13.6998 2.83189C13.6998 3.33412 13.5231 3.75265 13.1696 4.08747L9.08203 8.18903H18.9035C19.3871 8.18903 19.78 8.36342 20.0823 8.71219C20.3846 9.06097 20.5357 9.48182 20.5357 9.97475V11.7605C20.5357 12.2534 20.3846 12.6742 20.0823 13.023C19.78 13.3718 19.3871 13.5462 18.9035 13.5462H9.08203L13.1696 17.6477C13.5231 17.9826 13.6998 18.4011 13.6998 18.9033C13.6998 19.4056 13.5231 19.8241 13.1696 20.1589L12.1233 21.2052C11.7699 21.5586 11.3514 21.7354 10.8677 21.7354C10.3748 21.7354 9.95164 21.5586 9.59822 21.2052L0.516183 12.1232C0.172061 11.7977 0 11.3791 0 10.8676C0 10.3654 0.172061 9.9422 0.516183 9.59807L9.59822 0.516045C9.96094 0.171923 10.3841 -0.000139236 10.8677 -0.000139236Z"
                      fill="#FF5C00"
                    />
                  </svg>
                ) : (
                  <svg
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.8682 22.7354C12.3425 22.7354 12.761 22.5633 13.1238 22.2192L14.1701 21.1729C14.5235 20.8194 14.7002 20.3963 14.7002 19.9033C14.7002 19.4011 14.5235 18.9826 14.1701 18.6478L10.0825 14.5462L19.9039 14.5462C20.3875 14.5462 20.7805 14.3718 21.0827 14.023C21.385 13.6743 21.5361 13.2534 21.5361 12.7605V10.9748C21.5361 10.4818 21.385 10.061 21.0827 9.71221C20.7805 9.36344 20.3875 9.18905 19.9039 9.18905L10.0825 9.18905L14.1701 5.08749C14.5235 4.75267 14.7002 4.33414 14.7002 3.83191C14.7002 3.32968 14.5235 2.91115 14.1701 2.57633L13.1238 1.53001C12.7703 1.17659 12.3518 0.999878 11.8682 0.999878C11.3752 0.999878 10.9521 1.17659 10.5986 1.53001L1.51661 10.612C1.17249 10.9376 1.00043 11.3561 1.00043 11.8676C1.00043 12.3699 1.17249 12.793 1.51661 13.1372L10.5986 22.2192C10.9614 22.5633 11.3845 22.7354 11.8682 22.7354Z"
                      stroke="white"
                    />
                  </svg>
                )}
              </button>
              <button
                onClick={handleNextClick}
                className="description-characters_buttons-next description-characters_btn"
                disabled={currentIndex === 4}
              >
                {currentIndex !== 4 ? (
                  <svg
                    width="23"
                    height="24"
                    viewBox="0 0 23 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6684 0.999861C10.1941 0.999861 9.77553 1.17192 9.41281 1.51604L8.36649 2.56236C8.01307 2.91578 7.83636 3.33896 7.83636 3.83189C7.83636 4.33412 8.01307 4.75265 8.36649 5.08747L12.4541 9.18903L2.63267 9.18903C2.14904 9.18903 1.75609 9.36342 1.45382 9.71219C1.15155 10.061 1.00042 10.4818 1.00042 10.9747V12.7605C1.00042 13.2534 1.15155 13.6742 1.45382 14.023C1.75609 14.3718 2.14904 14.5462 2.63267 14.5462L12.4541 14.5462L8.36649 18.6477C8.01307 18.9826 7.83636 19.4011 7.83636 19.9033C7.83636 20.4056 8.01307 20.8241 8.36649 21.1589L9.41281 22.2052C9.76623 22.5586 10.1848 22.7354 10.6684 22.7354C11.1613 22.7354 11.5845 22.5586 11.9379 22.2052L21.0199 13.1232C21.3641 12.7977 21.5361 12.3791 21.5361 11.8676C21.5361 11.3654 21.3641 10.9422 21.0199 10.5981L11.9379 1.51604C11.5752 1.17192 11.152 0.999861 10.6684 0.999861Z"
                      stroke="white"
                    />
                  </svg>
                ) : (
                  <svg
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.6679 21.7354C9.19357 21.7354 8.77504 21.5633 8.41232 21.2192L7.366 20.1729C7.01258 19.8194 6.83587 19.3963 6.83587 18.9033C6.83587 18.4011 7.01258 17.9826 7.366 17.6478L11.4536 13.5462L1.63218 13.5462C1.14855 13.5462 0.755602 13.3718 0.453333 13.023C0.151064 12.6743 -7.05719e-05 12.2534 -7.05719e-05 11.7605V9.97477C-7.05719e-05 9.48183 0.151064 9.06098 0.453333 8.71221C0.755602 8.36344 1.14855 8.18905 1.63218 8.18905L11.4536 8.18905L7.366 4.08749C7.01258 3.75267 6.83587 3.33414 6.83587 2.83191C6.83587 2.32968 7.01258 1.91115 7.366 1.57633L8.41232 0.530012C8.76574 0.176589 9.18427 -0.00012207 9.6679 -0.00012207C10.1608 -0.00012207 10.584 0.176589 10.9374 0.530012L20.0195 9.61204C20.3636 9.93756 20.5356 10.3561 20.5356 10.8676C20.5356 11.3699 20.3636 11.793 20.0195 12.1372L10.9374 21.2192C10.5747 21.5633 10.1515 21.7354 9.6679 21.7354Z"
                      fill="#FF5C00"
                    />
                  </svg>
                )}
              </button>
            </motion.div>
          </div>
        </div>
        <div className="description-characters_line-bottom">
          <div
            className={`description-characters_line-bottom_doth ${
              currentIndex === 0 ? "active" : ""
            }`}
          ></div>
          <div
            className={`description-characters_line-bottom_doth ${
              currentIndex === 1 ? "active" : ""
            }`}
          ></div>
          <div
            className={`description-characters_line-bottom_doth ${
              currentIndex === 2 ? "active" : ""
            }`}
          ></div>
          <div
            className={`description-characters_line-bottom_doth ${
              currentIndex === 3 ? "active" : ""
            }`}
          ></div>
          <div
            className={`description-characters_line-bottom_doth ${
              currentIndex === 4 ? "active" : ""
            }`}
          ></div>
        </div>
        <svg
          className="description-characters_line-top"
          width="11"
          height="190"
          viewBox="0 0 11 190"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="5.74902"
            y1="-2.18557e-08"
            x2="5.74903"
            y2="170"
            stroke="url(#paint0_linear_38_560)"
          />
          <rect
            y="184.275"
            width="7.4607"
            height="7.38601"
            transform="rotate(-45 0 184.275)"
            fill="#6E542E"
          />
          <defs>
            <linearGradient
              id="paint0_linear_38_560"
              x1="5.24912"
              y1="170"
              x2="6.16117"
              y2="0.954582"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#6E542E" />
              <stop offset="1" stopColor="#F4C258" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className={`description-characters_menu ${
          isOpenMenu ? "description-characters_menu-open" : ""
        }`}
      >
        <button
          className={`header_button-menu description-characters_menu-btn ${
            isOpenMenu ? "header_button-menu_open" : ""
          }`}
          onClick={() => setOpenMenu(!isOpenMenu)}
        >
          <span>
            {isOpenMenu ? (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.94269 7.99597L15.8048 1.13385C16.0606 0.869036 16.0533 0.446966 15.7885 0.19118C15.5301 -0.0583556 15.1205 -0.0583556 14.8621 0.19118L7.99998 7.0533L1.13786 0.19118C0.873015 -0.0646057 0.450977 -0.0572618 0.195191 0.207555C-0.0543447 0.465904 -0.0543447 0.875505 0.195191 1.13385L7.05731 7.99597L0.195191 14.8581C-0.0650636 15.1184 -0.0650636 15.5404 0.195191 15.8008C0.455539 16.061 0.877547 16.061 1.13786 15.8008L7.99998 8.93865L14.8621 15.8008C15.1225 16.061 15.5445 16.061 15.8048 15.8008C16.065 15.5404 16.065 15.1184 15.8048 14.8581L8.94269 7.99597Z"
                  fill="#FF5C00"
                />
              </svg>
            ) : (
              <svg
                width="27"
                height="14"
                viewBox="0 0 27 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="27" height="1.5" fill="white" />
                <rect y="6" width="27" height="1.5" fill="white" />
                <rect y="12" width="27" height="1.5" fill="white" />
              </svg>
            )}
          </span>
        </button>
        <div className="description-characters_menu-wrapper">
          <h2 className="description-characters_menu-name">
            {heroItems[currentIndex].name}
          </h2>
          <span className="description-characters_menu-ability">
            {heroItems[currentIndex].ability}
          </span>
          <p className="description-characters_menu-text">
            {heroItems[currentIndex].description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
