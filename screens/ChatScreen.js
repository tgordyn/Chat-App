import React, {useState, useEffect, useRef} from 'react';
import {TextInput, FlatList, StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import io from 'socket.io-client';
import ChatHeader from '../components/Chat/ChatHeader';
import ChatItem from "../components/Chat/ChatItem";
import TypeMessage from "../components/Chat/TypeMessage.js";
import {Colors, DARKMODE} from '../utils/Colors';
import {useTheme} from '../utils/ThemeContext';

let socket;
const ChatScreen = () => {
  const {colors, isDark} = useTheme();
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [contador, setContador] = useState(0)
  const ENDPOINT = 'ws://192.168.0.11:3000';

  const styles = {
    screen: {
      flex: 1,
      backgroundColor: colors.backgroundChat,
    },
  };

  useEffect(() => {
    socket = io(ENDPOINT);
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on('chat message', (msg) => {
      //console.log(msg);
      console.log(contador + 1);
      setContador(contador + 1);
      //console.log(contador);
      setChatMessages([...chatMessages, msg]);
    });
    console.log('array', chatMessages);
  }, [chatMessages]);

  const submitChatMessage = () => {
    socket.emit('chat message', chatMessage);
    setChatMessage('');
  };

  const chatMsgs = chatMessages.map((chatM, index) => (
    // <Text key={index + chatM}>{chatM}</Text>
    <ChatItem 
    key={index + chatM}
    index={index}
    message={chatM}
    />
  ));

  return (
    <View style={styles.screen}>
      <ChatHeader />

      <TextInput
        style={{height: 40, borderWidth: 2, justifyContent: 'flex-end'}}
        autoCorrect={false}
        value={chatMessage}
        onSubmitEditing={() => submitChatMessage()}
        onChangeText={(chatMessage) => {
          setChatMessage(chatMessage);
        }}
      />
      <ScrollView>
       {chatMsgs}
      </ScrollView>
      <TypeMessage 
      // autoCorrect={false}
      // value={chatMessage}
      // onSubmitEditing={() => submitChatMessage()}
      // onChangeText={(chatMessage) => {
      //   setChatMessage(chatMessage);
      // }}
      />
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
//   screen: {
//     flex: 1,
//     backgroundColor: DARKMODE
//       ? Colors.darkMode.darkGrey
//       : Colors.lightMode.lightGrey,
//   },
// });
export default ChatScreen;

///////////////////////// prueba componente de clase ////////////////////
// import React, { Component, useState, useEffect}  from "react";
// import { TextInput, FlatList, StyleSheet, Text, View } from "react-native";
// import io from "socket.io-client";
// import ChatHeader from '../components/Chat/ChatHeader';

// //import {load} from '../utils/AsyncStorage.js';

// export default class ChatScreen extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       chatMessage: "",
//       chatMessages: [],
//     };
//   }

//   componentDidMount() {

//     this.socket = io("http://192.168.0.11:3000");
//     this.socket.on("chat message", msg => {
//       this.setState({ chatMessages: [...this.state.chatMessages, msg] });
//     });
//   }

//   submitChatMessage() {
//     this.socket.emit("chat message", this.state.chatMessage);
//     this.setState({ chatMessage: "" });
//   }

//   render() {
//     const chatMessages = this.state.chatMessages.map(chatMessage => (
//       <Text key={chatMessage}>{chatMessage}</Text>
//     ));
//     console.log("mensajes", chatMessages)
//     return (
//       <View style={styles.container}>
//         <ChatHeader />

//         <TextInput
//           style={{ height: 40, borderWidth: 2, justifyContent:"flex-end" }}
//           autoCorrect={false}
//           value={this.state.chatMessage}
//           onSubmitEditing={() => this.submitChatMessage()}
//           onChangeText={chatMessage => {
//             this.setState({ chatMessage });
//           }}
//         />
//         {chatMessages}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5FCFF"
//   },
// });
