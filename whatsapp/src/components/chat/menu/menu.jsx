import React from 'react'
import Header from './header'
import Search from './search'
import { Box } from '@mui/material'

import Conversation from './conversation'

const Menu = () => {
  return (
    <Box>
        <Header/>
        <Search/>
        <Conversation/>
    </Box>
  )
}

export default Menu
