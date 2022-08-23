import React from 'react';
import '../CSS/Home.css'
import Navbar from './Navbar';


function Home() {
  return (
    <div className='container'>
        <Navbar />
        <div className='home-page'>
          <h4>For Online order goto Menu</h4>
        </div>
    </div>
  )
}

export default Home