import React from 'react'
import Favs from '../Routes/Favs'
import { Link } from 'react-router-dom'
import { useDentStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {


    const { dispatch } = useDentStates();
  
    const toggleTheme = () => {
      dispatch({ type: 'SWITCH_THEME', payload: false });
    };



  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to='/'>Home</Link>
      <Link to='/favs'>Favs</Link>
      <Link to='/contact'>Contact</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar