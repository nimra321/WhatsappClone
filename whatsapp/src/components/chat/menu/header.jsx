import React from 'react'
// import { useContext } from 'react'
import { Box , styled } from '@mui/material'
// import { AccountContext } from '../../../context/accountProvider'
import {Chat as MessangerIcon, Update} from '@mui/icons-material'
import { useState } from 'react'
import HeaderMenu from './headerMenu'
import InfoDrawer from '../../drawer/infoDrawer'

const Component = styled(Box) `
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`
const Wrapper = styled(Box) `
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & > first-child {
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`

const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
})


const Header = () => {
    // const {account} = useContext(AccountContext);
    const [ openDrawer,setOpenDrawer ] = useState(false);
    const toggleDrawer = () => {
        setOpenDrawer(true);
    }
  return (
    <>
        <Component>
            {/* <img src={account.picture} alt='dp'/> */}
            <Image src='https://wishes.photos/wp-content/uploads/2023/01/Cute-stylish-hijab-girl-pics-for-fb-profile-1.webp' alt='dp' onClick={() => toggleDrawer()}/>
            <Wrapper>
                <Update/>
                <MessangerIcon/>
                <HeaderMenu setOpenDrawer={setOpenDrawer} />
            </Wrapper>
        </Component>
        <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  )
}

export default Header
