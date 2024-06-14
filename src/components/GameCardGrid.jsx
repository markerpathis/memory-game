import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import React, { useEffect, useState } from "react";
import shuffleTeams from "../services/shuffleTeams";
import reduceTeams from "../services/reduceTeams";
import TeamMap from "../services/TeamMap";

const GameCardGrid = () => {
  const [finalTeams, setFinalTeams] = useState([]);
  const [clickedTeams, setClickedTeams] = useState([]);
  console.log(clickedTeams);
  const teamClickHandler = (value) => {
    setClickedTeams([...clickedTeams, value]);
    console.log(clickedTeams);
  };

  useEffect(() => {
    let selectedTeams = shuffleTeams(TeamMap);
    let reducedTeams = reduceTeams(selectedTeams);
    let duplicateTeams = reducedTeams;
    let mergeTeams = reducedTeams.concat(duplicateTeams);
    let shuffledTeams = shuffleTeams(mergeTeams);
    setFinalTeams(shuffledTeams);
  }, []);

  return (
    <>
      <SimpleGrid columns={{ sm: 4 }} padding="10px" spacing={6}>
        {finalTeams.map((team, index) => (
          <GameCard key={index} team={team} onSelection={teamClickHandler} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameCardGrid;
