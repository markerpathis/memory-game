import { Container } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameCardGrid from "./components/GameCardGrid";

function App() {
  return (
    <>
      <NavBar />
      <Container paddingTop={5}>
        <GameCardGrid />
      </Container>
    </>
  );
}

export default App;
