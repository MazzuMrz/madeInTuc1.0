import React from 'react'
import '../src/styles/style.css'
import logo from '../src/assets/logo.jpeg'

const App = () => {
  return (
    <div className='container text-center'>
      <div className='logo-container mt-4'>
        <img alt='logo' className='' src={logo}/>
      </div>
      <div className='info-container text-center'>
        <h2><h1 className='fw-bold'>Hola!</h1> Mi nombre es <p className='fw-normal font-italic'>Matias Maruzza</p></h2>
      </div>

      <div className='link-container'>
        <div className='hvr-sweep-to-right text-center'>Facebook</div>
        <div className='hvr-sweep-to-right text-center'>Linekdin</div>
        <div className='hvr-sweep-to-right text-center'>Behance</div>
        
      </div>
    </div>
  )
}

export default App
