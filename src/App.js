import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine   
            height ="100vh"
            projectID="0f236d07-7bcc-4603-8449-cf90b192a02e"
            userName={localStorage.getItem('usename')}
            userSecret={localStorage.getItem('password')}  //123123
            renderChatFeed={(chatAppProps) => <chatFeed{...chatAppProps}/>}
        />
    );
}

export default App;