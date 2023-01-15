import './AmbienteCard.css'
import { Link } from 'react-router-dom'

export default function AmbienteCard ({items}) {
    return (
        <div className="card_div_ambiente">
            <div className="card_ambiente">
                {items?.map((item) =>
                    <Link to="" key={item.ambienteId} className="btn">
                        {item.nome}
                    </Link>
                )}
            </div>
        </div>
    ) 
}