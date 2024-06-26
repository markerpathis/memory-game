import React from "react";
import { Card, CardBody, Container, Image } from "@chakra-ui/react";
import questionMarkIconLight from "../assets/question-mark-light.png";
import questionMarkIconDark from "../assets/question-mark-dark.png";

const GameCard = ({ team, onSelection }) => {
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
            <Image src={questionMarkIconDark} alt="" boxSize="100px" />
          )}
        </Container>
      </CardBody>
    </Card>
  );
};

export default GameCard;
