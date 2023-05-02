import { useEffect, useState } from "react";

const Dummy = () => {
  //   const fn = () => {
  //     return [1, 2];
  //   };

  //   const [a, b] = fn();

  //   console.log(a, b);

  // value: read-only // setter -> tanto aceita o novo valor do estado como um função que returna um novo valor para o estado
  const [count, setCount] = useState(0);
  const [state, setState] = useState(false);

  const [ex2, setEx] = useState({ title: "titulo" });
  const [ex3, setEx3] = useState([1, 2, 3]);

  // reatividade reação
  // função // array de dependencias
  // termos uma reação à mundança num grupo de dependencias
  useEffect(() => {
    console.log(count);
    window?.localStorage.setItem("count", `${state}-${count}`);
  }, [count, state]);

  // ou, sermos independentes da re-renderização do nosso componente
  useEffect(() => {
    console.log("on mount");
  }, []);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button
        onClick={() =>
          setCount((currentValue) => {
            return currentValue - 1;
          })
        }
      >
        Decrement
      </button>
      <button onClick={() => setState(!state)}>Toggle State</button>
    </div>
  );
};

export default Dummy;

/**
 *   // value: read-only // setter
  const [count, setCount] = useState(0);
  const [state, setState] = useState(false);

  // reatividade reação
  // função // array de dependencias
  useEffect(() => {
    console.log(state);
  }, [state]);

      <button onClick={() => setState(!state)}>Toggle State</button>
 */
