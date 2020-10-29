import React, { Component } from 'react';
import './App.css';
import Questionare from './components/Questionare';

class App extends Component{
  render(){
  return (
    <div className="App">
     <h1>Java Script Quiz</h1>
     <Questionare />
      
    </div>
  );
}
}


export default App;
