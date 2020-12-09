import AsyncStorage from '@react-native-community/async-storage';

/**
 * Save the log in (name,ip,port,theme) into a json
 * @param  {String} name The username in the log in screen
 * @param  {String} ip The ip in the log in screen
 * @param  {Number} port The port in the log in screen
 * @param  {Boolean} theme The config for the dark and ligh mode
 * This create a Json and can be loaded with the load(setter) function
 */
export const save = async (name = '', ip = '', port = '', theme = '') => {
  let user = {};
  user = {
    name: name,
    ip: ip,
    port: port,
    theme: theme,
  };

  try {
    await AsyncStorage.setItem('User', JSON.stringify(user));
  } catch (err) {
    alert(err);
  }
};

/**
 * Load the json with all the config (name,ip,port,theme)
 * @param  {SetterState} setter The State setter of the hook,
 * Example to use the Object: {enteredUsername.name} to use the name
 */
export const load = async (setter) => {
  try {
    let userJson = await AsyncStorage.getItem('User');
    if (userJson !== null) {
      setter(JSON.parse(userJson));
    }
  } catch (err) {
    alert(err);
  }
};
