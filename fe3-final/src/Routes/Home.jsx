import React from 'react'
import Card from '../Components/Card'
import { useDentStates } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useDentStates()
  const containerClass = state.theme ? '' : 'dark';
  

  return (
    <main className={containerClass} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {state.dents.map(dent => <Card name={dent.name} username={dent.username} id={dent.id} key={dent.id}/>)}
      </div>
    </main>
  )
}

export default Home