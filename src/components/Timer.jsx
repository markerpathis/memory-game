import { Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Timer = ({ gameStatus, setGameStatus }) => {
  const [seconds, setSeconds] = useState(30);

  const runTimer = () => {
    if (seconds > 0) {
      setTimeout(() => {
        let updatedSeconds = seconds - 1;
        setSeconds(updatedSeconds);
      }, 1000);
    } else {
      setGameStatus("ended");
    }
  };

  if (gameStatus === "started") {
    runTimer();
  }

  return <Text>Timer: {seconds}</Text>;
};

export default Timer;
