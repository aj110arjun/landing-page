import React from 'react'
import styled from 'styled-components'
import "../../Assets/css/style.css"

function Container1() {
  return (
    <>
        <Container className="portfolio">
            <Div>
                <Heading>WE ARE AGENCY<br /><Span> ANOTHER STARTUP</Span></Heading>
                <Paragraph>Loren ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
                <Button>Contact Us</Button>
            </Div>
        </Container>
    </>
  )
}

const Container = styled.section``
const Div = styled.div`
    padding: 300px 130px;
    vertical-align: center;
`
const Heading = styled.div`
    font-size: 55px;
    line-height: 1;
    letter-spacing: 4px;
    font-weight: 900;
    color: #373737;
`
const Span = styled.span`
    font-size: 45px;
    line-height: 1;
    font-weight: 100;
    letter-spacing: 4px;
    opacity: 0.8;
`
const Paragraph = styled.p`
    font-size: 18px;
    margin: 48px 0;
    color: #373737;
    opacity: 0.8;
    width: 600px;
    letter-spacing: 1px;
`
const Button = styled.a`
    font-size: 16px;
    color: #fff;
    background: #24a19c;
    padding: 15px 45px;
    border-radius: 9px;
    cursor: pointer;
`

export default Container1