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
  InfoThemeContainer,
  InfosContainer,
  InfosItem,
  InfosItemTechno,
  InfosList,
  InfosListTechnos,
  InfosTitle,
  ProjectDescription,
  SiteBtn,
  TechnoImg,
  Title,
} from "./Style";

function ProjectDetails() {
  const [project, setProject] = useState({});

  const { projectTitle } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const title = projectTitle.replace("_", " ");
    async function getData(title) {
      const projectData = await getProjectByTitle(title);
      setProject(projectData);
    }
    getData(title);
  }, []);

  useEffect(() => {
    if (project.description) {
      let text = document.getElementById("text");
      let splitText = project.description.split("");
      function AjoutDeLettre(splitText, text) {
        if (i < splitText.length) {
          text.innerHTML += splitText[i];
          if (splitText[i] === "\n") {
            text.innerHTML += "<br>";
          }
        }
        i++;
      }

      function htmlize(text) {
        return text.replace(/\n/g, "<br>");
      }

      let i = 0;
      if (window.innerWidth > 1224) {
        text.innerHTML = "";

        setInterval(function () {
          AjoutDeLettre(splitText, text);
        }, 20);
      } else {
        const htmlText = htmlize(project.description)
        text.innerHTML = htmlText;
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
        <ProjectDescription id="text"></ProjectDescription>
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
          <InfoThemeContainer>
            <InfosTitle>Technologies</InfosTitle>
            <InfosListTechnos id="list">
              {project.logosTechno.map((techno) => (
                <InfosItemTechno>
                  <TechnoImg
                    src={require(`../../assets/images/technos/${techno.name}`)}
                    alt=""
                  />
                  {getTechnoName(techno.name)}
                </InfosItemTechno>
              ))}
            </InfosListTechnos>
          </InfoThemeContainer>
        )}
        {project.projectTargets && (
          <InfoThemeContainer>
            <InfosTitle>Objectifs</InfosTitle>
            <InfosList>
              {project?.projectTargets.map((target) => (
                <InfosItem>{target.name}</InfosItem>
              ))}
            </InfosList>
          </InfoThemeContainer>
        )}
        {project.projectFunctionalities && (
          <InfoThemeContainer>
            <InfosTitle>Fonctionnalités</InfosTitle>
            <InfosList>
              {project.projectFunctionalities.map((functionality) => (
                <InfosItem>{functionality.name}</InfosItem>
              ))}
            </InfosList>
          </InfoThemeContainer>
        )}
      </InfosContainer>
    </Container>
  );
}

export default ProjectDetails;
