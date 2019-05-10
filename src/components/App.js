import React, {Component} from 'react';
import Header from './Header';
import Noticias from './Noticias';
import Formulario from './Formulario';

class App extends Component{
  state={
    noticias: []
  }
  componentDidMount(){
    this.consultarNoticias()
  }
  consultarNoticias=(categoria='general')=>{
    console.log(categoria);
    let url=`https://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=7151948b68ec41a0803c34133baa6519`
    // console.log(url);
    fetch(url)
    .then(respuesta=>{
      return respuesta.json()
    })
    .then(noticias=>{
      this.setState({
        noticias: noticias.articles
      })
    })
  }
  render(){
    return(
      <div className="contenedor-app">
        <Header titulo="Noticias"/>
        <div className="container white contenedor-noticias">
          <Formulario 
            consultarNoticias={this.consultarNoticias}
          />
          <Noticias 
            noticias={this.state.noticias}
          />
        </div>
        
      </div>
    )
  }
}

export default App;
