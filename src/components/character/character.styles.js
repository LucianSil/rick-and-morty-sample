import styled from "styled-components";

const CardContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;

  p {
    color: blue;
  }

  .card__tag {
    background: orange;
    padding: 4px;
  }

  &:hover {
    // background-color: beige;
  }
`;
// syntax for styled components

const CardTitle = styled.h3`
  color: ${(props) => (props.primary ? "blue" : "red")};
`;
// syntax for styled components with props

const CardTitleTwo = styled(CardTitle)`
  font-size: 48px;
`;
// syntax for extending a styled component

export { CardContainer, CardTitle, CardTitleTwo };
