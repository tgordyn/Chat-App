import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from '../../utils/Colors';

const ChatHeader = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarLetters}>NU</Text>
      </View>
      <Text style={styles.name}>Nombre Usuario</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 65,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 30,
    alignItems: 'center',
    borderBottomColor: Colors.lightMode.grey,
    borderBottomWidth: 0.5,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    marginRight: 15,
  },
  avatarLetters: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
  },
  name: {
    fontSize: 17,
  },
});
export default ChatHeader;
