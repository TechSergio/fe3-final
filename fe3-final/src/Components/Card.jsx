import React from "react";
import { Link } from 'react-router-dom'
import { useDentStates } from "../Context/Context";



const Card = ({ name, username, id }) => {

  const {state, dispatch} = useDentStates()

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({type: 'ADD_FAV', payload:  {name, username, id}})
    const updatedFavs = [...state.favs, { name, username, id }]
    localStorage.setItem('favs', JSON.stringify(updatedFavs))
    alert(`${name} fue agregado a favoritos`)
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="./img/doctor.jpg" alt='doctor' style={{ maxWidth: '100%' }}/>
        <Link to={'/detail/' + id}><h3>{name}</h3></Link>
        <p>{username}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
