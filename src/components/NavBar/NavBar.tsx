import { Navbar, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  const setActiveClass = ({ isActive }: { isActive: boolean }) => {
    return isActive
      ? 'text-color-one text-decoration-none me-3 fw-bold fst-italic'
      : 'text-color-two text-decoration-none me-3';
  }

  return (
    <Navbar className='navBar' fixed='top'>
      <Container>
        <Navbar.Brand >
          <a href="https://hector1489.github.io/InfluenceApp/#" className="logo" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <NavLink to="/" className={setActiveClass}>Inicio</NavLink>
            <NavLink to="/tickets" className={setActiveClass}>Tickets</NavLink>
            <NavLink to="/register" className={setActiveClass}>Registrarse</NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}

export default NavBar
