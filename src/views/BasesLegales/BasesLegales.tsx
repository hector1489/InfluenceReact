import { BLDownloads } from "../../components"
import { useNavigate } from 'react-router-dom'
import './BasesLegales.css'

const BasesLegales = () => {
  const navigate = useNavigate()

  return (
    <div className="bl-section">
      <h3 className="bl-title">Bases Legales</h3>
      <BLDownloads />
      <p className="bl-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat dolores recusandae iure ea illo. 
        Eius repudiandae voluptatem dolorem dolor expedita suscipit aliquid soluta! Facere repudiandae ipsam amet omnis officiis!
      </p>
      <p className="bl-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat dolores recusandae iure ea illo. 
        Eius repudiandae voluptatem dolorem dolor expedita suscipit aliquid soluta! Facere repudiandae ipsam amet omnis officiis!
      </p>
      <p className="bl-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quaerat dolores recusandae iure ea illo. 
        Eius repudiandae voluptatem dolorem dolor expedita suscipit aliquid soluta! Facere repudiandae ipsam amet omnis officiis!
      </p>
      <button className="bl-button" onClick={() => navigate('/')}>Volver a la página principal</button>
    </div>
  )
}

export default BasesLegales
