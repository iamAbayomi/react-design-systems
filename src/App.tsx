import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/ui-components/Button/Button';
import CustomizeButton from './components/ui-components/Button/CustomizeButton';

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
    </div>
  );
}

export default App;

