import { GoogleOAuthProvider } from '@react-oauth/google';
import Messanger from "./components/messenger";
import AccountProvider from './context/accountProvider';

function App() {

  const ClientId = '102211858829-4r4eno8t4fv06rrqd48upejp535i72g4.apps.googleusercontent.com';
                      
  return (
    <GoogleOAuthProvider clientId={ClientId}>
      <AccountProvider>
        <Messanger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
