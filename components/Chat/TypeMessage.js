import React from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import {Colors} from '../../utils/Colors';
import {Icon} from 'react-native-elements';

const TypeMessage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput placeholder="Type message" />
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
    backgroundColor: 'white',
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    borderTopColor: Colors.lightMode.grey,
    borderTopWidth: 0.5,
  },
  input: {
    width: '85%',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderColor: Colors.lightMode.grey,
    borderRadius: 20,
    height: 40,
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
