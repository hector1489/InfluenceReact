import './Header.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ENDPOINT } from '../../config/constans';


interface PaymentMethod {
  method: 'transbank' | 'mercadopago';
}

const Header = () => {
  const navigate = useNavigate();

  const handlePayment = async (method: PaymentMethod['method']) => {
    const endpoint = method === 'transbank' ? ENDPOINT.TRANSBANK_PAYMENT : ENDPOINT.MERCADOPAGO_PAYMENT;
    
    try {
      const response = await axios.post(endpoint, {
        // Include any necessary data here
      });
      console.log(response.data);
      navigate('/confirm');
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

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
            onClick={() => handlePayment('transbank')}
            aria-label="Pagar con Transbank"
          >
            <span className='text-uppercase'>p</span>agar con <span>t</span>ransbank
          </button>
          <button
            className="payment-button"
            onClick={() => handlePayment('mercadopago')}
            aria-label="Pagar con Mercado Pago"
          >
            <span className='text-uppercase'>p</span>agar con Mercado Pago
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
