import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  //definir categoria
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    const consultarApi = async() => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=f4d6a6797fed4e4ca8faa275b13f628f`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      setNoticias(noticias.articles)
    }
    consultarApi();
  }, [categoria])

  return (
    <Fragment>
      <Header titulo="Buscador de Noticias"/>
      <div className="container white">
        <Formulario 
          setCategoria={setCategoria}
        />
        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
