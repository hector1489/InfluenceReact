import { useContext } from 'react'
import { AppContext } from '../../context/GlobalState'
import './BronzeAward.css'

const BronzeAward = () => {
  const context = useContext(AppContext)

  if (!context) {
    return null
  }

  const { state } = context
  const goldAward = state.IsHero.find((award) => award.id === 3)

  if (!goldAward) {
    return <p>No se encontró el Sorteo de Oro.</p>
  }

  return (
    <div className="card">
      <img src={goldAward.image} alt={goldAward.title} />
      <div className="card-content">
        <h2>{goldAward.title}</h2>
        <p>{goldAward.description}</p>
        <p>Precio: {goldAward.price} CLP</p>
        {goldAward.characters && (
          <ul>
            {goldAward.characters.map((character, index) => (
              <li key={index}>{character}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default BronzeAward


