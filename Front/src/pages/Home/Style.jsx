import styled from "styled-components";

export const HomeContainer = styled.div`
  verflowy: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  h1 {
    --animate-duration: 2s;
    font-size: 3.5rem;
    font-weight: bold;
    margin-top: 4rem;
  }

  h2 {
    --animate-duration: 4s;
    font-size: 2rem;
    font-weight: 600;
  }

  .line {
    width: 0.7rem;
    background: linear-gradient(45deg, yellow, red);
    margin-top: 8rem;
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

  .infos {
    width: 45%;
    margin-top: 8.5rem;
    margin-bottom: 8.5rem;
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
`;

export const ExperiencesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 500rem;
`;

export const RightSide = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeftSide = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;