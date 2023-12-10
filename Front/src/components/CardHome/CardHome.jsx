import { CardContainer, Content, Title, Subtitle } from "./Style";

function CardHome({scrollPosition,  scrollPositionEffect, titleImg, images, effects, margin, title, subtitle, content}) {
console.log(margin);
  return (
    <CardContainer
    className={
      scrollPosition >= scrollPositionEffect
        ? effects.in
        : effects.out
    }
    $marginCard={margin}
    $scrollPosition={scrollPosition}
    $scrollPositionEffect={scrollPositionEffect}
  >
    <Title>
    <img
      style={{ width: titleImg.size}}
      src={titleImg.image}
      alt="js"
    /> {title}
    </Title>
    <Subtitle>{subtitle}</Subtitle>
    <Content>
     {content}
    </Content>
    {images?.map((image, index) =>(
      <img
      key={index}
      style={{ width: image.size, marginRight: "1.5rem" }}
      src={image.image}
      alt=""
    />
    ))}
   
  </CardContainer>
  )
}
  
export default CardHome;