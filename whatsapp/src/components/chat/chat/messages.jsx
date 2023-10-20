import React from 'react'
import { Box, styled } from '@mui/material'
import Footer from './footer'

const Wrapper = styled(Box) `
    background-image: url(${'https://i.pinimg.com/600x315/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg'});
    background-size: 50% ;
`
const Component = styled(Box) `
  height: 77vh;
  overflow-y: scroll;
`


const Messages = () => {
  return (
    <Wrapper>
      <Component>

      </Component>
      <Footer />

    </Wrapper>
  )
}

export default Messages