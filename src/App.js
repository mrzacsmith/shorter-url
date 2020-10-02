import React from 'react'
import Nav from './components/pages/Nav.jsx'
import Hero from './components/pages/Hero.jsx'
import Short from './components/pages/Short.jsx'
import Body from './components/pages/Body.jsx'
import BodyBottom from './components/pages/BodyBottom.jsx'
import Footer from './components/pages/Footer.jsx'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background: lightcoral;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`

const App = () => {
  return (
    <StyledDiv>
      <Nav />
      <Hero />
      <Short />
      <Body />
      <BodyBottom />
      <Footer />
    </StyledDiv>
  )
}

export default App
