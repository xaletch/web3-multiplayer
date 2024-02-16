import { AboutGame } from "../components/AboutGame/AboutGame";
import { DescriptionCharacters } from "../components/DescriptionCharacters/DescriptionCharacters";
import { Hero } from "../components/Hero/Hero";
import { PopularCharacters } from "../components/PopularCharacters/PopularCharacters";
import { Video } from "../components/Video/Video";
import { Subscribe } from "../components/Subscribe/Subscribe";

export const Home = () => {
  return (
    <div className="">
      <Hero />
      <AboutGame />
      <DescriptionCharacters />
      <PopularCharacters />
      <Video />
      <Subscribe />
    </div>
  );
};
