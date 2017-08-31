import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button'

class App extends Component {
  render() {
    return (
      <div>
        <h2>Bienvenidos al 16º Meetup ProinChile</h2>
        <br />
        <Button.Container>
          <Button orange>Presioname</Button>
        </Button.Container>
      </div>
    );
  }
}

export default App;
