import './App.css';
import api from './api';
import React, { Component } from 'react';

class App extends Component{

  state = {
    filmes: [],
  }

  async componentDidMount(){
    const response = await api.get('batman');
   
    //console.log(response.data);

    this.setState({ filmes: response.data })
  }

  render(){

     const {filmes} = this.state;


    return(
      <div className='Container'>
        <h1 align="center">Movie List from API <strong>TVMaze.com</strong></h1>
        <p className="p2">Search: Batman</p>
       
        {filmes.map(filme => (
          <ol key={filme.show.id}>

          <h2>{filme.show.name}</h2>
          <p>{filme.show.url}</p>
         
           </ol>
        ))}
      </div>
    );
  }
};



export default App;
