import { useContext } from 'react';
import styles from './App.module.scss';
import { LoginBox } from './componente/LoginBox';
import { MessageList } from './componente/MessageList';
import { SendMessageForm } from './componente/SendMessageForm';
import { AuthContext } from './context/auth';

export function App() {

  const { user } = useContext(AuthContext)

  return (
   <main className={`${styles.contentWrapper} ${!!user  ? styles.contentSigned: ''}`}>
     <MessageList/>
       { !!user ? <SendMessageForm/> : <LoginBox/> }
   </main>
  )
}


