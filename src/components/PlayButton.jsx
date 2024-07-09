import React from "react";
import { Button } from "@chakra-ui/react";

const PlayButton = ({ setGameStatus }) => {
  return <Button onClick={() => setGameStatus("restart")}>Play Again?</Button>;
};

export default PlayButton;
