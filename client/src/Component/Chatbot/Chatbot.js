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
        message: 'Welcome to onedrobe! How can I help you?',
        trigger: '2'
      },
      {
          id: '2',
          options: [
            {
                value: 1,
                label: '1. What is onedrobe?',
                trigger: 'question1'
            },
            {
                value: 2,
                label: '2. Can I buy through onedrobe',
                trigger: 'question2'
            },
            {
                value: 3,
                label: '3. Can anyone post a blog on #stylelog page?',
                trigger: 'question3'
            },
            {
                value: 4,
                label: 'I need help other than the ones in list.',
                trigger: 'no'
            }
        ],
      },
      {
        id: 'question1',
        message: 'Once drobe is an online platform where you can view fashion products from more than 50 brands. The “onedrobe” will guide you to make a rational consumption by allowing you to search for any fashion products, then by generating all the similar products from different brands in one place. The “onedrobe” not only facilitates online shopping experiences, but also assists the offline shopping by searching through other brands in real time.',
        trigger: 'next',
      },
      {
        id: 'question2',
        message: 'If you could buy different products from different brands with just one click, that would be very efficient and comfortable! However, we are working on the service right now. We will let you know once it\'s launched.',
        trigger: 'next',
      },
      {
        id: 'question3',
        message: 'For now, yes anyone can post their thoughts or experiecnes on fashion. However, soon only logged in users will be allowed to post.',
        trigger: 'next',
      },
      {
        id: 'next',
        message: 'Did you find the answer to what you were looking for?',
        trigger: 'yesorno'
      },
      {
        id: 'yesorno',
        options: [
            {
                value: 1,
                label: 'Yes! That was very helpful',
                trigger: 'yes'
            },
            {
                value: 2,
                label: 'Not yet!',
                trigger: 'no'
            }
        ]
      },
      {
          id: 'yes',
          message: 'It\'s good to hear. Have a great day!',
          end: true
      },
      {
          id: 'no',
          message: 'If you leave your email, one of our customer service representatives will reach out to you.',
          trigger: 'email'
      },
      {
          id: 'email',
          user: true,
          trigger: 'bye'
      },
      {
          id: 'bye',
          message: 'Your email address {previousValue} has been received. Thank you!',
          end: true
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