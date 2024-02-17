import Marquee from "react-fast-marquee";

import "./PopularCharacters.css";

import link_img from "../../assets/LinkImg";

import { OrangeButton } from "../Buttons/OrangeButton/OrangeButton";

const cardsTop = [
  {
    img: link_img.terrifyingVersionPlague,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.chaosRend,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.agileArcher,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.herculesDota2,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.hexMystic,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.netherSoulMystical,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.wardDraconic,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.bruteTowering,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.jungleStalker,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.strikeScholar,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.WarriorShroudedInDark,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.ruggedFigureResembling,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.venomBite,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.romanGodLike,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.emberWarrior,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
];
const cardsBottom = [
  {
    img: link_img.terrifyingVersionPlague,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.chaosRend,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.agileArcher,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.herculesDota2,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.hexMystic,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.netherSoulMystical,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.wardDraconic,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.bruteTowering,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.jungleStalker,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.strikeScholar,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.WarriorShroudedInDark,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.ruggedFigureResembling,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.venomBite,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.romanGodLike,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
  {
    img: link_img.emberWarrior,
    name: "Ember Arch",
    ability: "Archer",
    icon: link_img.iconArcher,
  },
];

export const PopularCharacters = () => {
  return (
    <div
      className="popular-characters"
      style={{
        backgroundImage: `url(${link_img.popularCharactersBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="popular-characters_wrapper">
        <div className="popular-characters_description">
          <h2 className="popular-characters_description-name">
            Top most popular characters
          </h2>
          <p className="popular-characters_description-text">
            Find a hero that suits your fighting style!Find out information
            about the heroes and go ahead to victory!
          </p>
          <OrangeButton>Watch all</OrangeButton>
        </div>
        <div className="popular-characters_running-cards">
          <Marquee pauseOnHover={true} direction="left" speed={30}>
            <div className="popular-characters_running-cards_content">
              {cardsTop.map((item, index) => (
                <div
                  className="popular-characters_running-cards_item"
                  key={index}
                >
                  <img src={item.img} alt={item.name} />
                  <div className="popular-characters_running-cards_item_description">
                    <h3 className="popular-characters_running-cards_item_description-name">
                      {item.name}
                    </h3>
                    <div className="popular-characters_running-cards_item_description-ability">
                      <img src={item.icon} alt={item.ability} />
                      <p className="popular-characters_running-cards_item_description-ability_name">
                        {item.ability}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
          <Marquee pauseOnHover={true} direction="right" speed={30}>
            <div className="popular-characters_running-cards_content">
              {cardsBottom.map((item, index) => (
                <div
                  className="popular-characters_running-cards_item"
                  key={index}
                >
                  <img src={item.img} alt={item.name} />
                  <div className="popular-characters_running-cards_item_description">
                    <h3 className="popular-characters_running-cards_item_description-name">
                      {item.name}
                    </h3>
                    <div className="popular-characters_running-cards_item_description-ability">
                      <img src={item.icon} alt={item.ability} />
                      <p className="popular-characters_running-cards_item_description-ability_name">
                        {item.ability}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};
