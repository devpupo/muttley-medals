import React, { useState } from "react";
import Lottie from "react-lottie";

import animationData from "../animation.json";

import { Container, ButtonWrapper, Counter } from "./styles";

const App = () => {
  const [isMedals, setMedal] = useState(0);
  const [animationState, setAnimationState] = useState({
    isStopped: true,
    isPaused: false,
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
      isStopped: !animationState.isStopped,
    });

    if (animationState.isStopped) setMedal(isMedals + 1);
  };

  return (
    <Container>
      <ButtonWrapper onClick={onClick}>
        <div className="animation">          
          <Lottie
            options={defaultOptions}
            width={200}
            height={200}
            isStopped={animationState.isStopped}
            isPaused={animationState.isPaused}
          />
        </div>
      </ButtonWrapper>
      <Counter>{isMedals}</Counter>
    </Container>
  );
};

export default App;
