import React from 'react'

const Home = () => {
  return (
    <>
      <div className='allcontainer'>
        <div className='textcontainer'>
            <h1>IRRESASTABLE</h1>
            <h1 className='iamh1'>TASTE &</h1>
            <h1 className='iamh1'>EXPERIENCE</h1>
            <p>The Beauty Of Gold,Care and Infinite</p>
            <p>Attention For Quality And Ingrediants</p>
            <button className='discover'>Discover</button>
        </div>
        <div className='videocontainer'>
            <video className='videoall' autoPlay muted loop src='https://vod.ferrero.com/bdi/9816f0a3f3ac3dde/int/05_video_1920x1080_6sec_t1topshot_sfx_nologo_w03_nosound.mp4'></video>
        </div>
      </div>
    </>
  )
}

export default Home
