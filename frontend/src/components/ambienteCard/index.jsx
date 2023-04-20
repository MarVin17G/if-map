/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React from 'react';

import './style.css';

export default function AmbienteCard({ items }) {
  return (
    <div className="card_div_ambiente">
      <div className="card_ambiente">
        {items?.map((item) => (
          <Link
            to={`/menuAmbiente?id=${item.ambienteId}`}
            className="btn"
            activeClassName="current"
            key={item.ambienteId}
          >
            {item.nome}
          </Link>
        ))}
      </div>
    </div>
  );
}
