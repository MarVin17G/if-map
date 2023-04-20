/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import { FaPen, FaTrash } from 'react-icons/fa';
import React from 'react';

import './style.css';

function GestorCard(props) {
  return (
    <div className="gestor-card-container">
      <div className="gestor-card-info">
        <p>{ props.nome }</p>
        <p>{ props.email }</p>
      </div>
      <div className="gestor-card-matricula">
        <p>Matrícula</p>
        <p>{ props.matricula }</p>
      </div>
      <div className="gestor-card-actions">
        <button className="gestor-card-actions__edit-button" onClick={() => props.onEdit(props.id)} type="button"><FaPen size="15px" /></button>
        <button className="gestor-card-actions__remove-button" onClick={() => props.onDelete(props.id)} type="button"><FaTrash size="15px" /></button>
      </div>
    </div>
  );
}

export default GestorCard;
