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
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;

  .button-29 {
    width: 7rem;
    margin: 0 1rem;
    align-items: center;
    appearance: none;
    background-image: radial-gradient(
      100% 100% at 100% 0,
      #5adaff 0,
      #5468ff 100%
    );
    border: 0;
    border-radius: 6px;
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px,
      rgba(58, 65, 111, 0.5) 0 -3px 0 inset;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: "JetBrains Mono", monospace;
    height: 48px;
    justify-content: center;
    line-height: 1;
    list-style: none;
    overflow: hidden;
    padding-left: 16px;
    padding-right: 16px;
    position: relative;
    text-align: left;
    text-decoration: none;
    transition: box-shadow 0.15s, transform 0.15s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    will-change: box-shadow, transform;
    font-size: 18px;
  }

  .button-29:focus {
    box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  }

  .button-29:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
    transform: translateY(-2px);
  }

  .button-29:active {
    box-shadow: #3c4fe0 0 3px 7px inset;
    transform: translateY(2px);
  }
`;
