import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor:  '#000',
  }

  const [categoria, setCategoria] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  
  function setValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor,
    })
  }
  return (

    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infoEvento) {
        infoEvento.preventDefault();
        setCategoria([
          ...categoria,
          values
        ]);
        setValues(valoresIniciais)
      }}>
       
       
       <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição:"
          type="????"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

       {/* 
      <div>
        <label>
          Nome da Categoria:
          <input
          type="text" 
          value={values.nome}
          onChange={function Digitar(infoEvento){
          setValues ('nome', infoEvento.target.value);
            }}
          />
        </label>
      </div>
      
      <div>
        <label>
          Descrição:
          <textarea
          type="text"
          value={values.descricao}
          onChange={function Digitar(infoEvento){
            setValues ('descricao', infoEvento.target.value);
            }}
          />
        </label>
      </div>

      <div>
        <label>
          Cor:
          <input
          type="color"
          value={values.cor}
          onChange={function Digitar(infoEvento){
          setValues (infoEvento.target.value);
            }}
          />
        </label>
      </div>
          */}
      <button>
        Cadastrar
      </button>
      </form>

      <ul>
        {categoria.map((categoria, indice) => {
          return(
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
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