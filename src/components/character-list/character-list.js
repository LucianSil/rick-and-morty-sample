import { useEffect, useState } from "react";

import axios from "axios";

import "./character-list.scss";
import Character from "../character/character";


const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/?page=19")
      .then(({ data }) => {
        setCharacters(data.results);
      });
  }, []);

  return (
    <>
      <h1>CharacterList List</h1>
      <div className="character-list ">
        {characters.map((character) => {
          const { name, image, id, type } = character;

          return (
            <Character title={name} image={image} tag={type} id={id} key={id} />
          );
        })}
      </div>
    </>
  );
};

export default CharacterList;
