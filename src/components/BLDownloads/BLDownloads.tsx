import BasesLegales from "../../assets/BasesLegales/SORTEO-JULIO-2024.pdf"
import './BLDownloads.css'

const BLDownloads = () => {
  const blFilePath = BasesLegales

  return (
    <div className="bl-downloads">
      <h5>Descarga las bases legales aquí</h5>
      <a href={blFilePath} download="BasesLegales-Julio-2024.pdf">
        <button>Descarga</button>
      </a>
    </div>
  )
}

export default BLDownloads
