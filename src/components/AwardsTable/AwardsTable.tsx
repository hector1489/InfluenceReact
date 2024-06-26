import { useContext } from 'react'
import { AppContext } from '../../context/GlobalState'
import { ENDPOINT } from '../../config/constans'
import './AwardsTable.css'

const AwardsTable = () => {
  const context = useContext(AppContext)
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
      console.error('Transbank URL is not defined')
    }
  }

  if (!context) {
    return null
  }

  const { state } = context;

  return (
    <section className="section-awards">
      <table>
        <tbody id="awards-table-body">
          {state.IsHero.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={`Award Image ${item.id}`} />
                {item.image2 && <img src={item.image2} alt={`Award Image ${item.id} Second`} />}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>$ {item.price}</p>
                <div>
                  <button
                    onClick={handlePaymentTransbank}
                    aria-label="Pagar con Transbank"
                  >
                    <span className='text-uppercase'>p</span>agar con <span>t</span>ransbank
                  </button>
                  <button
                    onClick={handlePaymentMercadoPago}
                    aria-label="Pagar con Mercado Pago"
                  >
                    <span className='text-uppercase'>p</span>agar con Mercado Pago
                  </button>
                  </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default AwardsTable
