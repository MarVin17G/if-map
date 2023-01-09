import './AmbienteCard.css'
import { Link } from 'react-router-dom'

export default function AmbienteCard ({items}) {
    return (
        <div className="card_div">
            {this.items.map (
                ambiente => <div key={items.ambienteId}>{items.nome}</div>
            )}
        </div>
    ) 
}