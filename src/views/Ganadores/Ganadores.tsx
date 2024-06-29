import { useNavigate } from 'react-router-dom'
import './Ganadores.css'

const Ganadores = () => {
  const navigate = useNavigate()

  return (
    <div className='ganadores-views p-2'>
    <h3>Ganadores</h3>
    <p>welcome</p>
    <button onClick={() => navigate('/')}>Volver a la página principal</button>
    </div>
  )
}

export default Ganadores



