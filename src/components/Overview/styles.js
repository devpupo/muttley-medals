import styled from "styled-components";

import muttleyImage from "../../assets/muttley.png";
import muttleyMedalImage from "../../assets/muttley-medal.png";
import muttleyRunImage from "../../assets/muttley-run.png";
import jokeImage from "../../assets/joke.png";

import { Button } from "../Button";

const handleFigureType = (action) => {
  switch (action) {
    case "dislike":
      return jokeImage;
    case "like":
      return muttleyMedalImage;
    default:
      return muttleyImage;
  }
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 100px;
`;

export const Figure = styled.div`
  background-image: url(${({ action }) => handleFigureType(action)});
  background-repeat: no-repeat;
  background-size: 300px;

  height: 300px;
  width: 300px;

/* 
   &:hover {
    background-image: url(${muttleyRunImage});
  } */
`;

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: space-between;

  background-color: inherit;

  border: none;
  padding: 0;

  margin-top: 30px;

  .animation {
    pointer-events: none;
  }
`;

export const ButtonLike = styled(Button)`
  background-color: #fff4ab;
`;

export const ButtonDislike = styled(Button)`
  background-color: #db1a15;
  margin-left: 30px;
`;

export const Counter = styled.p`
  margin-top: 0;

  font-size: 50px;
  color: white;
`;
