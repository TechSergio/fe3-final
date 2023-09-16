import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dent, setDents] = useState([])
  const {id} = useParams()
    const url = 'https://jsonplaceholder.typicode.com/users/' + id

    useEffect(() => {
      axios(url)
      .then(res => setDents(res.data))
      .catch(err => console.log(err))
    }, [])

    const containerStyle = {
      border: '1px solid #ddd',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      maxWidth: '400px',
      margin: '0 auto',
      textAlign: 'center',
    };
  
    const labelStyle = {
      fontWeight: 'bold',
    };
  
    const infoStyle = {
      marginBottom: '10px',
    };
  
    return (
      <>
        <h1>Detalle del Dentista</h1>
        <div style={containerStyle}>
          <div style={infoStyle}>
            <span style={labelStyle}>Nombre:</span> {dent.name}
          </div>
          <div style={infoStyle}>
            <span style={labelStyle}>Email:</span> {dent.email}
          </div>
          <div style={infoStyle}>
            <span style={labelStyle}>Teléfono:</span> {dent.phone}
          </div>
          <div style={infoStyle}>
            <span style={labelStyle}>Sitio web:</span> {dent.website}
          </div>
        </div>
      </>
    )
  }

export default Detail