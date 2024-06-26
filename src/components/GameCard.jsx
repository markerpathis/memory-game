import React from "react";
import {
  Card,
  CardBody,
  Container,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import questionMarkIconLight from "../assets/question-mark-light.png";
import questionMarkIconDark from "../assets/question-mark-dark.png";

const GameCard = ({ team, onSelection }) => {
  const { colorMode } = useColorMode();
  let iconImage = "";
  if (colorMode === "dark") {
    iconImage = questionMarkIconLight;
  } else {
    iconImage = questionMarkIconDark;
  }

  const cardClicked = () => {
    team.clicked = true;
    onSelection(team);
  };

  return (
    <Card onClick={cardClicked}>
      <CardBody>
        <Container centerContent>
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
