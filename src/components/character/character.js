
import { Link } from "react-router-dom";

import * as Styles from "./character.styles";


const Character = (props) => {
  const { title, image, tag, id } = props;


  return (
    <Styles.CardContainer as={Link} to={`/characters/${id}`}>
      <Styles.CardTitle>{title}</Styles.CardTitle>
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        {true ? "Remove" : "Add"}
      </button>
      <img src={image} alt={title} />
      <span className="card__tag">{tag}</span>
    </Styles.CardContainer>
  );
};

export default Character;
