import styled from 'styled-components'


export const CardContainer = styled.div`
  padding: 1rem;
  margin: ${(props) => props.$marginCard};
  display: ${(props) =>  props.scrollPosition <= props.scrollPositionEffect ? "none" : "flex" };
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 2rem;
`;

export const Subtitle = styled.p`
width: 100%;
text-align: center;
font-size: 1.3rem;
`;

export const Content = styled.p`
width: 100%;
text-align: center;
font-size: 1.3rem;
`;




