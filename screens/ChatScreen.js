import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
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
  return (
    <View style={styles.screen}>
      <ChatHeader />
      <ScrollView>
        {Chat.map((message, index) => {
          return (
            <ChatItem
              key={index}
              index={index}
              sent={message.sent}
              message={message.message}
            />
          );
        })}
      </ScrollView>
      <TypeMessage />
    </View>
  );
};

export default ChatScreen;
