import React from 'react';
import styled from 'styled-components';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import dadosIniciais from '../../data/dados_iniciais.json';

const AppWrapper = styled.div`
  background: var(--grayDark);
  padding-top: 94px;

  @media (max-width: 800px) {
    paddin-top: 0;
  }
`;
function Home() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo[0]}
        url={dadosIniciais.categorias[0].videos[0].url[0]}
        videoDescription="Testando "
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </AppWrapper>
  );
}

export default Home;
