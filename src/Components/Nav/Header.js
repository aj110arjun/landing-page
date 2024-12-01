import React from 'react'
import styled from 'styled-components'
import "../Assets/css/style.css"

function Header() {
  return (
    <>
        <Container>
            <Left>
                <Logo>EASY<Span>FRONTEND</Span></Logo>
            </Left>
            <Right>
                <Register>Login/SignUp</Register>
            </Right>
        </Container>
    </>
  )
}

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
`
const Left = styled.div``
const Logo = styled.h1`
    font-size: 30px;
    font-weight: bold;

`
const Span = styled.span`
    color: #24a19c;
`
const Right = styled.div``
const Register = styled.a`
    background: #24a19c;
    color: #fff;
    font-weight: bold;
    padding: 15px 25px;
    font-size: 16px;
    border-radius: 9px;
    cursor: pointer;
`

export default Header