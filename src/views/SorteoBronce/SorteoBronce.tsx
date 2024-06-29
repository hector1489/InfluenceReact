import { useNavigate } from 'react-router-dom'
import './SorteoBronce.css'
import { BronzeAward } from '../../components'


const SorteoBronce = () => {

  const navigate = useNavigate()

    return (
      <div className='bronze-views p-4'>
      <h3>Sorteo de Bronce</h3>
      <BronzeAward />
      <button onClick={() => navigate('/')}>Volver a la página principal</button>
      </div>
    )
  }
  
  export default SorteoBronce


