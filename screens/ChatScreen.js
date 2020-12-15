import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import io from 'socket.io-client';
import ChatHeader from '../components/Chat/ChatHeader';
import ChatItem from '../components/Chat/ChatItem';
import TypeMessage from '../components/Chat/TypeMessage.js';
import {useTheme} from '../utils/ThemeContext';
// import {load} from '../utils/AsyncStorage';

const ChatScreen = () => {
  const {colors, isDark} = useTheme();
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [user, setUser] = useState(null);
  // const [data, setData] = useState(null);
  // const socket = io(data ? `ws://${data.ip}:${data.port}` : null);
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

  // useEffect(() => {
  //   load(setData);
  // }, [data]);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setChatMessages([...chatMessages, msg]);
    });
    return () => socket.off();
  }, [chatMessages]);

  const submitChatMessage = () => {
    var hours = new Date();
    var minutes =
      hours.getMinutes() <= 9 ? `0${hours.getMinutes()}` : hours.getMinutes();
    socket.emit('chat message', {
      chatMessage,
      user,
      hour: `${hours.getHours()}:${minutes}`,
    });
    setChatMessage('');
  };
  const handleOnChange = (text) => {
    setChatMessage(text);
  };

  const renderItem = ({item}) => <ChatItem message={item} user={user} />;

  return (
    <View style={styles.screen}>
      <ChatHeader />
      <FlatList
        data={chatMessages}
        renderItem={renderItem}
        keyExtractor={(data, index) => data + index}
      />
      <TypeMessage
        submitChatMessage={submitChatMessage}
        handleOnChange={handleOnChange}
        chatMessage={chatMessage}
      />
    </View>
  );
};

export default ChatScreen;
