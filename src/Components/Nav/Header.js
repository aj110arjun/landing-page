import React from 'react'
import { NavLink } from 'react-router-dom'
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
                <Ulist>
                    <List>
                        <NavLink className={({ isActive })=> isActive ? "active" : ""} to="/">Home</NavLink>
                    </List>
                    <List>
                        <NavLink className={({ isActive })=> isActive ? "active" : ""} to="/contact">Contact</NavLink>
                    </List>
                    <List>
                        <NavLink className={({ isActive })=> isActive ? "active" : ""}to="/about">About</NavLink>
                    </List>
                </Ulist>
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
const Ulist = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
`
const List = styled.li`
    margin-right: 60px;
`

export default Header