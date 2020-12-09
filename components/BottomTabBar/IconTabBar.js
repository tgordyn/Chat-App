import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

const IconTabBar = (props) => {
 
  return (
    <Icon
    name={props.name}
    type="ionicon"
    color={props.color}
    size={30}
  />
  )
}

const styles = StyleSheet.create({});

export default IconTabBar;