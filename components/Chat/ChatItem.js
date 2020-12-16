import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '../../utils/ThemeContext';

const ChatItem = (props) => {
  const {colors, isDark} = useTheme();
  const styles = {
    bubble: {
      paddingVertical: 8,
      paddingHorizontal: 17,
      marginHorizontal: 20,
      marginVertical: 5,
      borderRadius: 20,
      maxWidth: '70%',
      width: 'auto',
    },
    sentContainer: {
      alignItems: 'flex-end',
    },
    receivedContainer: {
      alignItems: 'flex-start',
    },
    received: {
      alignItems: 'flex-start',
      backgroundColor: colors.backgroundReceived,
    },
    sent: {
      alignItems: 'flex-end',
      backgroundColor: colors.backgroundSent,
    },
    message: {
      fontSize: 14,
      color: colors.font,
    },
    username: {
      color: colors.grey,
      fontSize: 12,
      marginHorizontal: 40,
    },
    hour: {
      color: colors.font,
      opacity: 0.5,
      fontSize: 11,
      marginHorizontal: 35,
      marginBottom: 3,
    },
  };
  const bubbleStyle =
    props.message.user == props.user ? styles.sent : styles.received;
  return (
    <>
      <View
        style={
          props.message.user == props.user
            ? styles.sentContainer
            : styles.receivedContainer
        }>
        {/* <Text style={styles.username}>
          {props.message.user == props.user ? 'Me:' : 'Username:'}
        </Text> */}
        <View style={{...styles.bubble, ...bubbleStyle}}>
          <Text style={styles.message}>{props.message.chatMessage}</Text>
        </View>
        <Text style={styles.hour}>
          {props.message.chatMessage.length >= 15 &&
          props.message.user !== props.user
            ? `${'Nombre'} - `
            : props.message.chatMessage.length >= 10 &&
              props.message.user == props.user
            ? 'Me - '
            : null}
          {props.message.hour}
        </Text>
      </View>
    </>
  );
};

export default ChatItem;
