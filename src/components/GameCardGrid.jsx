import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import React from "react";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const GameCardGrid = () => {
  return (
    <>
      <SimpleGrid columns={{ sm: 4 }} padding="10px" spacing={6}>
        {cards.map((card) => (
          <GameCard key={card} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameCardGrid;
