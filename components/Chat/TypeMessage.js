import React from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {Colors, DARKMODE} from '../../utils/Colors';
import {Icon} from 'react-native-elements';

const TypeMessage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor={
            DARKMODE ? Colors.darkMode.lightGrey : Colors.lightMode.grey
          }
          placeholder="Type message"
        />
      </View>
      <TouchableOpacity
        onPress={() => console.log('press')}
        style={styles.sendButton}>
        <Icon
          name="chevron-forward-outline"
          type="ionicon"
          color="white"
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: DARKMODE ? Colors.darkMode.grey : 'white',
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    borderTopColor: DARKMODE ? Colors.darkMode.darkGrey : Colors.lightMode.grey,
    borderTopWidth: 0.5,
  },
  inputText: {
    color: DARKMODE ? 'white' : Colors.lightMode.darkGrey,
  },
  input: {
    width: '85%',
    borderWidth: DARKMODE ? 0 : 1,
    paddingHorizontal: 15,
    borderColor: Colors.lightMode.grey,
    backgroundColor: DARKMODE ? Colors.lightMode.darkGrey : 'transparent',
    borderRadius: 20,
    height: 37,
  },
  sendButton: {
    backgroundColor: Colors.lightMode.blue,
    width: 35,
    height: 35,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TypeMessage;
