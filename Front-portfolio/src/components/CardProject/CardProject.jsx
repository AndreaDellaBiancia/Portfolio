import { Link } from "react-router-dom";
import {
  ButtonContainer,
  CardContainer,
  CardImg,
  DetailsBtn,
  ImgContainer,
  SiteBtn,
  Title,
} from "./Style";

function CardProject({ title, picture, siteLink }) {
  const slug = title.replaceAll(" ", "_");

  return (
    <CardContainer>
      <ImgContainer>
        <CardImg
          src={require(`../../assets/images/projects/${picture}`)}
          alt=""
        />
      </ImgContainer>

      <Title>{title}</Title>
      <ButtonContainer>
        <Link to={`/projets/${slug}`}>
          <DetailsBtn>Détails</DetailsBtn>
        </Link>
        {siteLink && (
          <a href={siteLink} target="_blank" rel="noreferrer">
            <SiteBtn>Site</SiteBtn>
          </a>
        )}
      </ButtonContainer>
    </CardContainer>
  );
}

export default CardProject;
