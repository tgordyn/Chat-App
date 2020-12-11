// import React from 'react';
// import {FlatList, View} from 'react-native';
// import io from "socket.io-client"
// import ChatItem from '../components/Chat/ChatItem';
// import ChatHeader from '../components/Chat/ChatHeader';
// import TypeMessage from '../components/Chat/TypeMessage';
// import {Chat} from '../utils/dummy-data';
// import {useTheme} from '../utils/ThemeContext';

// const ChatScreen = () => {
//   const {colors, isDark} = useTheme();

//   const styles = {
//     screen: {
//       flex: 1,
//       backgroundColor: colors.backgroundChat,
//     },
//   };

//   const ChatItems = (message) => {
//     return <ChatItem sent={message.item.sent} message={message.item.message} />;
//   };

//   return (
//     <View style={styles.screen}>
//       <ChatHeader />
//       <FlatList
//         data={Chat}
//         renderItem={ChatItems}
//         keyExtractor={(item) => item.index}
//       />
//       <TypeMessage />
//     </View>
//   );
// };

// export default ChatScreen;

// prueba componente funcional ////////////////////

// import React, { Component, useState, useEffect}  from "react";
// import { TextInput, FlatList, StyleSheet, Text, View } from "react-native";
// import io from "socket.io-client";
// import ChatHeader from '../components/Chat/ChatHeader';
// //import { useEffect, useState } from "react";


// const ChatScreen = ()=>{
//   const [chatMessage, setChatMessage]= useState("");
//   const [chatMessages, setChatMessages]= useState([]);
//   const socket = io("http://192.168.0.11:3000");




//   useEffect(()=>{
    
//     socket.on("chat message", msg=> {
//       setChatMessages([...chatMessages, msg])
//     })
//   }, []);

//   const submitChatMessage= ()=> {

    
//     socket.emit("chat message", chatMessage);
//     setChatMessage( "" );
//   }

//   const chatMsgs =  chatMessages.map(chatM => (
//     <Text key={chatM}>{chatM}</Text>
//   ))
//   console.log("array men", chatMessages)
  
//   return (
//     <View style={styles.container}>
//         <ChatHeader />
        
//         <TextInput
//           style={{ height: 40, borderWidth: 2, justifyContent:"flex-end" }}
//           autoCorrect={false}
//           value={chatMessage}
//           onSubmitEditing={() => submitChatMessage()}
//           onChangeText={chatMessage => {
//             setChatMessage( chatMessage );
//           }}
//         />
//                 {chatMsgs}
//       </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5FCFF"
//   },
// });
// export default ChatScreen;

///////////////////////// prueba componente de clase ////////////////////
import React, { Component, useState, useEffect}  from "react";
import { TextInput, FlatList, StyleSheet, Text, View } from "react-native";
import io from "socket.io-client";
import ChatHeader from '../components/Chat/ChatHeader';

import {load} from '../utils/AsyncStorage.js';

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
      chatMessages: [],
    };
  }

  componentDidMount() {
    
    this.socket = io("http://192.168.0.11:3000");
    this.socket.on("chat message", msg => {
      this.setState({ chatMessages: [...this.state.chatMessages, msg] });
    });
  }

  submitChatMessage() {
    this.socket.emit("chat message", this.state.chatMessage);
    this.setState({ chatMessage: "" });
  }

  render() {
    const chatMessages = this.state.chatMessages.map(chatMessage => (
      <Text key={chatMessage}>{chatMessage}</Text>
    ));
    console.log("mensajes", chatMessages)
    return (
      <View style={styles.container}>
        <ChatHeader />
        
        <TextInput
          style={{ height: 40, borderWidth: 2, justifyContent:"flex-end" }}
          autoCorrect={false}
          value={this.state.chatMessage}
          onSubmitEditing={() => this.submitChatMessage()}
          onChangeText={chatMessage => {
            this.setState({ chatMessage });
          }}
        />
        {chatMessages}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
});