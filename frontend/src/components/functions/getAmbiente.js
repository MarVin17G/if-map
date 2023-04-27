import { useState, useEffect } from 'react';
import Api from '../../services/api';

export default function useGetAmbientes(id) {
  const [ambiente, setAmbiente] = useState();

  useEffect(() => {
    Api
      .get(`/ambientes/${id}`)
      .then((res) => setAmbiente(res.data));
  }, [id]);

  return ambiente;
}
