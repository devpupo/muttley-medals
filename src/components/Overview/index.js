import React, { useState } from "react";
import Lottie from "react-lottie";

import animationLikeData from "../../assets/animationLike.json";
import animationDislikeData from "../../assets/animationDislike.json";
import { sleep } from "../../services/sleep";

import {
  Container,
  Figure,
  ButtonWrapper,
  ButtonLike,
  ButtonDislike,
  Counter,
} from "./styles";

const initialState = {
  isStopped: true,
  isPaused: false,
};

const Overview = () => {
  const [isMedals, setMedal] = useState(0);
  const [isLikeState, setLikeState] = useState(initialState);
  const [isDislikeState, setDislikeState] = useState(initialState);
  const [isActionState, setActionState] = useState();

  const defaultOptions = {
    loop: false,
    autoplay: false,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const likeOptions = {
    ...defaultOptions,
    animationData: animationLikeData,
  };

  const dislikeOptions = {
    ...defaultOptions,
    animationData: animationDislikeData,
  };

  const restartAction = async () => {
    await sleep(4000);
    setActionState('');
  }

  const onClickLike = () => {
    setLikeState({
      ...isLikeState,
      isStopped: !isLikeState.isStopped,
    });

    if (isLikeState.isStopped) setMedal(isMedals + 1);

    setActionState("like");
    restartAction();
  };

  const onClickDislike = () => {
    setDislikeState({
      ...isDislikeState,
      isStopped: !isDislikeState.isStopped,
    });

    if (isDislikeState.isStopped) setMedal(isMedals - 1);

    setActionState("dislike");
    restartAction();
  };

  return (
    <Container>
      <Figure action={isActionState} />

      <ButtonWrapper>
        <ButtonLike onClick={onClickLike}>
          <div className="animation">
            <Lottie
              options={likeOptions}
              width={200}
              height={200}
              isStopped={isLikeState.isStopped}
              isPaused={isLikeState.isPaused}
            />
          </div>
        </ButtonLike>
        <ButtonDislike onClick={onClickDislike}>
          <div className="animation">
            <Lottie
              options={dislikeOptions}
              width={127}
              height={127}
              isStopped={isDislikeState.isStopped}
              isPaused={isDislikeState.isPaused}
            />
          </div>
        </ButtonDislike>
      </ButtonWrapper>

      <Counter>{isMedals}</Counter>
    </Container>
  );
};

export default Overview;
