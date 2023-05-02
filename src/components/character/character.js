import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import * as Styles from "./character.styles";

import { addToStore } from "../../store/wishlist";

const Character = (props) => {
  const { title, image, tag, id } = props;
  const { list } = useSelector((state) => state.root.wishlist);
  const dispatch = useDispatch();
  const isFav = list.includes(id);

  console.log(list);

  return (
    <Styles.CardContainer as={Link} to={`/characters/${id}`}>
      <Styles.CardTitle>{title}</Styles.CardTitle>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(addToStore(id));
        }}
      >
        {isFav ? "Remove" : "Add"}
      </button>
      <img src={image} alt={title} />
      <span className="card__tag">{tag}</span>
    </Styles.CardContainer>
  );
};

export default Character;
