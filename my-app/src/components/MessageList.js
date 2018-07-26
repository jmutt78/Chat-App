import React, { Component } from "react";

class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
       newRoomName:" ",
    };
    this.roomsRef = this.props.firebase.database().ref("rooms");
      }


activeRoomMessages(activeRoom) {
  if (!activeRoom) { return; }
  this.setState({ activeRoomMessages: this.state.messages.filter( message => message.roomId === activeRoom.key ) }, () => this.scrollToBottom() );
}


componentDidMount() {
  console.log("MessageList component mounted");
  console.log(this.props.activeRoom);
  this.messagesRef.on("child_added", snapshot => {
    const message = snapshot.val();
    message.key = snapshot.key;
    this.setState({ messages: this.state.messages.concat(message) }, () => {
      this.activeRoomMessages(this.props.activeRoom);
    });
  });
}

  scrollToBottom() {
     this.bottomOfMessages.scrollIntoView();
     console.log("scrollToBottom called");
   }

render() {
  return (
    <main id="message-component">
      <h2 className="active-room">{this.state.activeRoom}</h2>
      <ul id="message-list">
        {this.state.activeRoomMessages.map(message => (
          <li key={message.key}>
            <section className="user-name">{message.name}</section>
            <section className="content">{message.content}</section>
            <section className="sentAt">{message.sentAt}</section>
          </li>
        ))}
        <div ref={thisDiv => (this.bottomOfMessages = thisDiv)} />
      </ul>
    </main>
  );
}
}
export default MessageList;
