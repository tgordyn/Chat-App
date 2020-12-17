import AsyncStorage from '@react-native-community/async-storage';

/**
 * Save the log in (name,ip,port,theme) into a json
 * @param  {String} name The username in the log in screen
 * @param  {String} ip The ip in the log in screen
 * @param  {Number} port The port in the log in screen
 * @param  {Boolean} theme The config for the dark and ligh mode
 * This create a Json and can be loaded with the load(setter) function
 */

export const setIp = async (ip) => {
  try {
    await AsyncStorage.setItem('ip', ip);
  } catch (err) {
    alert(err);
  }
};

export const setPort = async (port) => {
  try {
    await AsyncStorage.setItem('port', port);
  } catch (err) {
    alert(err);
  }
};

export const setName = async (name) => {
  try {
    await AsyncStorage.setItem('name', name);
  } catch (err) {
    alert(err);
  }
};

export const setTheme = async (theme) => {
  try {
    await AsyncStorage.setItem('theme', theme);
  } catch (err) {
    alert(err);
  }
};

export const getIp = async (setter) => {
  try {
    setter(await AsyncStorage.getItem('ip'));
  } catch (err) {
    alert(err);
  }
};

export const getPort = async (setter) => {
  try {
    setter(await AsyncStorage.getItem('port'));
  } catch (err) {
    alert(err);
  }
};

export const getName = async (setter) => {
  try {
    setter(await AsyncStorage.getItem('name'));
  } catch (err) {
    alert(err);
  }
};

export const getTheme = async (setter) => {
  try {
    setter(await AsyncStorage.getItem('theme'));
  } catch (err) {
    alert(err);
  }
};
