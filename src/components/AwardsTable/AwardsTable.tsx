import { useContext } from 'react';
import { AppContext } from '../../context/GlobalState';
import './AwardsTable.css'

const AwardsTable = () => {
  const context = useContext(AppContext);

  if (!context) {
    return null;
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
                <h3>{item.title}</h3>
                <p>$ {item.price}</p>
                <button 
                  className="buy-button" 
                  onClick={() => alert(`Has comprado ${item.title} por $${item.price}`)}
                >
                  Comprar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AwardsTable;
