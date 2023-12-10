import { useEffect, useState } from "react";
import homeImg from "./../../assets/images_general/homeImg.jpg";
import fusee from "./../../assets/images_general/fusee.png";

import phpLogo from "./../../assets/images_general/php.png";
import jsLogo from "./../../assets/images_general/js.png";
import mySqlLogo from "./../../assets/images_general/mysql.svg";
import htmlLogo from "./../../assets/images_general/html.png";
import cssLogo from "./../../assets/images_general/css.png";
import symfonyLogo from "./../../assets/images_general/symfony.svg";
import schoolLogo from "./../../assets/images_general/school.svg";
import RDLogo from "./../../assets/images_general/logoRD.png";
import reactLogo from "./../../assets/images_general/react.png";

import {
  ExperiencesContainer,
  HomeContainer,
  InfoContainer,
  LeftSide,
  RightSide,
} from "./Style.jsx";
import CardHome from "../../components/CardHome/CardHome.jsx";

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

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

  console.log("====================================");
  console.log(scrollPosition);
  console.log("====================================");
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
        <LeftSide>
         
        </LeftSide>
        <div
          className="line"
          style={{ height: `${scrollPosition - 9}%`, marginBottom: "5rem" }}
        ></div>
        <RightSide>
         
        </RightSide>
      </ExperiencesContainer>
    </HomeContainer>
  );
}

export default Home;
