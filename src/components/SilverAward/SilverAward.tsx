import { useContext } from 'react'
import { AppContext } from '../../context/GlobalState'
import './SilverAward.css'


const SilverAward = () => {
  const context = useContext(AppContext)

  if (!context) {
    return null
  }

  const { state } = context
  const goldAward = state.IsHero.find((award) => award.id === 1)

  if (!goldAward) {
    return <p>No se encontró el Sorteo de Oro.</p>
  }

  return (
    <div className="silver-awards">
    <div className="card">
      <img className="card-img" src={goldAward.image} alt={goldAward.title} />
      <div className="card-img-overlay">
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
    </div>
  )
}

export default SilverAward

