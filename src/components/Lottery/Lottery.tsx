import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Lottery.css'

const Lottery = () => {
  const navigate = useNavigate()

  return (

    <div className="lottery-section">

      <div className="sorteo">
        <h4>Sorte de Bronce</h4>
        <NavLink to={"/bronce"}>
          <i className="fa-solid fa-medal"></i>
        </NavLink>
        <button onClick={() => navigate('/bronce')}>Sorteo</button> 
      </div>

      <div className="sorteo">
        <h4>Sorteo de Plata</h4>
        <NavLink to={"/plata"}>
          <i className="fa-solid fa-medal"></i>
        </NavLink>
        <button onClick={() => navigate('/plata')}>Sorteo</button> 
      </div>

      <div className="sorteo">
        <h4>Sorteo de Oro</h4>
        <NavLink to={"/oro"}>
          <i className="fa-solid fa-medal"></i>
        </NavLink>
        <button onClick={() => navigate('/oro')}>Sorteo</button> 
      </div>

      <div className="sorteo">
        <h4>Bases Legales</h4>
        <NavLink to={"/bases"}>
          <i className="fa-solid fa-gavel"></i>
        </NavLink>
        <button onClick={() => navigate('/bases')}>Bases</button> 
      </div>

      <div className="sorteo">
        <h4>Ganadores</h4>
        <NavLink to={"/ganadores"}>
          <i className="fa-solid fa-trophy"></i>
        </NavLink>
        <button onClick={() => navigate('/ganadores')}>Ganadores</button> 
      </div>

    </div>
  )
}

export default Lottery
