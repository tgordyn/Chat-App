import React, {useState, useEffect, useRef} from 'react';
import {View, FlatList} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import ChatHeader from '../components/Chat/ChatHeader';
import ChatItem from '../components/Chat/ChatItem';
import TypeMessage from '../components/Chat/TypeMessage.js';
import {getIp, getPort, getName} from '../utils/AsyncStorage.js';
import {useTheme} from '../utils/ThemeContext';
import io from 'socket.io-client';

const ChatScreen = () => {
  const {colors, isDark} = useTheme();
  const [ip, setLocalIp] = useState('');
  const [port, setLocalPort] = useState('');
  const [name, setLocalName] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [user, setUser] = useState(null);
  const socket = useRef(null);

  const styles = {
    screen: {
      flex: 1,
      backgroundColor: colors.backgroundChat,
    },
  };

  const cleanUp = () => {
    if (!socket) {
      socket.current.disconnect();
    }
  };

  useEffect(() => {
    socket.current = io(`ws://${ip}:${port}`);
    socket.current.connect();

    socket.current.on('connect', () => {
      console.log('Connect');
      setUser(socket.current.id);
    });
    return () => cleanUp();
  }, [ip, port]);

  useEffect(() => {
    socket.current.on('chat message', (msg) => {
      setChatMessages([...chatMessages, msg]);
    });
    return () => socket.current.off();
  }, [chatMessages]);

  useFocusEffect(
    React.useCallback(() => {
      getIp(setLocalIp);
      getPort(setLocalPort);
      getName(setLocalName);
    }, []),
  );

  const submitChatMessage = () => {
    var hours = new Date();
    var minutes =
      hours.getMinutes() <= 9 ? `0${hours.getMinutes()}` : hours.getMinutes();
    socket.current.emit('chat message', {
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
      <ChatHeader name={name} />
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
