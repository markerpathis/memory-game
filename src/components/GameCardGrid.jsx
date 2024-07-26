import { GridItem, SimpleGrid, Grid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import React, { useEffect, useState } from "react";
import shuffleTeams from "../services/shuffleTeams";
import reduceTeams from "../services/reduceTeams";
import TeamMap from "../services/TeamMap";

const GameCardGrid = ({ gameStatus, setGameStatus }) => {
  const [finalTeams, setFinalTeams] = useState([]);
  const [clickedTeams, setClickedTeams] = useState([]);

  const teamClickHandler = (value) => {
    setClickedTeams([...clickedTeams, value]);
    setGameStatus("started");
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

  useEffect(() => {
    if (clickedTeams.length > 1) {
      let index1 = clickedTeams[0].position;
      let index2 = clickedTeams[1].position;
      if (clickedTeams[0].abbreviation === clickedTeams[1].abbreviation) {
        setTimeout(() => {
          setClickedTeams((clickedTeams) => (clickedTeams = []));
        }, 150);
      } else {
        setTimeout(() => {
          finalTeams[index1].clicked = false;
          finalTeams[index2].clicked = false;
          setClickedTeams((clickedTeams) => (clickedTeams = []));
        }, 150);
      }
    }
  }, [clickedTeams.length]);

  const TeamProcess = () => {
    let selectedTeams = shuffleTeams([...TeamMap]);
    let reducedTeams = reduceTeams(selectedTeams);
    let duplicateTeams = [...reducedTeams];
    let mergeTeams = reducedTeams.concat(duplicateTeams);
    let shuffledTeams = shuffleTeams([...mergeTeams]);
    let indexedTeams = setIndex([...shuffledTeams]);
    setFinalTeams(indexedTeams);
  };

  useEffect(() => {
    TeamProcess();
  }, []);

  useEffect(() => {
    if (gameStatus === "restart") {
      TeamProcess();
      setGameStatus("notStarted");
      setClickedTeams([]);
    }
  }, [gameStatus]);

  return (
    <>
      <Grid templateColumns="repeat(4, 4fr)" gap={3}>
        {finalTeams.map((team, index) => {
          return (
            <GridItem key={index}>
              <GameCard
                team={team}
                onSelection={teamClickHandler}
                gameStatus={gameStatus}
              />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
};

export default GameCardGrid;
