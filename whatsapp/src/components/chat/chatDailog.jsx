import { Dialog, Box, styled } from '@mui/material'
import React, { useContext } from 'react'
import Menu from './menu/menu'
import EmptyChat from './chat/emptyChat'
import ChatBox from './chat/chatBox'
import { AccountContext } from '../../context/accountProvider'

const Component = styled(Box) `
    display: flex;
`
const LeftComponent = styled(Box) `
    min-width :450px
`
const RightComponent = styled(Box) `
    width: 73%;
    min-width: 300px;
    height:100%;
    border-left: 1px solid rgba(0,0,0,0.14);
`

const dialogstyle = {
    height: '95%' ,
    width: '100%' ,
    margin: '20px' ,
    maxWidth: '100%' ,
    maxHeight: '100%' ,
    borderRadius: 0 ,
    boxShadow: 'none' , 
    overflow: 'hidden' ,
    
}

const ChatDailog = () => {

    const { person } = useContext(AccountContext);

  return (
    <Dialog open={true} PaperProps={{ sx: dialogstyle }} hideBackdrop={true} maxWidth={'md'}>
        <Component>
            <LeftComponent>
                <Menu/>
            </LeftComponent>
            <RightComponent>
                {/* <EmptyChat/>
                <ChatBox/> */}
                { Object.keys(person).length ? <ChatBox /> : <EmptyChat /> }
            </RightComponent>
        </Component>
    </Dialog>
  )
}

export default ChatDailog
