// src/pages/Home.tsx

import Introduction from "../components/sections/Introduction";
import Projects from "../components/sections/Projects";
import SkillsSection from "../components/sections/SkillsSection";

const Home = () => {
  return (
    <>
      <Introduction />
      <Projects id="projetos" />
      <SkillsSection id="habilidades" />
    </>
  );
};

export default Home;