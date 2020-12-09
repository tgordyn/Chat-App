import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '../../utils/ThemeContext';

const ChatItem = (props) => {
  const {colors, isDark} = useTheme();
  const styles = {
    bubble: {
      paddingVertical: 8,
      paddingHorizontal: 20,
      marginHorizontal: 20,
      marginVertical: 5,
      borderRadius: 15,
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
  };
  const bubbleStyle = props.sent ? styles.sent : styles.received;
  return (
    <View style={props.sent ? styles.sentContainer : styles.receivedContainer}>
      <View style={{...styles.bubble, ...bubbleStyle}}>
        <Text style={styles.message}>{props.message}</Text>
      </View>
    </View>
  );
};

export default ChatItem;
