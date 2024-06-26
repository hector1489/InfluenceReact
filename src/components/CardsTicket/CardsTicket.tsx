import BasesLegales from "../../assets/BasesLegales/SORTEO-JULIO-2024.pdf"
import './CardsTicket.css'

const CardsTicket = () => {

  const blFilePath = BasesLegales

  const data2 = [
    {
      id: 1,
      image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium_AV1?wid=5120&hei=2880&fmt=webp&qlt=70&.v=VW44dkRidm5wazhwcGxtL0cyaEJ2VTkrNXBUdUJSK1k4NE5seUtJaW80ZE9GbVRLdFoyOVBmczRNaU91Q1BaNUNUcEx1KzZ4TU5aSmJ4VzBKZWFPSGppOHgxUjM1bG1hRnArQXQ1elR1Rk1aY2JtS1MrU1lZNlNHUVFTemFCTi9XNVZCekptOVp3bldoZUNpK3BudFFnPT0=&traceId=1',
      title: 'Un Ticket',
      price: 2500
    },
    {
      id: 2,
      image: 'https://suzuki.cl/media/gwyp1blh/desktop-suzuki-swift-12-gl-1-pdp-rojo-metalico-1.jpg',
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
