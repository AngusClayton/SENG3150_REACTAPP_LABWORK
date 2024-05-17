import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import ButtonCounter from './ButtonCounter';
import NavBar from './NavBar';
import MyForm from './myForm';

const navItems = ['Home','Search','Account'];
const navItems2 = [['Home','hl'],['Search','sl'],['Hello','hello']];
function App() {
  return (
    <div className="App">
      <NavBar brandName='PoolHub' navItems={navItems2}></NavBar>
        <p>
          <HelloWorld message="Everyone"></HelloWorld>
          <ButtonCounter></ButtonCounter>
        </p>
        <MyForm></MyForm>

        
    </div>
  );
}

export default App;
