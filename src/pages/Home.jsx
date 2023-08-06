import React from 'react'
import Main from '../components/main/Main'
import Info from '../components/info/Info'
import BlockFoto from '../components/blockFoto/BlockFoto'
const Home = () => {
  return (
    <div className='home'>
      <Main />
      <Info />
      <BlockFoto/>
    </div>
  )
}
export default Home