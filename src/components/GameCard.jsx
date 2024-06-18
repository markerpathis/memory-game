import React, { useState } from "react";
import { Card, CardBody, Container, Image } from "@chakra-ui/react";
import questionMarkIconLight from "../assets/question-mark-light.png";
import questionMarkIconDark from "../assets/question-mark-dark.png";

const GameCard = ({ team, onSelection }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const cardClicked = () => {
    setIsClicked(true);
    team.clicked = true;
    console.log(team);
    onSelection(team);
  };

  return (
    <Card onClick={cardClicked}>
      <CardBody>
        <Container centerContent>
          {isCorrect || isClicked ? (
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
