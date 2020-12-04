import React from 'react';
import ChatNavigation from './navigation/ChatNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from './utils/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <ChatNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
