import React from 'react';
import {FlatList, View} from 'react-native';
import ChatItem from '../components/Chat/ChatItem';
import ChatHeader from '../components/Chat/ChatHeader';
import TypeMessage from '../components/Chat/TypeMessage';
import {Chat} from '../utils/dummy-data';
import {useTheme} from '../utils/ThemeContext';

const ChatScreen = () => {
  const {colors, isDark} = useTheme();

  const styles = {
    screen: {
      flex: 1,
      backgroundColor: colors.backgroundChat,
    },
  };

  const ChatItems = (message) => {
    return <ChatItem sent={message.item.sent} message={message.item.message} />;
  };

  return (
    <View style={styles.screen}>
      <ChatHeader />
      <FlatList
        data={Chat}
        renderItem={ChatItems}
        keyExtractor={(item) => item.index}
      />
      <TypeMessage />
    </View>
  );
};

export default ChatScreen;
