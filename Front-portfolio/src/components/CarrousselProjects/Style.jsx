import styled from "styled-components";
import { devices } from "../../assets/variables-styles/var-style";

export const CarrousselContainer = styled.div`
  height: 90vh;
  width: 70%;
  margin: 0 auto;

  @media ${devices.tablet} {
    position: relative;
    top: -5rem;
    width: 80%;
  }
  @media ${devices.laptop} {
    width: 90%;
  }
`;
