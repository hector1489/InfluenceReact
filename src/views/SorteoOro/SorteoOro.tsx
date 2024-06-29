import { useNavigate } from 'react-router-dom'
import { GoldAward } from '../../components'
import './SorteoOro.css'

const SorteoOro = () => {

  const navigate = useNavigate()

  return (
    <div className='gold-views p-4'>
      <h3>Sorteo de Oro</h3>
      <GoldAward />
      <button onClick={() => navigate('/')}>Volver a la página principal</button>
    </div>
  )
}

export default SorteoOro


