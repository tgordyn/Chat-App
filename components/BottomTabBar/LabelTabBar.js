import React from 'react';
import {Text, StyleSheet} from 'react-native';

const LabelTabBar = (props) => {
  return <Text style={{color: props.color, ...styles.texto}}>{props.children}</Text>
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: "Roboto-Bold", 
        fontSize: 13
    }
});

export default LabelTabBar;