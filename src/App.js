import logo from './logo.svg';
import './App.css';
import './index.css';
import { Component } from 'react';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Bottom from './Components/Bottom';

function App() {
  return (
    <>
    <div className='bg-[#F4F2EC]'>
      <Navbar></Navbar>
      <Main></Main>
      <Bottom></Bottom>
    </div>
    </>
  );
}

export default App;
