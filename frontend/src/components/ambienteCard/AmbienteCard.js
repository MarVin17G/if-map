import './AmbienteCard.css'
import { Link } from 'react-router-dom'

export default function AmbienteCard ({items}) {
    const url = "";

    return (
        <div className="card_div_ambiente">
            <div className="card_ambiente">
                {items?.map((item) =>
                    <Link 
                        to={`/menuAmbiente?id=${item.ambienteId}`} 
                        className="btn" 
                        activeClassName="current"
                        key={item.ambienteId}
                    >
                            {item.nome}
                    </Link>
                )}
            </div>
        </div>
    ) 
}