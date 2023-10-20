import React from 'react'
import LoginDailog from './account/loginDialog'
import { AppBar, Toolbar, styled, Box } from '@mui/material'
import ChatDailog from './chat/chatDailog'
import { useContext } from 'react'
import { AccountContext } from '../context/accountProvider'

const Component = styled(Box)`
    height: 100vh;
    background-color: #DCDCDC;
`
const Header = styled(AppBar)`
    height: 125px ;
    background-color: 	#00A884;
    box-shadow: none:
`

const LoginHeader = styled(AppBar)`
    height: 220px ;
    background-color: 	#128c7e;
    box-shadow: none:
`


const Messanger = () => {

    const { account } = useContext(AccountContext);

    return (
        <Component>
            {
                account ?
                    <>
                        <Header>
                            <Toolbar>

                            </Toolbar>
                        </Header>
                        <ChatDailog />
                    </>
                    :
                    <>
                        <LoginHeader>
                            <Toolbar>

                            </Toolbar>
                        </LoginHeader>
                        <LoginDailog />
                    </>
            }
        </Component>
    )
}

export default Messanger
