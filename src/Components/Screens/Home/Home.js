import React from 'react'
import Container1 from './Container1'
import { Helmet } from 'react-helmet'

function Home() {
  return (
    <>
        <Helmet>
            <title>Home Page</title>
        </Helmet>
        
        <Container1 />
    </>
  )
}

export default Home