import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as firebase from "firebase";
import RoomList from "./components/RoomList.js";

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
      null: null,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mutt Chat</h1>
        </header>
        <aside id="sidebar">
          <div id="logo" />
          <div id="slogan">Chat Rooms</div>
          <RoomList firebase={firebase} />
          <nav />
        </aside>
        <span id="main">Main goes here</span>
      </div>
    );
  }
}

export default App;
