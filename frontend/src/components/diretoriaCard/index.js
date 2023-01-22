import { Link } from 'react-router-dom';
import './style.css'

export default function DiretoriaCard ({ items }) {
    return (
        <section className="div_card_dir">
            {items?.map((diretoria) => 
                <Link to={`/ambientes?search=&id=${diretoria.diretoriaId}`}>
                    <div className='cartao_dir'>
                        <h3 className='title'>{diretoria.nome}</h3>
                        <div className="bar">
                            <div className="emptybar"></div>
                            <div className="filledbar"></div>
                        </div>
                        <div className="circle">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className='circle_card'>
                                <circle className="stroke" cx="60" cy="60" r="50"/>
                            </svg>
                        </div>
                    </div>
                </Link>
            )}    
        </section>
    )
}