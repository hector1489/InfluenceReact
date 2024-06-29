import { Col, Container, Row } from "react-bootstrap"
import { ENDPOINT } from '../../config/constans'
import './Banner.css'
import imagenLogo from '../../assets/img/hronopremio.png'

const Banner = () => {
  const transbankUrl = ENDPOINT.TRANSBANK_PAYMENT
  const mercadopagoUrl = ENDPOINT.MERCADOPAGO_PAYMENT

  const handlePaymentTransbank = () => {
    if (transbankUrl) {
      window.open(transbankUrl, '_blank')
    } else {
      console.error('Transbank URL is not defined')
    }
  }

  const handlePaymentMercadoPago = () => {
    if (mercadopagoUrl) {
      window.open(mercadopagoUrl, '_blank')
    } else {
      console.error('MercadoPago URL is not defined')
    }
  }

  return (
    <Container fluid className="banner-container">
      <Row>

        <Col xs={12} md={3} className="logo-section">
          <div className="logo-banner">
            <img src={imagenLogo} alt="logo" />
          </div>
          <h4>GrellOven</h4>
          <div className="stars">
            ⭐ ⭐ ⭐ ⭐ ⭐
          </div>
        </Col>

        <Col xs={12} md={9} className="presentation-section">
          <h3>Bienvenido a Grelloven</h3>
          <p>Tu horno de sorteos online. Aquí podrás participar en los sorteos de bronce, plata y oro. Todos ellos con grandes premios.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, reiciendis est consectetur, nostrum commodi harum voluptatem atque ullam in magnam dignissimos quasi consequatur esse eos officiis sed minima! Illo, deleniti.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, culpa esse natus consequuntur, inventore sit sequi sunt quis aperiam, maiores laudantium ad eaque assumenda id illum aspernatur eveniet explicabo officiis.</p>
          <div className="btn-presentation">
            <button className="buy-button" onClick={handlePaymentMercadoPago}>
              Un Ticket
            </button>
            <button className="buy-button" onClick={handlePaymentTransbank}>
              Varios Ticket
            </button>
          </div>
        </Col>
        
      </Row>
    </Container>
  )
}

export default Banner
