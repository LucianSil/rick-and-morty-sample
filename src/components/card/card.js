import * as Styles from "./card.styles";
import Button from "../button/button";

// * -> all/tudo
// as -> como Button

const Card = (props) => {
  const { primary, title, description, tag } = props;

  return (
    <Styles.CardContainer as="a" href="#">
      <Styles.CardTitle primary={primary}>{title}</Styles.CardTitle>
      <p>{description}</p>
      <span className="card__tag">{tag}</span>
      <Button>
        <span>Ola</span>
      </Button>
    </Styles.CardContainer>
  );
};

export default Card;
