import link_img from "../../assets/LinkImg";

import "./AboutGame.css";

import { OrangeButton } from "../Buttons/OrangeButton/OrangeButton";

const aboutGame = [
  { img: link_img.aboutImg1 },
  {
    name: "1. Epic Battles Reimagined - Dive into DOT",
    description:
      "Where the legacy of Dota 2 is reborn with enhanced gameplay! Encounter a diverse roster of enthralling heroes and immerse yourself in innovative match setups – from classic 5v5 to the intense triple-threat action of 3v3v3. Prepare for a battle arena that pulsates with life and vibrancy!",
  },
  { img: link_img.aboutImg2 },
  {
    name: "2. True GameFi Thrills - Embark on a real GameFi odyssey with DOT!",
    description:
      "Forge your fortune by trading thousands of in-game items as exclusive NFTs. Feel the adrenaline rush as you bet $DOT tokens on upcoming battles – where the victor claims all. Gaming isn't just fun; it's a potential investment, with every victory swelling your digital wallet.",
  },
  { img: link_img.aboutImg3 },
  {
    name: "3. Championship Glory - Step into the spotlight in our DOT",
    description:
      "Championships! Compete as a lone warrior or rally your team, with each tournament streamed live for the world to witness. Fight for honor, fame, and a colossal prize pot in electrifying showdowns that will be etched in the annals of gaming history.",
  },
  { img: link_img.aboutImg4 },
  {
    name: "4. $DOT - The Currency of Champions",
    description:
      "Assert your financial strategy by trading $DOT on leading platforms and exchanges. As the lifeblood of our game's ecosystem, $BOTH tokens are your key to a vast economy, powering trades, bets, and the market, pulsing at the heart of DOT.",
  },
  { img: link_img.aboutImg5 },
  {
    name: "5. Web 3.0 - A New Gaming Dimension",
    description:
      "DOT isn't just a game; it's a gateway to the future. Built on the robust foundation of Web 3.0, it's an immersive world where every interaction, transaction, and victory is empowered by the blockchain. Experience gaming with unrivaled transparency, security, and community-driven development.",
  },
  { img: link_img.aboutImg6 },
  {
    name: "6. Connective Combat - Multi-Chain Mayhem",
    description:
      "With DOT’s multi-chain functionality, your gaming legacy lives on any blockchain. Dominate across networks, keep your assets agile, and your victories versatile.",
  },
];

export const AboutGame = () => {
  return (
    <div className="about-game">
      <div className="container">
        <div className="about-game_wrapper">
          <div className="about-game_card-content">
            {aboutGame.map((item, index) => (
              <div className="about-game_item" key={index}>
                {item.img && (
                  <img
                    className={`about-game_item-img ${
                      index === 2 ? "center-img" : ""
                    }`}
                    src={item.img}
                    alt=""
                  />
                )}
                {item.name && (
                  <h3 className="about-game_item-title">{item.name}</h3>
                )}
                {item.description && (
                  <p className="about-game_item-description">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
          <OrangeButton index={"about-game_button"}>
            Connect Wallet
          </OrangeButton>
        </div>
      </div>
    </div>
  );
};
