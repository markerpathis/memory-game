import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  Container,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import questionMarkIconLight from "../assets/question-mark-light.png";
import questionMarkIconDark from "../assets/question-mark-dark.png";

const GameCard = ({ team, onSelection, gameStatus }) => {
  const { colorMode } = useColorMode();
  let iconImage = "";
  if (colorMode === "dark") {
    iconImage = questionMarkIconLight;
  } else {
    iconImage = questionMarkIconDark;
  }

  const cardClicked = () => {
    // cards cannot be clicked after the game ends, until they begin the next game
    if (gameStatus === "started" || gameStatus === "notStarted") {
      if (!team.clicked) {
        team.clicked = true;
        onSelection(team);
      }
    }
  };

  // useEffect(() => {
  //   console.log("YOOOOO");
  // }, [team.clicked]);

  return (
    <Card onClick={cardClicked}>
      <CardBody>
        <Container centerContent padding={0}>
          {team.clicked ? (
            <Image src={team.logo} alt="" boxSize="100px" />
          ) : (
            <Image src={iconImage} alt="" boxSize="100px" />
          )}
        </Container>
      </CardBody>
    </Card>
  );
};

export default GameCard;
