import {
  ButtonContainer,
  CardContainer,
  CardImg,
  ImgContainer,
  Title,
} from "./Style";

function CardProject({ title, picture }) {
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
        <button class="button-29" role="button">
          DETAILS
        </button>
        <button class="button-29" role="button">
          SITE
        </button>
      </ButtonContainer>
    </CardContainer>
  );
}

export default CardProject;
