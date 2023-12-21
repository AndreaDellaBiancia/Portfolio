import styled from "styled-components";
import { devices } from "../../assets/variables-styles/var-style";

export const HomeContainer = styled.div`
  verflowy: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  margin-top: 2rem;

  h1 {
    --animate-duration: 2s;
    font-weight: 600;
    font-size: 1.8rem;
  }

  h2 {
    --animate-duration: 4s;
    font-weight: 600;
    font-size: 1.2rem;
  }

  @media ${devices.laptop} {
    margin-top: 4rem;
    h1 {
      font-size: 3.5rem;
    }

    h2 {
      font-size: 2.3rem;
    }
  }
`;

export const ImgHomeContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }

  @media ${devices.laptop} {
    img {
      width: 80%;
    }
  }

  @media ${devices.laptopL} {
    img {
      width: 60%;
    }
  }
`;

export const InfoContainer = styled.div`
  width: 100%;
  position: relative;
  background-color: #0972c4;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 0.3rem;
  box-shadow: 0px 15px 15px -10px #000; /* Les valeurs spécifient les décalages, l'étalement, le flou et la couleur de l'ombre */

  transform: translateY(-5px);

  .infos {
    width: 100%;
    margin: 1rem 0;
    text-align: center;
    line-height: 1.3rem;
  }

  .infos h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  .infos p {
    font-size: 1rem;
  }

  @media ${devices.tablet} {
    .infos {
      width: 80%;
      margin: 3rem 0;
      line-height: 1.5rem;
    }

    .infos p {
      font-size: 1.2rem;
    }
  }

  @media ${devices.laptop} {
    .infos {
      width: 70%;
      margin-top: 5.5rem;
      margin-bottom: 9rem;
      text-align: center;
      line-height: 2rem;
    }

    .infos h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .infos p {
      font-size: 1.5rem;
    }
  }

  @media ${devices.laptopL} {
    .infos {
      width: 45%;
      margin-top: 8.5rem;
      margin-bottom: 8.5rem;
    }

    .infos p {
      font-size: 1.5rem;
    }
  }
`;

export const WhiteDiv = styled.div`
  width: 2.5rem;
  height: 3rem;
  background-color: white;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  border-radius: 10px 0 0 0;
  box-shadow: inset 0px 15px 15px -10px #000; /* Les valeurs spécifient les décalages, l'étalement, le flou et la couleur de l'ombre */

  @media ${devices.tablet} {
    width: 5rem;
    height: 4rem;
  }

  @media ${devices.laptop} {
    width: 50%;
    height: 5rem;
    bottom: 0rem;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px 10px 0 0;
  }
`;

export const WhiteDiv2 = styled.div`
  width: 2.5rem;
  height: 3rem;
  background-color: white;
  position: absolute;
  bottom: -2rem;
  right: 0;
  display: flex;
  justify-content: center;
  border-radius: 10px 0 0 0;
  z-index: -1;

  @media ${devices.tablet} {
    width: 5rem;
    height: 4rem;
  }

  @media ${devices.laptop} {
    width: 50%;
    height: 5rem;

    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px 10px 0 0;
  }
`;
export const RoketImg = styled.img`
  position: absolute;
  right: 0.1rem;
  width: 1.5rem;
  height: 3.5rem;
  margin-top: 1rem;

  @media ${devices.tablet} {
    width: 2.5rem;
    height: 5.5rem;
    margin-top: 2rem;
  }

  @media ${devices.laptop} {
    position: relative;
    width: 4rem;
    height: 7rem;
    margin-top: 2rem;
  }

  @media ${devices.laptopL} {
    width: 6rem;
    height: 10rem;
  }
`;

export const ExperiencesContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: ${(props) => props.$size};

  .experiences {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: ${(props) => props.$size};
  }

  .line {
    width: 0.3rem;
    background: linear-gradient(45deg, yellow, red);
    position: absolute;
    right: 0.7rem;
    top: 2rem;
    transition: min-height 1s ease-in-out;
  }

  @media ${devices.tablet} {
    margin-top: 3rem;

    .line {
      width: 0.5rem;
      background: linear-gradient(45deg, yellow, red);
      position: absolute;

      right: 1rem;
      top: 2rem;
      transition: min-height 1s ease-in-out;
    }
  }

  @media ${devices.laptop} {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 6rem;
    .experiences {
      position: relative;
      top: 1rem;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      height: ${(props) => props.$size};
    }

    .line {
      width: 1rem;
      background: linear-gradient(45deg, yellow, red);
      position: absolute;
      left: 49.5%;
      transition: min-height 1s ease-in-out;
    }
  }
`;

export const RightSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.laptop} {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${devices.laptopL} {
    width: 40%;
  }
`;

export const LeftSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.laptop} {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media ${devices.laptopL} {
    width: 40%;
  }
`;

export const FooterHome = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-top: 5rem;

  @media ${devices.tablet} {
    margin-top: 0rem;
    --animate-duration: 2s;
  }

  @media ${devices.laptop} {
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-top: 5rem;
    --animate-duration: 2s;
  }

  @media ${devices.laptopL} {
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-top: 5rem;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row !important;
  position: absolute !important;
  bottom: -5rem;

  @media ${devices.laptop} {
    display: flex;
    width: 100%;
    flex-direction: row !important;
    position: absolute !important;
  }

  @media ${devices.laptopL} {
    display: flex;
    width: 100%;
    flex-direction: row !important;
    position: absolute !important;
  }
`;

export const Grass = styled.div`
  width: 100%;
  background-color: #4da038;
  position: absolute;
  z-index: -1;

  height: 9rem;

  @media ${devices.laptop} {
    bottom: -5rem;
    height: 11rem;
  }

  @media ${devices.laptopL} {
    bottom: -5rem;
    height: 11rem;
  }
`;

export const Hangar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  padding: 2rem;
  height: 7.5rem;
  marginleft: 2rem;

  h3 {
    position: absolute;
    bottom: -1.5rem;
    left: 1.5rem;
    font-weight: bold;
    font-size: 2rem;
  }

  img {
    width: 10rem;
    position: relative;
    bottom: 1rem;
    left: -1.5rem;
  }

  &:hover {
    cursor: pointer;
  }

  @media ${devices.laptop} {
    height: 18rem;
    marginleft: 2rem;

    h3 {
      position: relative;
      top: 2.5rem;
      left: 0;
      font-weight: bold;
      font-size: 2.5rem;
    }

    img {
      width: 20rem;
      position: relative;
      bottom: 4rem;
    }
  }

  @media ${devices.laptopL} {
    height: 18rem;
    marginleft: 2rem;

    h3 {
      position: relative;
      top: 2.5rem;
      left: 0;
      font-weight: bold;
      font-size: 2.5rem;
    }

    img {
      width: 20rem;
      position: relative;
      bottom: 4rem;
    }
  }
`;

export const Smoke = styled.div`
  width: 5rem;
  height: 5rem;
  position: absolute;
  right: 0rem;
  top: 0rem;

  img {
    width: 100%;
    height: 100%;
  }

  @media ${devices.laptop} {
    position: absolute;
    left: 50%;
    top: -3rem;
    img {
      transform: translateX(-50%);
      width: 15rem;
      height: 18rem;
    }
  }

  @media ${devices.laptopL} {
    position: absolute;
    left: 50%;
    top: -3rem;
    img {
      transform: translateX(-50%);
      width: 15rem;
      height: 18rem;
    }
  }
`;
