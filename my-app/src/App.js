import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as firebase from "firebase";
import RoomList from "./components/RoomList.js";
import MessageList from "./components/MessageList.js";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCggDmX5xxGObHIXcl5qUukrvS54Nl5IAM",
  authDomain: "bloc-chat-7eb30.firebaseapp.com",
  databaseURL: "https://bloc-chat-7eb30.firebaseio.com",
  projectId: "bloc-chat-7eb30",
  storageBucket: "bloc-chat-7eb30.appspot.com",
  messagingSenderId: "462192422440"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRoom: " "
    }

    this.setActiveRoom = this.setActiveRoom.bind(this);

  }

  setActiveRoom (room) {
    this.setState(
      {
        activeRoom: room
      }
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Bloc Chat</h1>
        <h2>Available Rooms:</h2>
        <RoomList
          firebase= { firebase }
          setActiveRoom={ this.setActiveRoom }
        />
        <MessageList
          firebase= { firebase }
          activeRoom= { this.state.activeRoom }
          messages= { this.state.messages }
        />
      </div>
    );
  }
}

export default App;
