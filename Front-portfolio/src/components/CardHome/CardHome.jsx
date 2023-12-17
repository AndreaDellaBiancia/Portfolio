import { useEffect, useState } from "react";
import {
  CardContainer,
  Content,
  Title,
  Subtitle,
  TechnosContainer,
  ImgTitleContainer,
  TechnoImgContainer,
  TechnoImg,
  ImageContent,
} from "./Style";
import ModalImage from "../ModalImage/ModalImage";

function CardHome({
  scrollPosition,
  scrollPositionEffect,
  imgTitle,
  imgTitleSize,
  effectIn,
  effectOut,
  margin,
  title,
  subtitle,
  content,
  logosTechno,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isImage, setIsImage] = useState(false);
  const [imageContent, setImageContent] = useState("");
  const [modalImageShow, setModalImageShow] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Ajoute un écouteur d'événements pour détecter les changements de taille d'écran
    window.addEventListener("resize", handleResize);
    if (content.startsWith("image")) {
      const imageString = content.split(" ");
      const nomDuFichier = imageString[imageString.length - 1];
      setImageContent(nomDuFichier);
      setIsImage(true);
    } else {
      setIsImage(false);
    }
    // Nettoyage de l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Le tableau vide signifie que cet effet n'a besoin de s'exécuter qu'une fois après le montage initial



  return (
    <CardContainer
      className={
        windowWidth > 1224
          ? scrollPosition >= scrollPositionEffect
            ? effectIn.name
            : effectOut.name
          : ""
      }
      $marginCard={margin}
      $scrollPosition={scrollPosition}
      $scrollPositionEffect={scrollPositionEffect}
    >
      <Title>
        <ImgTitleContainer>
          <img
            src={require(`../../assets/images/technos/${imgTitle}`)}
            alt="js"
          />
        </ImgTitleContainer>
        {title}
      </Title>
      <Subtitle>{subtitle}</Subtitle>
      {isImage ? (
        <ImageContent>
          <img
            className="show-img-card"
            src={require(`../../assets/images/home/${imageContent}`)}
            alt={imageContent}
            onClick={isImage ? () => setModalImageShow(true) : null}
          />
        </ImageContent>
      ) : (
        <Content>{content}</Content>
      )}

      <TechnosContainer>
        {logosTechno?.map((logo) => (
          <TechnoImgContainer key={logo.id}>
            <TechnoImg
              src={require(`../../assets/images/technos/${logo.name}`)}
              alt={logo.name}
            />
          </TechnoImgContainer>
        ))}
      </TechnosContainer>
      <ModalImage
        show={modalImageShow}
        onHide={() => setModalImageShow(false)}
        imageContent={imageContent}
      />
    </CardContainer>
  );
}

export default CardHome;
