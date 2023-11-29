import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <div className='container'>
      <img src={`https://source.unsplash.com/random/600x600?bear=${1 * 100}`} alt="" />
      <img src={`https://source.unsplash.com/random/600x600?bear=${2 * 100}`} alt="" />
      <img src={`https://source.unsplash.com/random/600x600?bear=${3 * 100}`} alt="" />
      <img src={`https://source.unsplash.com/random/600x600?bear=${4 * 100}`} alt="" />
      <img src={`https://source.unsplash.com/random/600x600?bear=${5 * 100}`} alt="" />
      <span className='txt'>Bears
      <button>See more</button>
      </span>
    </div>
    <div className='container'>
      <img src={`https://source.unsplash.com/random/600x600?lion=${1 * 100}`} alt="" />
      <img src={`https://source.unsplash.com/random/600x600?lion=${2 * 100}`} alt="" />
      <img src={`https://source.unsplash.com/random/600x600?lion=${3 * 100}`} alt="" />
      <img src={`https://source.unsplash.com/random/600x600?lion=${4 * 100}`} alt="" />
      <img src={`https://source.unsplash.com/random/600x600?lion=${5 * 100}`} alt="" />
      <span className='txt'>Lions
      <button>See more</button> </span>
    </div>
    <div className='container'>
      <img src={`https://source.unsplash.com/random/600x600?horse=${1 * 100}`} alt="" />
      <img src={`https://source.unsplash.com/random/600x600?horse=${2 * 100}`} alt="" />
      <img src={`https://source.unsplash.com/random/600x600?horse=${3 * 100}`} alt="" />
      <img src={`https://source.unsplash.com/random/600x600?horse=${4 * 100}`} alt="" />
      <img src={`https://source.unsplash.com/random/600x600?horse=${5 * 100}`} alt="" />
      <span className='txt'>Horses
      <button>See more</button></span>
    </div>
    <div className='container'>
      <img src={`https://source.unsplash.com/random/600x600?wolf=${1 * 100}`} alt="" />
      <img src={`https://source.unsplash.com/random/600x600?wolf=${2 * 100}`} alt="" />
      <img src={`https://source.unsplash.com/random/600x600?wolf=${3 * 100}`} alt="" />
      <img src={`https://source.unsplash.com/random/600x600?wolf=${4 * 100}`} alt="" />
      <img src={`https://source.unsplash.com/random/600x600?wolf=${5 * 100}`} alt="" />
      <span className='txt'>Wolves
      <button>See more</button></span>
    </div>
    <div className='container'>
      <img src={`https://source.unsplash.com/random/600x600?dog=${1 * 100}`} alt="" />
      <img src={`https://source.unsplash.com/random/600x600?dog=${2 * 100}`} alt="" />
      <img src={`https://source.unsplash.com/random/600x600?dog=${3 * 100}`} alt="" />
      <img src={`https://source.unsplash.com/random/600x600?dog=${4 * 100}`} alt="" />
      <img src={`https://source.unsplash.com/random/600x600?dog=${5 * 100}`} alt="" />
      <span className='txt'>Dogs
      <button>See more</button></span>
    </div>
    </>
  )
}

export default App
