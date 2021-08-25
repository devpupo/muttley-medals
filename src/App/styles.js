import styled from "styled-components";

import muttleyImage from "../assets/muttley.png";
import muttleyMedalImage from "../assets/muttley-medal.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 100px;
`;

export const ButtonWrapper = styled.button`
  --size: 100px;

  width: var(--size);
  height: var(--size);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 33px;
  background-color: #fff;
  border: none;
  padding: 0;

  cursor: pointer;
  outline: 0;
  border-radius: 100%;
  margin-top: 10px;

  .animation {
    pointer-events: none;
  }
`;

export const Counter = styled.p`
  margin-top: 0;

  font-size: 50px;
  color: white;
`;

export const Avatar = styled.div`
  background-image: url(${muttleyImage});
  background-repeat: no-repeat;
  background-size: 300px;

  height: 300px;
  width: 300px;

  &:hover {
    background-image: url(${muttleyMedalImage});
  }
`;
