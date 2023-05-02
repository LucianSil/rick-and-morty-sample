import { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import Button from "../components/button/button";

const CharacterPage = () => {
  const characterData = useLoaderData();

  const navigator = useNavigate();

  const { name, image } = characterData;

  useEffect(() => {
    console.log("as");
  }, []);

  return (
    <div>
      <Button onClick={() => navigator(-1)}>Voltar</Button>
      <h1>Esta é a pagina de {name}</h1>
      <img src={image} alt={name} />
      <pre>{JSON.stringify(characterData, null, 2)}</pre>
    </div>
  );
};

export default CharacterPage;
