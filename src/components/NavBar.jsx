import { Heading, HStack, Text } from "@chakra-ui/react";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <>
      <HStack padding="10px" justify="space-between">
        <Heading fontSize="50px">NHL Memory Match</Heading>
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
