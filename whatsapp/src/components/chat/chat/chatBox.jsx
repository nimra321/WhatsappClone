import React, { useContext } from 'react'
import {Box} from '@mui/material'
import ChatHeader from './chatHeader'
import Messages from './messages'
import { AccountContext } from '../../../context/accountProvider'

const ChatBox = () => {

  const { person } = useContext(AccountContext);

  return (
    <Box styled={ { height: '75%' } }>
        <ChatHeader person={person} />
        <Messages person={person} />
    </Box>
  )
}

export default ChatBox