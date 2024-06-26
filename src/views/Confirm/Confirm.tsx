import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Confirm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      console.log('Pago confirmado con token:', token);
      navigate('/');
    } else {
      console.error('No se encontró token de confirmación');
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="container-intro">
      <h1 className="title">¡Gracias por tu pago!</h1>
      <p className="description">Tu participación ha sido registrada. Buena suerte en el sorteo.</p>
      <button className="back-button" onClick={() => navigate('/')}>Volver a la página principal</button>
    </div>
  )
}

export default Confirm
