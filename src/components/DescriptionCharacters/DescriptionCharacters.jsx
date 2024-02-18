import { useState } from "react";
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
    <div className="description-characters">
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
          <img
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
            <div
              className={`description-characters_description ${
                isAnimating ? "slide-anim-content" : ""
              }`}
            >
              <h2 className="description-characters_description-name">
                {heroItems[currentIndex].name}
              </h2>
              <span className="description-characters_description-ability">
                {heroItems[currentIndex].ability}
              </span>
              <p className="description-characters_description-text">
                {heroItems[currentIndex].description}
              </p>
              <button
                className="description-characters_description-more"
                onClick={() => setOpenMenu(!isOpenMenu)}
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
              </button>
            </div>
            <div className="description-characters_buttons">
              <button
                onClick={handlePrevClick}
                className="description-characters_buttons-prev description-characters_btn"
                disabled={currentIndex === 0}
              >
                {currentIndex === 0 ? (
                  <svg
                    width="12"
                    height="22"
                    viewBox="0 0 12 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7083 20.2931C11.8012 20.386 11.8749 20.4963 11.9252 20.6177C11.9755 20.7391 12.0013 20.8692 12.0013 21.0006C12.0013 21.132 11.9755 21.2621 11.9252 21.3835C11.8749 21.5048 11.8012 21.6151 11.7083 21.7081C11.6154 21.801 11.5051 21.8747 11.3837 21.9249C11.2623 21.9752 11.1322 22.0011 11.0008 22.0011C10.8694 22.0011 10.7393 21.9752 10.6179 21.9249C10.4965 21.8747 10.3862 21.801 10.2933 21.7081L0.293286 11.7081C0.20031 11.6152 0.126551 11.5049 0.0762272 11.3835C0.0259029 11.2621 0 11.132 0 11.0006C0 10.8691 0.0259029 10.739 0.0762272 10.6176C0.126551 10.4962 0.20031 10.3859 0.293286 10.2931L10.2933 0.293056C10.4809 0.105415 10.7354 -5.23096e-09 11.0008 0C11.2662 5.23096e-09 11.5206 0.105415 11.7083 0.293056C11.8959 0.480697 12.0013 0.735192 12.0013 1.00056C12.0013 1.26592 11.8959 1.52042 11.7083 1.70806L2.41454 11.0006L11.7083 20.2931Z"
                      fill="#FF5C00"
                    />
                  </svg>
                ) : (
                  <svg
                    width="12"
                    height="22"
                    viewBox="0 0 12 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7083 20.2931C11.8012 20.386 11.8749 20.4963 11.9252 20.6177C11.9755 20.7391 12.0013 20.8692 12.0013 21.0006C12.0013 21.132 11.9755 21.2621 11.9252 21.3835C11.8749 21.5048 11.8012 21.6151 11.7083 21.7081C11.6154 21.801 11.5051 21.8747 11.3837 21.9249C11.2623 21.9752 11.1322 22.0011 11.0008 22.0011C10.8694 22.0011 10.7393 21.9752 10.6179 21.9249C10.4965 21.8747 10.3862 21.801 10.2933 21.7081L0.293286 11.7081C0.20031 11.6152 0.126551 11.5049 0.0762272 11.3835C0.0259029 11.2621 0 11.132 0 11.0006C0 10.8691 0.0259029 10.739 0.0762272 10.6176C0.126551 10.4962 0.20031 10.3859 0.293286 10.2931L10.2933 0.293056C10.4809 0.105415 10.7354 -5.23096e-09 11.0008 0C11.2662 5.23096e-09 11.5206 0.105415 11.7083 0.293056C11.8959 0.480697 12.0013 0.735192 12.0013 1.00056C12.0013 1.26592 11.8959 1.52042 11.7083 1.70806L2.41454 11.0006L11.7083 20.2931Z"
                      fill="#FFF"
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
                    width="12"
                    height="22"
                    viewBox="0 0 12 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7081 11.7081L1.70806 21.7081C1.61515 21.801 1.50485 21.8747 1.38345 21.9249C1.26206 21.9752 1.13195 22.0011 1.00056 22.0011C0.869161 22.0011 0.739053 21.9752 0.61766 21.9249C0.496267 21.8747 0.385966 21.801 0.293056 21.7081C0.200145 21.6151 0.126445 21.5048 0.0761623 21.3835C0.0258797 21.2621 0 21.132 0 21.0006C0 20.8692 0.0258797 20.7391 0.0761623 20.6177C0.126445 20.4963 0.200145 20.386 0.293056 20.2931L9.58681 11.0006L0.293056 1.70806C0.105415 1.52042 -1.97712e-09 1.26592 0 1.00056C1.97712e-09 0.735192 0.105415 0.480697 0.293056 0.293056C0.480696 0.105415 0.735192 1.97712e-09 1.00056 0C1.26592 -1.97712e-09 1.52042 0.105415 1.70806 0.293056L11.7081 10.2931C11.801 10.3859 11.8748 10.4962 11.9251 10.6176C11.9754 10.739 12.0013 10.8691 12.0013 11.0006C12.0013 11.132 11.9754 11.2621 11.9251 11.3835C11.8748 11.5049 11.801 11.6152 11.7081 11.7081Z"
                      fill="#FFF"
                    />
                  </svg>
                ) : (
                  <svg
                    width="12"
                    height="22"
                    viewBox="0 0 12 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.7081 11.7081L1.70806 21.7081C1.61515 21.801 1.50485 21.8747 1.38345 21.9249C1.26206 21.9752 1.13195 22.0011 1.00056 22.0011C0.869161 22.0011 0.739053 21.9752 0.61766 21.9249C0.496267 21.8747 0.385966 21.801 0.293056 21.7081C0.200145 21.6151 0.126445 21.5048 0.0761623 21.3835C0.0258797 21.2621 0 21.132 0 21.0006C0 20.8692 0.0258797 20.7391 0.0761623 20.6177C0.126445 20.4963 0.200145 20.386 0.293056 20.2931L9.58681 11.0006L0.293056 1.70806C0.105415 1.52042 -1.97712e-09 1.26592 0 1.00056C1.97712e-09 0.735192 0.105415 0.480697 0.293056 0.293056C0.480696 0.105415 0.735192 1.97712e-09 1.00056 0C1.26592 -1.97712e-09 1.52042 0.105415 1.70806 0.293056L11.7081 10.2931C11.801 10.3859 11.8748 10.4962 11.9251 10.6176C11.9754 10.739 12.0013 10.8691 12.0013 11.0006C12.0013 11.132 11.9754 11.2621 11.9251 11.3835C11.8748 11.5049 11.801 11.6152 11.7081 11.7081Z"
                      fill="#FF5C00"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <svg
          className="description-characters_line-bottom"
          width="6"
          height="238"
          viewBox="0 0 6 238"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 3C6 4.65685 4.65685 6 3 6C1.34315 6 0 4.65685 0 3C0 1.34315 1.34315 0 3 0C4.65685 0 6 1.34315 6 3ZM6 32C6 33.6569 4.65685 35 3 35C1.34315 35 0 33.6569 0 32C0 30.3431 1.34315 29 3 29C4.65685 29 6 30.3431 6 32ZM3 64C4.65685 64 6 62.6569 6 61C6 59.3431 4.65685 58 3 58C1.34315 58 0 59.3431 0 61C0 62.6569 1.34315 64 3 64ZM6 90C6 91.6569 4.65685 93 3 93C1.34315 93 0 91.6569 0 90C0 88.3431 1.34315 87 3 87C4.65685 87 6 88.3431 6 90ZM3 122C4.65685 122 6 120.657 6 119C6 117.343 4.65685 116 3 116C1.34315 116 0 117.343 0 119C0 120.657 1.34315 122 3 122ZM6 148C6 149.657 4.65685 151 3 151C1.34315 151 0 149.657 0 148C0 146.343 1.34315 145 3 145C4.65685 145 6 146.343 6 148ZM3 180C4.65685 180 6 178.657 6 177C6 175.343 4.65685 174 3 174C1.34315 174 0 175.343 0 177C0 178.657 1.34315 180 3 180ZM6 206C6 207.657 4.65685 209 3 209C1.34315 209 0 207.657 0 206C0 204.343 1.34315 203 3 203C4.65685 203 6 204.343 6 206ZM3 238C4.65685 238 6 236.657 6 235C6 233.343 4.65685 232 3 232C1.34315 232 0 233.343 0 235C0 236.657 1.34315 238 3 238Z"
            fill="url(#paint0_linear_38_543)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_38_543"
              x1="-24"
              y1="198"
              x2="-24"
              y2="27"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF5C00" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="#FF5C00" stopOpacity="0.35" />
            </linearGradient>
          </defs>
        </svg>

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
          <svg
            width="51"
            height="37"
            viewBox="0 0 51 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.508563 36.5L1.11992 0.5H50.4813L49.1567 36.5H0.508563Z"
              stroke="#F9F9F9"
            />
          </svg>
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
    </div>
  );
};
