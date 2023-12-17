import styled from "styled-components";
import { devices } from "../../assets/variables-styles/var-style";

export const CardContainer = styled.div`
  width: 100%;
  padding: 0 15px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  --animate-duration: 1s;


  @media ${devices.tablet} {
    padding: 0 15px;
    width: 80%;
    min-height: 350px;
  }

  @media ${devices.laptop} {
    padding: 0 15px;
    margin: ${(props) => props.$marginCard};
    flex-direction: column;
    justify-content: flex-start;
    min-height: 500px;

    .show-img-card {
      transition: transform 1s;
    }
  
    .show-img-card:hover {
      cursor: pointer;
      transform: scale(1.3);
    }
  }

  @media ${devices.laptopL} {
    padding: 40px 0;
    margin: ${(props) => props.$marginCard};
    flex-direction: column;
    justify-content: flex-start;
    max-height: 650px;
  }
`;

export const Title = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 1.3rem;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media ${devices.tablet} {
    font-size: 1.6rem;
  }

  @media ${devices.laptop} {
    width: 85%;
    font-size: 1.7rem;
  }
`;

export const ImgTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  img {
    width: 5rem;
  }

  @media ${devices.tablet} {
    img {
      width: 15%;
    }
  }

  @media ${devices.laptop} {
    width: 15%;
    img {
      width: 100%;
    }
  }

  @media ${devices.laptopL} {
    width: 15%;
    img {
      width: 100%;
    }
  }
`;

export const Subtitle = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.1rem;

  @media ${devices.tablet} {
    font-size: 1.2rem;
  }

  @media ${devices.laptop} {
    font-size: 1.3rem;
  }

  @media ${devices.laptopL} {
    font-size: 1.3rem;
  }
`;

export const Content = styled.p`
  width: 100%;
  text-align: left;
  font-size: 1rem;
  padding: 0 0.5rem;

  @media ${devices.tablet} {
    font-size: 1.2rem;
    text-align: center;
  }

  @media ${devices.laptop} {
    font-size: 1.3rem;
  }
`;

export const ImageContent = styled.div`
  width: 40%;
  margin-top: 1.5rem;
  img {
    width: 100%;
  }
`;

export const TechnosContainer = styled.div`
display:flex;
flex direction: row;
flex-wrap: wrap;
justify-content: center;

`;

export const TechnoImgContainer = styled.div`
  width: 1.9rem;
  margin-right: 1rem;
  margin-bottom: 1rem;

  @media ${devices.tablet} {
    width: 2rem;
    margin-right: 1.5rem;
    margin-bottom: 0.6rem;
  }

  @media ${devices.laptop} {
    width: 3rem;
    margin-right: 1.5rem;
    margin-bottom: 1rem;
  }

  @media ${devices.laptopL} {
    width: 3rem;
    margin-right: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const TechnoImg = styled.img`
  width: 100%;
`;
