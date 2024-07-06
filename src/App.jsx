import React, { useState } from "react";
import { Container } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameCardGrid from "./components/GameCardGrid";

function App() {
  const [gameStatus, setGameStatus] = useState("notStarted");
  console.log(gameStatus);
  return (
    <>
      <NavBar gameStatus={gameStatus} setGameStatus={setGameStatus} />
      <Container paddingTop={5}>
        <GameCardGrid gameStatus={gameStatus} setGameStatus={setGameStatus} />
      </Container>
    </>
  );
}

export default App;
