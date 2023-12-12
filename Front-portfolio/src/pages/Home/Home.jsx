import { useEffect, useState } from "react";
import homeImg from "./../../assets/images/home/homeImg.jpg";
import fusee from "./../../assets/images/home/fusee.png";
import fumee from "./../../assets/images/home/fumee.png";
import hangar from "./../../assets/images/home/hangar.png";

import {
  ExperiencesContainer,
  Hangar,
  HomeContainer,
  InfoContainer,
  LeftSide,
  RightSide,
} from "./Style.jsx";
import CardHome from "../../components/CardHome/CardHome.jsx";
import { getExperiences } from "../../fetch/getExperiences.jsx";

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [leftExperiences, setLeftExperiences] = useState([]);
  const [rightExperiences, setRightExperiences] = useState([]);

  console.log(scrollPosition);

  useEffect(() => {
    async function getDatas() {
      const experieces = await getExperiences();
      setLeftExperiences(experieces.left);
      setRightExperiences(experieces.right);
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
  const bottomOfScreen = window.innerHeight + window.scrollY;
  console.log("Position du bas de l'écran :", bottomOfScreen);
  return (
    <HomeContainer>
      <h1 className="animate__animated animate__fadeInDown">
        Andrea Della Biancia
      </h1>
      <h2 className="animate__animated animate__zoomIn">
        Développeur web fullstack
      </h2>
      <img src={homeImg} alt="" style={{ width: "50%" }} />
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
        </div>
        <div
          style={{
            width: "50%",
            height: "10rem",
            backgroundColor: "white",
            position: "absolute",
            bottom: "-5rem",
            display: "flex",
            justifyContent: "center",
            borderRadius: "10px 10px 0 0 ",
          }}
        >
          <img
            src={fusee}
            alt="fusee"
            style={{
              position: "relative",
              width: "4rem",
              height: "8rem",
              marginTop: "3rem",
            }}
          />
        </div>
      </InfoContainer>
      <ExperiencesContainer>
        <div className="experiences">
          <LeftSide>
            {leftExperiences.map((exp, index) => (
              <CardHome key={index} scrollPosition={scrollPosition} {...exp} />
            ))}
          </LeftSide>
          <div
            className="line"
            style={{
              height: `${scrollPosition - 9}%`,
              marginBottom: "5rem",
              position: "relative",
              transition: "height 0.5s ease-in-out",
            }}
          >
            {" "}
          </div>
          <RightSide>
            {rightExperiences.map((exp, index) => (
              <CardHome key={index} scrollPosition={scrollPosition} {...exp} />
            ))}
          </RightSide>
        </div>
        <div
          className="images-projects"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
          }}
        >
           <Hangar>
           <h3 style={{position: "relative", top: "2.5rem", fontWeight: "bold", fontSize:"2.5rem"}}>PROJETS</h3>
            <img
              src={hangar}
              alt="hangar"
              style={{
                width: "15rem",
                position: "relative", bottom: "2rem"
              }}
            />
          </Hangar>
          <div>
            
            <img
              src={fumee}
              alt="fumee"
              style={{
                width: "15rem",
                height: "20rem",
              }}
            />
          </div>
        </div>
        <div style={{width: "100%", height: "11rem", backgroundColor: "#4da038", position: "absolute", bottom: "-5rem", zIndex: -1}}></div>
      </ExperiencesContainer>
    </HomeContainer>
  );
}

export default Home;
