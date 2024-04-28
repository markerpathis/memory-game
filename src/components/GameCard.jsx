import React from "react";
import { Card, CardBody, Container, Image } from "@chakra-ui/react";
import questionMarkIconLight from "../assets/question-mark-light.png";
import questionMarkIconDark from "../assets/question-mark-dark.png";

const GameCard = () => {
  return (
    <Card>
      <CardBody>
        <Container centerContent>
          <Image src={questionMarkIconDark} alt="" />
        </Container>
      </CardBody>
    </Card>
  );
};

export default GameCard;
