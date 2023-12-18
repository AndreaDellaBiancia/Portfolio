import { useEffect, useState } from "react";
import CardProject from "../../components/CardProject/CardProject";
import Carroussel from "../../components/Carroussel/Carrousel";
import { getProjects } from "../../fetch/getProjects";
import pc from "./../../assets/images/projects/pc.jpg";
import { ImagePc, Title } from "./Style";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [cards, setCards] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    async function getData() {
      const projectsData = await getProjects();
      setProjects(projectsData);
    }

    getData();
  }, []);

  useEffect(() => {
    const cardData = projects.map((project) => ({
      key: project.id,
      content: <CardProject {...project} />,
    }));
    setCards(cardData);
  }, [projects]);

  return (
    <div>
      <Title>PROJETS</Title>
      <ImagePc src={pc} alt="pc" />
      {windowWidth < 750
        ? cards.length && cards.map((card) => card.content)
        : cards.length && (
            <Carroussel cards={cards} offset={2} showArrows={false} />
          )}
     
    </div>
  );
}

export default Projects;
