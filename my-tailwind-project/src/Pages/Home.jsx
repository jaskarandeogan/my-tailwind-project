import React from 'react'
import Header from '../components/Header'
import FlagsDashboard from '../components/FlagsDashboard'

const Home = () => {
  return (
    <div className='bg-[#FAFAFA] dark:bg-[#202C36]'>
        <Header />
        <FlagsDashboard />
    </div>
  )
}

export default Home