import React, { useState } from 'react';
import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

const App = () => {
  const heroData = [
    {text1:"Car Present ",text2:" what you love"},
    {text1:"Choose Car",text2:"your favorite car"},
    {text1:"Finde Best",text2:"finde best car"},
  ]
  const [heroCount,setHeroCount]=useState(2)
  const [playStatus,setPlayStatus]=useState(false)
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus} 
      />
    </div>
  );
};

export default App;