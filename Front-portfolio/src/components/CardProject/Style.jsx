import styled from "styled-components";
import { devices } from "../../assets/variables-styles/var-style";

export const CardContainer = styled.div`
  margin: 2rem auto;
  min-height: 400px;
  padding: 0.5rem 0;
  width: 95%;
  border-radius: 10px;
  background: linear-gradient(45deg, #f9e4ff, #c5f4ff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.5);
  transform: translateY(-5px);

  @media ${devices.tablet} {
    margin: 0;

    height: 450px;
    width: 460px;
    border-radius: 100px;
  }

  @media ${devices.laptop} {
    height: 600px;
    width: 800px;
  }
`;

export const ImgContainer = styled.div`
  max-width: 90%;
  display: flex;
  justify-content: center;

  @media ${devices.tablet} {
    height: 200px;
    width: 70%;
  }
`;

export const CardImg = styled.img`
width: 50%;
max-width:300px;

@media ${devices.tablet} {
  width: 100%;
}
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  @media ${devices.tablet} {
    font-size: 2.8rem;
  }
`;

export const ButtonContainer = styled.div`

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
  border: 2px solid #0caad9;

}

div:hover {
  border-radius: 10px;
  color: black;
  transition: all 1s;
  cursor: pointer;
  border: 2px solid #e6a8fd;
}

a{
  text-decoration: none;
}
`;

export const DetailsBtn = styled.div`
background: linear-gradient(45deg, #e6a8fd, #0caad9);
border-radius: 30px 5px 20px;
`;

export const SiteBtn = styled.div`
background: linear-gradient(45deg,  #0caad9, #e6a8fd);
border-radius: 15px 65px 30px;
`;
