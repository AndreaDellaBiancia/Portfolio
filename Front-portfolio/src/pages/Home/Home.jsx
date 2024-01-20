import { useEffect, useState } from "react";
import homeImg from "./../../assets/images/home/homeImg.jpg";
import fusee from "./../../assets/images/home/fusee.png";
import fumee from "./../../assets/images/home/fumee.png";
import hangar from "./../../assets/images/home/hangar.png";
import { Link } from "react-router-dom";

import {
  ExperiencesContainer,
  FooterContainer,
  FooterHome,
  Grass,
  Hangar,
  HomeContainer,
  ImgHomeContainer,
  InfoContainer,
  LeftSide,
  RightSide,
  RoketImg,
  Smoke,
  WhiteDiv,
  WhiteDiv2,
} from "./Style.jsx";
import CardHome from "../../components/CardHome/CardHome.jsx";
import { getExperiences } from "../../fetch/getExperiences.jsx";

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [leftExperiences, setLeftExperiences] = useState([]);
  const [rightExperiences, setRightExperiences] = useState([]);
  const [allExperiences, setAllExperiences] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [experiencesContainerHeight, setExperiencesContainerHeight] =
    useState();

  function getSlug(title) {
    //Création slug
    const cutSlug = title.split("(")[0].trim();
    const newslug = cutSlug.replaceAll(" ", "_");
    return newslug;
  }

  useEffect(() => {
    async function getDatas() {
      const experieces = await getExperiences();
      setLeftExperiences(experieces.left);
      setRightExperiences(experieces.right);

      let heigthExpContainer = 0;
      if (windowWidth > 1224) {
        heigthExpContainer =
          (experieces.left.length + experieces.right.length) * 363;
      } else if(windowWidth > 768) {
        heigthExpContainer =
          (experieces.left.length + experieces.right.length) * 518;
      }else{
        heigthExpContainer =
          (experieces.left.length + experieces.right.length) * 604;
      }

      setExperiencesContainerHeight(heigthExpContainer);
      let experiencesList = [];
      experieces.left.forEach((exp) => {
        experiencesList.push(exp);
      });
      experieces.right.forEach((exp) => {
        experiencesList.push(exp);
      });

      const newList = experiencesList.sort((a, b) => b.position - a.position);

      setAllExperiences(newList);
    }

    getDatas();
  }, []);

  const handleScroll = () => {
    const position = Math.ceil(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HomeContainer>
      <h1 className="animate__animated animate__fadeInDown">
        Andrea Della Biancia
      </h1>
      <h2 className="animate__animated animate__zoomIn">
        Développeur web fullstack
      </h2>
      <ImgHomeContainer>
        <img src={homeImg} alt="Informaticien" />
      </ImgHomeContainer>
      <InfoContainer>
        <div className="infos">
          <h3>Bonjour, je m'appelle Andrea</h3>
          <p>
            Après avoir exploré différents domaines professionnels, j'ai pris la
            décision, à l'âge de 31 ans, de me reconvertir en tant que
            développeur web ! Cette reconversion a duré 2 ans et m'a permis
            d'acquérir de nombreuses compétences, tout en rencontrant des
            personnes bienveillantes dont je garde d'excellents souvenirs.
          </p>
          <p></p>
        </div>
        <WhiteDiv>
          <RoketImg src={fusee} alt="fusee" />
        </WhiteDiv>
        <WhiteDiv2></WhiteDiv2>
      </InfoContainer>
      <ExperiencesContainer $size={`${experiencesContainerHeight}px`}>
        {windowWidth > 1224 ? (
          <div className="experiences">
            <div
              className="line"
              style={{ height: ` ${scrollPosition - 5}%` }}
            ></div>
            <LeftSide style={{marginTop: leftExperiences.length >= rightExperiences.length ? "" : "275px" }}>
              {leftExperiences.map((exp, index) => {
                if (exp.project?.id != null) {
                  return (
                    <Link
                      to={`/projets/${getSlug(exp.title)}`}
                      style={{
                        color: "black",
                        textDecoration: "none",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <CardHome
                        key={index}
                        scrollPosition={scrollPosition}
                        {...exp}
                        link={getSlug(exp.title)}
                      />
                    </Link>
                  );
                } else {
                  return (
                    <CardHome
                      key={index}
                      scrollPosition={scrollPosition}
                      {...exp}
                    />
                  );
                }
              })}
            </LeftSide>

            <RightSide style={{marginTop: leftExperiences.length < rightExperiences.length ? "" : "275px" }}>
              {rightExperiences.map((exp, index) => {
                if (exp.project?.id != null) {
                  return (
                    <Link
                      to={`/projets/${getSlug(exp.title)}`}
                      style={{
                        color: "black",
                        textDecoration: "none",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <CardHome
                        key={index}
                        scrollPosition={scrollPosition}
                        {...exp}
                      />
                    </Link>
                  );
                } else {
                  return (
                    <CardHome
                      key={index}
                      scrollPosition={scrollPosition}
                      {...exp}
                    />
                  );
                }
              })}
            </RightSide>
          </div>
        ) : (
          <div className="experiences">
            <div
              className="line"
              style={{ height: `${scrollPosition - 2}%` }}
            ></div>
            {allExperiences.map((exp, index) => {
              if (exp.project?.id != null) {
                return (
                  <>
                    <Link
                      to={`/projets/${getSlug(exp.title)}`}
                      style={{
                        color: "black",
                        textDecoration: "none",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <CardHome
                        key={index}
                        scrollPosition={scrollPosition}
                        {...exp}
                      />
                    </Link>
                    <hr style={{ width: "80%", margin: "0 auto" }}></hr>
                  </>
                );
              } else {
                return (
                  <>
                    <CardHome
                      key={index}
                      scrollPosition={scrollPosition}
                      {...exp}
                    />
                    <hr style={{ width: "80%", margin: "0 auto" }}></hr>
                  </>
                );
              }
            })}
          </div>
        )}
        <FooterHome
          className={
            scrollPosition >= 98
              ? "animate__animated animate__fadeIn"
              : "animate__animated animate__zoomOut"
          }
        >
          <FooterContainer>
            <Link
              to="/projets"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Hangar>
                <h3>PROJETS</h3>
                <img src={hangar} alt="hangar" />
              </Hangar>
            </Link>
            <Smoke>
              <img src={fumee} alt="fumee" />
            </Smoke>
          </FooterContainer>
          <Grass></Grass>
        </FooterHome>
      </ExperiencesContainer>
    </HomeContainer>
  );
}

export default Home;
