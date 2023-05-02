import React from "react";

//* -> all/tudo
//as -> como Button

/*
const obj = {
  a: "1",
  b: 2,
};

obj.a;
obj["a"];
const { a } = obj;
*/

// props -> {}
// props -> {children: ..span}

function Button(props) {
  // React Hooks
  // useState & useEffect

  return <button onClick={props.onClick}>{props.children}</button>;
}

export default Button;
