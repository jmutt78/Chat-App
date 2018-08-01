import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as firebase from "firebase";
import RoomList from "./components/RoomList.js";
import MessageList from "./components/MessageList.js";
import User from "./components/User.js";

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
  constructor(props){
    super(props)

    this.state = {
      activeRoom: '',
       user: null
    };
    this.setUser = this.setUser.bind(this);
    this.activeRoom = this.activeRoom.bind(this);
  }

  activeRoom(room) {
    this.setState({ activeRoom: room });

}

setUser(user) {
  this.setState({ user: user })

}
  render() {
    const displayMessages = this.state.activeRoom;
    const currentUser = this.state.user === null ? 'Guest' : this.state.user.displayName;
    return (
      <div className="App">
      <User firebase={firebase} setUser={this.setUser} currentUser={currentUser} />

      <aside className="list-chat-rooms">
        <RoomList firebase ={firebase} activeRoom ={this.activeRoom.bind(this)} />
      </aside>
      <h3 className="active-chat-room">{this.state.activeRoom.name}
      </h3>

      { displayMessages ?

        <MessageList firebase = {firebase} activeRoom={this.state.activeRoom.key} /> : (null)
      }

      </div>
    );
  }
}
export default App;
