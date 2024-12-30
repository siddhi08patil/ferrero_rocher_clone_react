import React from 'react'

const Info = () => {
  return (
    <div className='allInfo'>
    <div className='Infotext'>
      <p>Discover Our </p>
      <h1>PRODUCTS</h1>
      </div>
      <div className='products'>
      <div >
        <img src='https://www.ferrerorocher.com/in/sites/ferrerorocher20_in/files/2021-05/1-pralines-gfx.png?t=1734453602'/>
        <h1>Ferrero Rocher</h1>
        <button className='discover'>Discover</button>
      </div>
      <div>
      <img src='https://www.ferrerorocher.com/in/sites/ferrerorocher20_in/files/2022-08/frmoments_carousel_pc.jpg?t=1734453602'/>
        <h1>Ferrero Moments</h1>
        <button className='discover'>Discover</button>
      </div>
      </div>
    </div>
  )
}

export default Info
