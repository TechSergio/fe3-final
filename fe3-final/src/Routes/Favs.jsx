import React from "react";
import Card from "../Components/Card";
import { useDentStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state} = useDentStates()

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map( fav => <Card name={fav.name} username={fav.username} id={fav.id} key={fav.id} />)}
      </div>
    </>
  );
};

export default Favs;
