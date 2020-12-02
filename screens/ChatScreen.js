import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import ChatItem from '../components/Chat/ChatItem';
import ChatHeader from '../components/Chat/ChatHeader';
import TypeMessage from '../components/Chat/TypeMessage';
import {Colors} from '../utils/Colors';
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
    backgroundColor: Colors.lightMode.lightGrey,
  },
});

export default ChatScreen;
