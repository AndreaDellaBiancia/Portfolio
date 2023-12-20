import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectByTitle } from "../../fetch/getProjectByTitle";

import Carousel from "react-bootstrap/Carousel";
import {
  ButtonsContainer,
  CarouselDescriptionContainer,
  CarouselImg,
  CarouselImgContainer,
  Container,
  GithubBtn,
  Header,
  ImgTitle,
  InfosContainer,
  InfosItem,
  InfosList,
  InfosTitle,
  SiteBtn,
  TechnoImg,
  Title,
} from "./Style";

function ProjectDetails() {
  const [project, setProject] = useState({});

  const { projectTitle } = useParams();

  useEffect(() => {
    const title = projectTitle.replace("_", " ");
    async function getData(title) {
      const projectData = await getProjectByTitle(title);
      setProject(projectData);
    }
    getData(title);
  }, []);

  useEffect(() => {
    let text = document.getElementById("text");
    let splitText = text.textContent.split("");

    text.innerHTML = "";
    let i = 0;
    setInterval(function () {
      AjoutDeLettre(splitText, text);
    }, 30);

    function AjoutDeLettre(splitText, text) {
      if (i < splitText.length) {
        text.innerHTML += splitText[i];
        if (splitText[i] === "\n") {
          text.innerHTML += "<br>";
        }
        i++;
      }
    }
  }, [project.description]);

  function getTechnoName(text) {
    return text.split(".")[0];
  }

  console.log(project);
  return (
    <Container>
      <Header>
        <Title>
          {project.title}
          {project.picture && (
            <ImgTitle
              src={require(`../../assets/images/projects/${project.picture}`)}
              alt=""
            />
          )}
        </Title>
        <ButtonsContainer>
          {project.siteLink && (
            <a href={project.siteLink} target="_blank" rel="noreferrer">
              <SiteBtn>Site</SiteBtn>
            </a>
          )}
          {project.gitHubLink && (
            <a href={project.gitHubLink} target="_blank" rel="noreferrer">
              <GithubBtn>GitHub</GithubBtn>
            </a>
          )}
        </ButtonsContainer>
      </Header>
      <CarouselDescriptionContainer>
        <p id="text" style={{ fontSize: "1.2rem", width: "30%" }}>
          {project.description}
        </p>
        <Carousel data-bs-theme="dark" id="carousel">
          {project.projectPictures?.map((slide) => (
            <Carousel.Item interval={3000}>
              <CarouselImgContainer>
                <CarouselImg
                  src={require(`../../assets/images/projectMiniatures/${slide.name}`)}
                  alt=""
                />
              </CarouselImgContainer>
            </Carousel.Item>
          ))}
        </Carousel>
      </CarouselDescriptionContainer>
      <InfosContainer>
        {project.logosTechno && (
          <div>
            <InfosTitle>Technologies</InfosTitle>
            <InfosList>
              {project.logosTechno.map((techno) => (
                <InfosItem>
                  <TechnoImg
                    src={require(`../../assets/images/technos/${techno.name}`)}
                    alt=""
                  />
                  {getTechnoName(techno.name)}
                </InfosItem>
              ))}
            </InfosList>
          </div>
        )}
        {project.projectTargets && (
          <div>
            <InfosTitle>Objectifs</InfosTitle>
            <InfosList>
              {project?.projectTargets.map((target) => (
                <InfosItem>{target.name}</InfosItem>
              ))}
            </InfosList>
          </div>
        )}
        {project.projectFunctionalities && (
          <div>
            <InfosTitle>Fonctionnalités</InfosTitle>
            <InfosList>
              {project.projectFunctionalities.map((functionality) => (
                <InfosItem>{functionality.name}</InfosItem>
              ))}
            </InfosList>
          </div>
        )}
      </InfosContainer>
    </Container>
  );
}

export default ProjectDetails;
