import { useState, useEffect } from 'react';
import Api from '../../services/api';

export default function useGetDiretorias() {
  const [diretorias, setDiretoria] = useState();

  useEffect(() => {
    Api
      .get('/diretorias')
      .then((res) => setDiretoria(res.data));
  }, []);

  return diretorias;
}
