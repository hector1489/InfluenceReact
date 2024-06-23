import { useState } from 'react'
import './LotteryTomb.css'

const LotteryTomb = () => {
  const [winningNumber, setWinningNumber] = useState<number | null>(null)

  const handlePickWinner = () => {
    const randomNumber = Math.floor(Math.random() * 200) + 1
    setWinningNumber(randomNumber)
  }

  const handleClearResult = () => {
    setWinningNumber(null);
  }

  return (
    <div className="tomb">
      <div>
        <h4>Tómbola de 200 Números</h4>
        <div>
          <button onClick={handlePickWinner}>Elegir Número Ganador</button>
          <button onClick={handleClearResult}>Limpiar Resultado</button>
        </div>
        {winningNumber !== null && (
          <div>
            <h4>Número Ganador: {winningNumber}</h4>
          </div>
        )}
      </div>
    </div>
  )
}

export default LotteryTomb
