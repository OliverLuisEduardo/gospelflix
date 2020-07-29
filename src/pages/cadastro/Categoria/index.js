import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const [categoria, setCategoria] = useState[('Teste')];
  const [nomeCategoria, setNomeCategoria] = useState('Pregações');
  
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nomeCategoria}</h1>

      <form onSubmit={function handleSubmit(infoEvento) {
        infoEvento.preventDefault();
        console.log('Tentou form');
        setCategoria([
          ...categoria,
          nomeCategoria
        ]);
      }}>
        <label>
          Nome da Categoria:
          <input
            type="text"
            value={nomeCategoria}
            onChange={function Digitar(infoEvento){
              setNomeCategoria (infoEvento.target.value);
            }}
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categoria.map((categoria) => {
          return(
            <li key={categoria}>
              {categoria}
            </li>
          )
        })}
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;