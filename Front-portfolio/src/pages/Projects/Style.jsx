import styled from "styled-components";
import { devices } from "../../assets/variables-styles/var-style";

export const ImagePc = styled.img`
  display: none;
  @media ${devices.laptop} {
    display: block;
    width: 250px;
    position: absolute;
    right: 2rem;
    top: 10rem;
  }
`;

export const Title = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2rem;
  margin-top: 2rem;

  @media ${devices.laptop} {
    font-size: 2.8rem;
  }
`;


