import React from 'react'
import Container1 from './Container1'
import { Helmet } from 'react-helmet'
import Container2 from './Container2'

function Home() {
  return (
    <>
        <Helmet>
            <title>Home Page</title>
        </Helmet>
        
        <Container1 />
        <Container2 />
    </>
  )
}

export default Home