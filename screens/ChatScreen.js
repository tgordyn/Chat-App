import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ChatItem from '../components/Chat/ChatItem';
import ChatHeader from '../components/Chat/ChatHeader';
import TypeMessage from '../components/Chat/TypeMessage';
import {Colors, DARKMODE} from '../utils/Colors';
import {Chat} from '../utils/dummy-data';

const ChatScreen = () => {
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: DARKMODE
      ? Colors.darkMode.darkGrey
      : Colors.lightMode.lightGrey,
  },
});

export default ChatScreen;
