import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from '../../utils/Colors';
import {Chat} from '../../utils/dummy-data';

const ChatItem = (props) => {
  return (
    <View style={props.sent ? styles.sentContainer : styles.receivedContainer}>
      <View style={props.sent ? styles.sent : styles.received}>
        <Text style={styles.message}>{props.message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bubble: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 15,
  },
  sentContainer: {
    alignItems: 'flex-end',
  },
  receivedContainer: {
    alignItems: 'flex-start',
  },
  received: {
    backgroundColor: 'white',

    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 15,
    maxWidth: '70%',
    width: 'auto',
    alignItems: 'flex-start',
  },
  sent: {
    backgroundColor: Colors.lightMode.lightBlue,

    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 15,
    maxWidth: '70%',
    width: 'auto',
    alignItems: 'flex-end',
  },
  message: {
    fontSize: 15,
    color: Colors.lightMode.darkGrey,
    fontFamily: "Roboto-Bold"
  },
});
export default ChatItem;
