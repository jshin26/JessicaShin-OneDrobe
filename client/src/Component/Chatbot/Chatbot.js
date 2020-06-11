import React from 'react';
import { ThemeProvide, ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';


const theme = {
    background: "#ffd64d",
    // fontFamily: 'AvenirNext',
    // headerBgColor: "",
    // headerFontColor: '',
    // headerFontSize: '',
    // botBubbleColor: '',
    // botFontColor: '',
    // userBubbleColor: '',
    // userFontColor: '',
}

const steps = [
    {
        id: '1',
        message: 'Welcome to onedrobe! Do you need help?',
        end: true
    }
]

class ChatComp extends React.Component {
    render() {
        return (
            <ChatBot style={{backgroundColor: "#ffd64d"}}
                steps={steps}
            />
        )
    }
}

export default ChatComp;