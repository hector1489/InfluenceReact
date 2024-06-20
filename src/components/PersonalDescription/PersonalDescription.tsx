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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Robert_C._Martin_surrounded_by_computers.jpg/762px-Robert_C._Martin_surrounded_by_computers.jpg"
              alt="uncle Bob"
            />
          </Col>
          <Col md={6} className="container-description">
            <h3 className='text-uppercase'>name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit,
              consequuntur aliquam. Laboriosam accusantium sunt obcaecati magnam
              animi, quis reprehenderit eligendi minus, voluptate autem
              exercitationem? Consectetur maxime animi placeat a error.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default PersonalDescription
