import React, { useState } from "react";
import { Card, CardBody, Container, Image } from "@chakra-ui/react";
import questionMarkIconLight from "../assets/question-mark-light.png";
import questionMarkIconDark from "../assets/question-mark-dark.png";

const GameCard = (team) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Card
      onClick={() => {
        setIsClicked(true);
      }}
    >
      <CardBody>
        <Container centerContent>
          {isClicked === true ? (
            <Image src={team.team.logo} alt="" boxSize="100px" />
          ) : (
            <Image src={questionMarkIconDark} alt="" boxSize="100px" />
          )}
        </Container>
      </CardBody>
    </Card>
  );
};

export default GameCard;
