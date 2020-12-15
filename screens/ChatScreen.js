import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import io from 'socket.io-client';
import ChatHeader from '../components/Chat/ChatHeader';
import ChatItem from '../components/Chat/ChatItem';
import TypeMessage from '../components/Chat/TypeMessage.js';
import {useTheme} from '../utils/ThemeContext';

const ChatScreen = () => {
  const {colors, isDark} = useTheme();
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [user, setUser] = useState(null);
  const socket = io('ws://192.168.0.8:3000');
  socket.connect();

  const styles = {
    screen: {
      flex: 1,
      backgroundColor: colors.backgroundChat,
    },
  };

  const cleanUp = () => {
    if (!socket) {
      socket.disconnect();
    }
  };

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connect');
      setUser(socket.id);
    });
    return () => cleanUp();
  }, []);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setChatMessages([msg, ...chatMessages]);
      console.log('test');
    });
    return () => socket.off();
  }, [chatMessages]);

  const submitChatMessage = () => {
    socket.emit('chat message', {chatMessage, user});
    setChatMessage('');
  };
  const handleOnChange = (text) => {
    setChatMessage(text);
  };

  const chatMsgs = chatMessages.map((chatM, index) => (
    <ChatItem
      key={index + chatM.chatMessage}
      index={index}
      message={chatM}
      user={user}
    />
  ));

  return (
    <View style={styles.screen}>
      <ChatHeader />
      <ScrollView>{chatMsgs}</ScrollView>
      <TypeMessage
        submitChatMessage={submitChatMessage}
        handleOnChange={handleOnChange}
        chatMessage={chatMessage}
      />
    </View>
  );
};

export default ChatScreen;
