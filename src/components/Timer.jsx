import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(30);

  console.log(seconds);

  const runTimer = () => {
    if (seconds > 0) {
      setTimeout(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else {
      setSeconds(0);
    }
  };

  useEffect(() => {
    runTimer();
  });

  return <Text>Timer: {seconds}</Text>;
};

export default Timer;
