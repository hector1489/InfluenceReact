import BasesLegales from "../../assets/BasesLegales/SORTEO-JULIO-2024.pdf"
import './CardsTicket.css'

const CardsTicket = () => {

  const blFilePath = BasesLegales

  const data2 = [
    {
      id: 1,
      image: 'https://storage.googleapis.com/chile-travel-cdn/2021/08/glaciares-shutterstock-ATR393.jpg',
      title: 'Un Ticket',
      price: 2500
    },
    {
      id: 2,
      image: 'https://storage.googleapis.com/chile-travel-cdn/2021/08/glaciares-shutterstock-ATR393.jpg',
      title: 'Por 4 Ticket',
      price: 9000
    },
  ]

  return (
    <section className="section-sale">
      <div className="sales-header">
        <p>Los tickets numbers son tus numeros para el sorteo, estos son aleatorios pero consecutivos.
          Cualquier duda o consulta realizarla al Whatsapp de la pagina.
        </p>
        <div className="sales-details">
          <details>
            <summary>Bases Legales.</summary>
            <p>Para descarga las bases legales haz click <a href={blFilePath} download="Bases Legales" className="fw-bold">aquí</a>.</p>
          </details>
          <details>
            <summary>Ganadores !.</summary>
            <p>Y este es el texto oculto que se muestra los ganadores al desplegarse.</p>
          </details>
        </div>
        <h3>compra tu boleto</h3>
      </div>
      <div className="cards-sales">
        {data2.map(item => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={`Award Image ${item.id}`} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <button
              className="buy-button"
              onClick={() => alert(`Has comprado ${item.title} por $${item.price}`)}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CardsTicket
