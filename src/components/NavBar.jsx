import { Heading, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import Timer from "./Timer";

const NavBar = () => {
  return (
    <>
      <VStack paddingTop="20px" justify="space-between">
        <Heading fontSize="50px">NHL Memory Match</Heading>
        <HStack spacing={12}>
          <Timer />
          <ColorModeSwitch />
        </HStack>
      </VStack>
    </>
  );
};

export default NavBar;
