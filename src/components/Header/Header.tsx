import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const handleGoToConfirm = () => {
    navigate('/confirm')
  }

  return (
    <section className="section-intro">
      <div className="container-intro">
        <h5>
          participa en nuestro sorteo de
        </h5>
        <h2 className="title">Producto del sorteo</h2>
        <p className="description">Contribuye y gana premios increíbles</p>
        <div className="payment-buttons">
          <button className="payment-button" onClick={handleGoToConfirm} aria-label="Pagar con Transbank">
            <span className='text-uppercase'>p</span>agar con <span>t</span>ransbank
          </button>
          <button className="payment-button" onClick={handleGoToConfirm} aria-label="Pagar con Mercado Pago">
            <span className='text-uppercase'>p</span>agar con Mercado Pago
          </button>
        </div>
      </div>
    </section>
  )
}

export default Header
