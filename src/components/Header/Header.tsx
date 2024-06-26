import './Header.css'
import { ENDPOINT } from '../../config/constans'


const Header = () => {
  const transbankUrl = ENDPOINT.TRANSBANK_PAYMENT
  const mercadopagoUrl = ENDPOINT.MERCADOPAGO_PAYMENT


  const handlePaymentTransbank  = () => {
    if (transbankUrl) {
      window.open(transbankUrl, '_blank')
    } else {
      console.error('Transbank URL is not defined')
    }
  }

  const handlePaymentMercadoPago  = () => {
    if (mercadopagoUrl) {
      window.open(mercadopagoUrl, '_blank')
    } else {
      console.error('Transbank URL is not defined')
    }
  }

  return (
    <section className="section-intro">
      <div className="container-intro">
        <h5>
          premio para el sorteo de oro de un
        </h5>
        <h2 className="title">
          Suzuki Swift 1.2 GL!!
        </h2>
        <p className="description">equivalentes a $ 9.000.000, en efectivo o transferencia bancaria.</p>
        <div className="payment-buttons">
          <button
            className="payment-button"
            onClick={handlePaymentTransbank}
            aria-label="Pagar con Transbank"
          >
            <span className='text-uppercase'>p</span>agar con <span>t</span>ransbank
          </button>
          <button
            className="payment-button"
            onClick={handlePaymentMercadoPago}
            aria-label="Pagar con Mercado Pago"
          >
            <span className='text-uppercase'>p</span>agar con Mercado Pago
          </button>
        </div>
      </div>
    </section>
  )
}

export default Header
