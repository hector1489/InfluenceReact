import { useNavigate } from 'react-router-dom'
import { SilverAward } from '../../components'
import './SorteoPlata.css'


const SorteoPlata = () => {

  const navigate = useNavigate()

  return (
    <div className='silver-views p-4'>
      <h3>Sorteo de Plata</h3>
      <SilverAward />
      <button onClick={() => navigate('/')}>Volver a la página principal</button>
    </div>
  )
}

export default SorteoPlata




