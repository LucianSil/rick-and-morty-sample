import Card from "../character/character";

const CARDS_ARRAY = [
  { title: "Card One", description: "Card Descrription 1", tag: "Example Tag" },
  { title: "Card One", description: "Card Descrription 2", tag: "Example Tag" },
  {
    title: "Card Three",
    description: "Card Descrription 3",
    tag: "Example Tag",
  },
  {
    title: "Card Four",
    description: "Card Descrription 4",
    tag: "Example Tag",
  },
];

const CardList = () => {
  // React Fragment -> <></>
  // {} funcionam como um "portal" para o javascript

  /*
  ARRARY.map((item, index) => {})
  
  */

  //https://rickandmortyapi.com/api/character/?page=19
  return (
    <>
      <h1>Card List</h1>
      {CARDS_ARRAY.map((cardData, index) => {
        // key no map -> uniqueID
        // serve de identificador para o react do nosso componente
        // a key tem que ser unica
        // deve ser uma string/numero

        const { title, description, tag } = cardData;

        console.log(title, index);

        return (
          <Card title={title} description={description} tag={tag} key={index} />
        );
      })}
    </>
  );
};

export default CardList;
