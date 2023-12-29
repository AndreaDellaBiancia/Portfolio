import styled from "styled-components";
import { devices } from "../../assets/variables-styles/var-style";

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-bottom: 5rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  @media ${devices.laptop} {
    margin-top: 0;
    flex-direction: row;
    justify-content: center;
    justify-items: flex-start;
    position: relative;
  }
`;

export const Title = styled.h1`
  display: block;
  text-align: center;

  @media ${devices.laptop} {
    margin: 2rem auto;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 1rem;
  margin-top: 2rem;
  div {
    width: 6rem;
    padding: 0.5rem;
    margin: 2rem;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    transition: all 1s;
    color: white;
  }

  div:hover {
    border-radius: 10px;
    color: black;
    transition: all 1s;
    cursor: pointer;
    border: 2px solid #e6a8fd;
  }

  a {
    text-decoration: none;
  }

  @media ${devices.tablet} {
    margin-top: 2rem;
    height: 1rem;
    div {
      width: 7rem;
      padding: 0.3rem;
      margin: 1rem;
      font-size: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      transition: all 1s;
      color: white;
    }
  }

  @media ${devices.laptop} {
    position: absolute;
    right: 0;
    top: 1rem;
    margin-top: 2rem;
    flex-direction: row;
  }
`;

export const GithubBtn = styled.div`
  background: linear-gradient(45deg, #e6a8fd, #0caad9);
  border-radius: 30px 5px 20px;
`;

export const SiteBtn = styled.div`
  background: linear-gradient(45deg, #0caad9, #e6a8fd);
  border-radius: 15px 65px 30px;
`;

export const ImgTitle = styled.img`
  margin: 0 1rem;
  width: 5rem;
`;

export const CarouselDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  #carousel {
    height: 300px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    .carousel-control-prev,
    .carousel-control-next {
      display: flex;
      align-items: end;
    }
  }

  @media ${devices.tablet} {
    #carousel {
      height: 600px;
      width: 95%;
      margin: 0 auto;

      .carousel-control-prev,
      .carousel-control-next {
        display: flex;
        align-items: center;
      }
    }
  }

  @media ${devices.laptop} {
    margin-top: 2rem;
    flex-direction: row;
    #carousel {
      width: 65%;
      .carousel-control-prev,
      .carousel-control-next {
        display: none;
      }
    }
  }
`;

export const ProjectDescription = styled.p`
  display: block;
  font-size: 1rem;
  width: 100%;

  @media ${devices.laptop} {
    font-size: 1rem;
    width: 35%;
    height: auto;
  }
`;

export const CarouselImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: auto;
  max-width: 780px;
  height: 250px;

  @media ${devices.tablet} {
    height: 600px;
  }

  @media ${devices.laptop} {
    align-items: flex-start;
    max-width: 980px;
  }
`;

export const CarouselImg = styled.img`
  display: block;
  max-width: 100%;
  max-height: 85%;
  width: auto;
  height: auto;

  @media ${devices.laptop} {
    flex-direction: row;
  }
`;

export const InfosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 1.1rem;
  margin-top: 4rem;
  #list {
    list-style: none;
  }

  @media ${devices.laptop} {
    div:nth-child(1) {
      width: 20%;
    }

    div:nth-child(2) {
      width: 30%;
    }

    div:nth-child(3) {
      width: 40%;
    }
  }
`;

export const InfoThemeContainer = styled.div`
  margin: 0 1rem;
  width: 100%;
`;

export const InfosTitle = styled.h4`
  font-weight: bold;
  text-align: center;
`;

export const InfosList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 3rem;
`;

export const InfosItem = styled.li`
  margin: 1rem 0;
  width: 100%;
`;

export const InfosListTechnos = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin-bottom: 2rem;
`;

export const InfosItemTechno = styled.li`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TechnoImg = styled.img`
  width: 2rem;

  @media ${devices.laptop} {
    width: 3rem;
    margin-right: 0.5rem;
  }
`;
