import { useContext } from 'react'
import { AppContext } from '../../context/GlobalState'
import './GoldAward.css'

const GoldAward = () => {
  const context = useContext(AppContext)

  if (!context) {
    return null
  }

  const { state } = context
  const goldAward = state.IsHero.find((award) => award.id === 2)
  const goldAward2 = state.IsHero.find((award) => award.id === 4)

  if (!goldAward) {
    return <p>No se encontró el Sorteo de Oro.</p>
  }

  return (
    <div className="cards-awards">
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

      {goldAward2 && (
        <div className="card">
          <img className="card-img" src={goldAward2.image} alt={goldAward2.title} />
          <div className="card-img-overlay">
            <h2>{goldAward2.title}</h2>
            <p>{goldAward2.description}</p>
            <p>Precio: {goldAward2.price} CLP</p>
            {goldAward2.characters && (
              <ul>
                {goldAward2.characters.map((character, index) => (
                  <li key={index}>{character}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default GoldAward
