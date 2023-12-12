import { CardContainer, Content, Title, Subtitle } from "./Style";

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
  return (
    <CardContainer
      className={
        scrollPosition >= scrollPositionEffect ? effectIn.name : effectOut.name
      }
      $marginCard={margin}
      $scrollPosition={scrollPosition}
      $scrollPositionEffect={scrollPositionEffect}
    >
      <Title>
        <img
          style={{ width: imgTitleSize }}
          src={require(`../../assets/images/technos/${imgTitle}`)}
          alt="js"
        />{" "}
        {title}
      </Title>
      <Subtitle>{subtitle}</Subtitle>
      <Content>{content}</Content>
      {logosTechno?.map((logo) => (
        <div style={{width:"3.5rem", marginRight: "1.5rem", marginBottom: "1rem"}}>
          <img
            key={logo.id}
            style={{ width: "100%"}}
            src={require(`../../assets/images/technos/${logo.name}`)}
            alt=""
          />
        </div>
      ))}
    </CardContainer>
  );
}

export default CardHome;
