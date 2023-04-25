import { useState, useEffect } from 'react';
import Api from '../../services/api';

function getAmbientes(id) {
  const [ambiente, setAmbiente] = useState();

  useEffect(() => {
    Api
      .get(`/ambientes/${id}`)
      .then((res) => setAmbiente(res.data));
  }, []);

  return ambiente;
}

export default getAmbientes();
