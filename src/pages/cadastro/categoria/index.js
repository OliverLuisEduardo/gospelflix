import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroComponentes(){
    return(
      <PageDefault>
        <h1>Página de Cadastro de Video</h1>
        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefault>
    )
  }

  export default CadastroComponentes;