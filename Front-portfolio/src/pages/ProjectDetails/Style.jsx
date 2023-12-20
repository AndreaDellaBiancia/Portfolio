import styled from "styled-components";
import { devices } from "../../assets/variables-styles/var-style";

export const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-bottom: 5rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  justify-items: flex-start;
  position: relative;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  height: 4rem;
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
  margin-top: 2rem;

  #carousel {
    height: 600px;
    width: 70%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
`;

export const CarouselImgContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  height: 600px;
`;

export const CarouselImg = styled.img`
  display: block;
  height: 550px;
  width: auto;
  max-width: 1000px;
`;

export const InfosContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  margin-top: 4rem;
`;

export const InfosTitle = styled.h4`
  font-weight: bold;
`;

export const InfosList = styled.ul`
  list-style: none;
`;

export const InfosItem = styled.li`
  margin: 1rem 0;
`;

export const TechnoImg = styled.img`
  width: 3rem;
  margin-right: 0.5rem;
`;
