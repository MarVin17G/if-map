import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Api from '../../services/api';
import './GuiaVideo.css';

export default function GuiaVideo() {
  const [searchParams] = useSearchParams();
  // eslint-disable-next-line no-unused-vars
  const [ambiente, setAmbiente] = useState();

  const id = searchParams.get('id');

  useEffect(() => {
    Api
      .get(`/ambientes/${id}`)
      .then((res) => setAmbiente(res.data));
  }, []);

  return (
    <div className="guia-video__container">
      <Header />
      <iframe
        title="video"
        src="https://player.vimeo.com/video/794020989?h=dd81025197&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameBorder="0"
        width="640"
        height="1170"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      />
      <Footer />
    </div>
  );
}
