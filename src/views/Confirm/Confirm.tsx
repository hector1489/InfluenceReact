
import { useNavigate } from 'react-router-dom'


const Confirm = () => {

  const navigate = useNavigate()
  const handleGoToConfirm = () => {
    navigate('/')
  }

  return (
    <div className="container-intro">
      <h1 className="title">¡Gracias por tu pago!</h1>
      <p className="description">Tu participación ha sido registrada. Buena suerte en el sorteo.</p>
      <button className="back-button" onClick={handleGoToConfirm}>Volver a la página principal</button>
    </div>
  )
}

export default Confirm

