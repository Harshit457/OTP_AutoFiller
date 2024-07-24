import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
function Preview() {
  return (
    <div className='w-4/5 h-auto ml-32'>
        <Header heading={"PREVIEW"}></Header>
        <br />
        <div className='flex  justify-evenly '>
        <Layout></Layout>
    
        <Layout></Layout>
      
        <Layout></Layout>
      
        <Layout></Layout>
        
        <Layout></Layout>
        </div>
    </div>
  )
}

export default Preview
