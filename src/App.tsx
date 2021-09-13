import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/ui-components/Button/Button';
import CustomizeButton from './components/ui-components/Button/CustomizeButton';
import Card from './components/ui-components/Card';

function App() {
  return (
    <div className="App">
      <Button/>
      <CustomizeButton
          width="124px"
          height="38px"
          color="white"
          backgroundColor="blue"
       />
       <Card />
    </div>
  );
}

export default App;

