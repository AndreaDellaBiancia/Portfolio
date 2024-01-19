import styled from "styled-components";
import { devices } from "../../assets/variables-styles/var-style";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.tablet} {
    flex-direction: row;

    justify-content: space-around;
    margin-top: 3rem;
  }
`;

export const ContactsContainer = styled.div`
 width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${devices.tablet} {
    width: 40%;
  }

  @media ${devices.laptop} {
  }
`;

export const CvContainer = styled.div`
width: 100%;

  @media ${devices.tablet} {
    width: 50%;

  }

`;

export const Cv = styled.img`
  width: 100%;
  border: 1px solid #27384a;
`;
export const Title = styled.h1`
  text-align: center;
  margin: 3rem auto;
  font-size: 2rem;
  @media ${devices.tablet} {
    margin: 0rem auto;
    margin-bottom: 3rem;
  }

  @media ${devices.laptop} {
  }
`;

export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
  font-size: 1.2rem;
`;

export const ContactLink = styled.a`
  display: inline-block;
  display: flex;
  flex-direction: column;
  align-items: center;

  text-decoration: none;
  color: black;
`;

export const ContactImg = styled.img``;

export const ContactText = styled.p`
  margin: 0;
`;
