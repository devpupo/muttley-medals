import React, { useState } from "react";
import Lottie from "react-lottie";

import animationData from "../animation.json";

import { Container, ButtonWrapper } from "./styles";

const App = () => {
  const [isMedal, setMedal] = useState(0);
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
    //direction: -1,
  });

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const onClick = () => {
    setAnimationState({
      ...animationState,
      isStopped: !animationState.isStopped
    });

    setMedal(isMedal + 1);
  };

  return (
    <Container>
      <h1>Muttley Medals</h1>
      <ButtonWrapper onClick={onClick}>
        <div className="animation">
          <Lottie
            options={defaultOptions}
            width={200}
            height={200}
            //direction={animationState.direction}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </div>
      </ButtonWrapper>
    </Container>
  );
};

export default App;
