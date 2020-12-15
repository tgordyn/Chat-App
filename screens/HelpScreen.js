import React, {useState} from 'react';
import {View} from 'react-native';
//import {List} from 'react-native-paper';

import ListSection from 'react-native-paper/lib/commonjs/components/List/ListSection';
import ListAccordion from 'react-native-paper/lib/commonjs/components/List/ListAccordion';
import ListItem from 'react-native-paper/lib/commonjs/components/List/ListItem';


import {Icon} from 'react-native-elements';
import {useTheme} from '../utils/ThemeContext';

const HelpScreen = (props) => {
  const [expandedUser, setExpandedUser] = useState(false);
  const [expandedIp, setExpandedIp] = useState(false);
  const [expandedPort, setExpandedPort] = useState(false);
  const {colors, isDark} = useTheme();

  const styles = {
    screen: {
      flex: 1,
      backgroundColor: colors.options,
    },
    styleSectionTitle: {
      fontFamily: 'Roboto-Bold',
      fontSize: 17,
      color: colors.font,
    },
    styleTitle: {
      fontFamily: 'Roboto',
      fontSize: 16,
      color: colors.font,
    },
    listItem: {
      color: colors.font,
      marginLeft: -30,
    },
    hr: {
      height: 0.5,
      width: '100%',
      backgroundColor: colors.font,
    },
  };

  return (
    <View style={styles.screen}>
      <ListSection
        title="Preguntas Frecuentes"
        titleStyle={{...styles.styleSectionTitle}}>
        <View style={styles.hr}></View>
        <ListAccordion
          expandedUser={expandedUser}
          onPress={() => setExpandedUser(!expandedUser)}
          title="Configuración de Usuario"
          titleStyle={{
            ...styles.styleTitle,
            color: expandedUser ? colors.blue : colors.font,
          }}
          left={(props) => (
            <Icon
              name="help-circle"
              type="ionicon"
              color={expandedUser ? colors.blue : colors.font}
              size={25}
            />
          )}>
          <ListItem
            title="Ingresar su nombre de usuario"
            titleStyle={{...styles.listItem, fontFamily: 'Roboto-Bold'}}
            description="La configuración admite campos alfa-numéricos"
            descriptionStyle={{...styles.listItem}}
          />
        </ListAccordion>
        <ListAccordion
          title="Configuración de IP"
          expandedUser={expandedIp}
          onPress={() => setExpandedIp(!expandedIp)}
          arrow={false}
          titleStyle={{
            ...styles.styleTitle,
            color: expandedIp ? colors.blue : colors.font,
          }}
          left={(props) => (
            <Icon
              name="help-circle"
              type="ionicon"
              color={expandedIp ? colors.blue : colors.font}
              size={25}
            />
          )}>
          <ListItem
            title="Ingresar número de IP"
            titleStyle={{...styles.listItem, fontFamily: 'Roboto-Bold'}}
            description="La configuración sólo admite campos numéricos"
            descriptionStyle={{...styles.listItem}}
          />
        </ListAccordion>
        <ListAccordion
          title="Configuración de Puerto"
          expandedPort={expandedPort}
          onPress={() => setExpandedPort(!expandedPort)}
          titleStyle={{
            ...styles.styleTitle,
            color: expandedPort ? colors.blue : colors.font,
          }}
          left={(props) => (
            <Icon
              name="help-circle"
              type="ionicon"
              color={expandedPort ? colors.blue : colors.font}
              size={25}
            />
          )}>
          <ListItem
            title="Ingresar número de Puerto"
            titleStyle={{...styles.listItem, fontFamily: 'Roboto-Bold'}}
            description="La configuración sólo admite campos numéricos"
            descriptionStyle={{...styles.listItem}}
          />
        </ListAccordion>
      </ListSection>
    </View>
  );
};

export default HelpScreen;
