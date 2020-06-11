import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';


const theme = {
    background: "#fff",
    // borderRadius: "5px",
    // fontFamily: 'AvenirNext',
    headerBgColor: "#fff",
    // headerFontColor: '',
    // headerFontSize: '',
    botBubbleColor: "#ffd64d",
    botFontColor: "#000",
    userBubbleColor: '#fff',
    userFontColor: '#000',
    userBubbleBackgroundColor: "#000"
}

const steps = [
    {
        id: '1',
        message: 'Welcome to onedrobe!',
        trigger: '2'
      },
      {
          id: '2',
          options: [
            {
                label: '1. What is onedrobe?',
                trigger: 'question1'
            },
            {
                label: '2. Can I buy through onedrobe',
                trigger: 'question2'
            }
        ],
      },
      {
        id: 'question1',
        message: 'Once drobe is ...',
        end: true,
      },
      {
        id: 'question2',
        message: 'Sorry...',
        end: true,
      }
]

class ChatComp extends React.Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <ChatBot
                    steps={steps}
                />
            </ThemeProvider>
        )
    }
}

export default ChatComp;