import React from 'react'
import { useEffect , useState, useContext } from 'react'
import { getUsers } from '../../../service/api';
import ConConversation from './conConversation';
import { Box, styled, Divider } from '@mui/material';
import { AccountContext } from './../../../context/accountProvider';

const Component = styled(Box) `
    height: 81vh;
    overflow: overlay;
`
const StyledDivider = styled(Divider) `
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: 0.6
`


const Conversation = () => {

    const [users, setUsers] = useState([]);
    const { account } = useContext(AccountContext);

    useEffect( () => {
        const fetchData = async () => {
            let response = await getUsers();
            setUsers(response);
        }
        fetchData();
    }, []);

  return (
    <Component>
        {
          users && users.map( (user) => (
                user.sub !== account.sub &&
                <>
                     <ConConversation user={user}/>
                     <StyledDivider/>
                </>
                    
            ))
        }
    </Component>
  )
}

export default Conversation