import { Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const Timer = ({ gameStatus, setGameStatus }) => {
  const [seconds, setSeconds] = useState();

  const runTimer = () => {
    if (seconds > 0) {
      setTimeout(() => {
        let updatedSeconds = seconds - 1;
        setSeconds(updatedSeconds);
      }, 1000);
    } else if (seconds <= 0) {
      setGameStatus("ended");
    }
  };

  useEffect(() => {
    if (gameStatus === "started") {
      runTimer();
    } else if (gameStatus === "notStarted") {
      setSeconds(30);
    }
  }, [gameStatus, seconds]);

  return <Text>Timer: {seconds}</Text>;
};

export default Timer;
