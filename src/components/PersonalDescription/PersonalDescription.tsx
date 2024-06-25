import './PersonalDescription.css'
import { Container, Row, Col } from 'react-bootstrap'

const PersonalDescription = () => {
  return (
    <section className="section-description">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              className="img-fluid"
              src="https://img.freepik.com/vector-premium/dibujos-animados-ejecutivo-empresario_18591-28100.jpg"
              alt="imagen"
            />
          </Col>
          <Col md={6} className="container-description">
            <h3 className='text-uppercase fw-bold'>raul wladimir pantoja cea</h3>
            <p>
              Representante legal de empresa Cronomet Inversiones e Ingeniería SpA.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PersonalDescription
