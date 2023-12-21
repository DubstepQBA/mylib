import React from "react";
interface IHello {
  name: string;
}
const Hello: React.FC<IHello> = ({ name }) => {
  if (!name) name = "DubUI";
  return <h1>!!Hello {name}!!!</h1>;
};
export default Hello;
