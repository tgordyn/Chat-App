import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {List} from 'react-native-paper';
import {Icon} from 'react-native-elements';

import {useTheme} from '@react-navigation/native';
//import {useTheme} from "../assets/ThemeProvider";
import {Colors, DARKMODE} from '../utils/Colors';

const HelpScreen = (props) => {
  const [expandedUser, setExpandedUser] = useState(false);
  const [expandedIp, setExpandedIp] = useState(false);
  const [expandedPort, setExpandedPort] = useState(false);
  const {children} = props;
  //const {colors, isDark} = useTheme();
  
  return (
    
    <List.Section title="Preguntas Frecuentes" titleStyle={styles.styleSectionTitle}>
      <View style={styles.hr}></View>
      <List.Accordion
        expandedUser={expandedUser}
        onPress={() => setExpandedUser(!expandedUser)}
        title="Configuración de Usuario"
        titleStyle={styles.styleTitle}
        theme={{colors: {primary: '#4595F4'}}}
        left={(props) => (
          <Icon
            name="help-circle"
            type="ionicon"
            color={expandedUser ? '#4595F4' : '#B1B1B1'}
            size={35}
          />
        )}>
        <List.Item
          title="Ingresar su nombre de usuario"
          description="La configuración admite campos alfa-numéricos"
        />
      </List.Accordion>
      <List.Accordion
        title="Configuración de IP"
        expandedUser={expandedIp}
        onPress={() => setExpandedIp(!expandedIp)}
        titleStyle={styles.styleTitle}
        theme={{colors: {primary: '#4595F4'}}}
        left={(props) => (
          <Icon
            name="help-circle"
            type="ionicon"
            color={expandedIp ? '#4595F4' : '#B1B1B1'}
            size={35}
          />
        )}>
        <List.Item
          title="Ingresar número de IP"
          description="La configuración sólo admite campos numéricos"
        />
      </List.Accordion>
      <List.Accordion
        title="Configuración de Puerto"
        expandedPort={expandedPort}
        onPress={() => setExpandedPort(!expandedPort)}
        titleStyle={styles.styleTitle}
        theme={{colors: {primary: '#4595F4'}}}
        left={(props) => (
          <Icon
            name="help-circle"
            type="ionicon"
            color={expandedPort ? '#4595F4' : '#B1B1B1'}
            size={35}
          />
        )}>
        <List.Item
          title="Ingresar número de Puerto"
          description="La configuración sólo admite campos numéricos"
        />
      </List.Accordion>
    </List.Section>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleSectionTitle: {
    fontFamily: "Roboto", 
    fontSize:22
  },
  styleTitle: {
    fontFamily: "Roboto", 
    fontSize:20
  },
  hr: {
    height: 0.5,
    width: '100%',
    backgroundColor: Colors.lightMode.grey
  },
});
export default HelpScreen;
