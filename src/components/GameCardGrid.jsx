import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import React, { useEffect, useState } from "react";
import shuffleTeams from "../services/shuffleTeams";
import reduceTeams from "../services/reduceTeams";
import TeamMap from "../services/TeamMap";

const GameCardGrid = () => {
  const [finalTeams, setFinalTeams] = useState([]);
  const [clickedTeams, setClickedTeams] = useState([]);

  const teamClickHandler = (value) => {
    setClickedTeams([...clickedTeams, value]);
    console.log(clickedTeams);
  };

  const setIndex = (teams) => {
    const response = teams.map((team, index) => {
      return {
        ...team,
        position: index,
      };
    });
    return response;
  };

  if (clickedTeams.length > 1) {
    if (clickedTeams[0].abbreviation === clickedTeams[1].abbreviation) {
      for (let i = 0; i < 2; i++) {
        let index = clickedTeams[i].position;
        finalTeams[index].correct = true;
        setClickedTeams([]);
      }
      console.log(finalTeams);
    } else {
      for (let i = 0; i < 2; i++) {
        let index = clickedTeams[i].position;
        finalTeams[index].clicked = false;
        setClickedTeams([]);
      }
      setClickedTeams([]);
    }
  }

  useEffect(() => {
    let selectedTeams = shuffleTeams([...TeamMap]);
    let reducedTeams = reduceTeams(selectedTeams);
    let duplicateTeams = [...reducedTeams];
    let mergeTeams = reducedTeams.concat(duplicateTeams);
    let shuffledTeams = shuffleTeams([...mergeTeams]);
    let indexedTeams = setIndex([...shuffledTeams]);
    setFinalTeams(indexedTeams);
  }, []);

  return (
    <>
      <SimpleGrid columns={{ sm: 4 }} padding="10px" spacing={6}>
        {finalTeams.map((team, index) => {
          return (
            <GameCard key={index} team={team} onSelection={teamClickHandler} />
          );
        })}
      </SimpleGrid>
    </>
  );
};

export default GameCardGrid;
