import { Heading, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import Timer from "./Timer";
import PlayButton from "./PlayButton";

const NavBar = ({ gameStatus, setGameStatus }) => {
  return (
    <>
      <VStack paddingTop="20px" justify="space-between">
        <Heading fontSize="50px">NHL Memory Match</Heading>
        <HStack spacing={12}>
          <Timer gameStatus={gameStatus} setGameStatus={setGameStatus} />
          <ColorModeSwitch />
        </HStack>
        {gameStatus === "ended" ? (
          <PlayButton setGameStatus={setGameStatus} />
        ) : (
          <div></div>
        )}
      </VStack>
    </>
  );
};

export default NavBar;
