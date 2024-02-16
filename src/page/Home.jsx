import { AboutGame } from "../components/AboutGame/AboutGame";
import { DescriptionCharacters } from "../components/DescriptionCharacters/DescriptionCharacters";
import { Hero } from "../components/Hero/Hero";
import { PopularCharacters } from "../components/PopularCharacters/PopularCharacters";

export const Home = () => {
  return (
    <div className="">
      <Hero />
      <AboutGame />
      <DescriptionCharacters />
      <PopularCharacters />
    </div>
  );
};
