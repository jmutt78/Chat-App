import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            message: {
                username: " ",
                content: " ",
                roomId: " ",
                sentAt: this.props.firebase.database.ServerValue.TIMESTAMP
            }
        };

        this.messagesRef = this.props.firebase.database().ref('messages');
    }

    componentDidMount () {
        this.messagesRef.on('child_added', snapshot => {
            const message = snapshot.val();
            message.key = snapshot.key;
            this.setState({ messages: this.state.messages.concat(message) })
        });
    }

    render () {
        return (
            <section className="message-list">
                <ul>
                    { this.state.messages.map ( (message, index) => {
                      console.log(this.props.activeRoom);
                        console.log(message.roomId);
                        if (this.props.activeRoom && this.props.activeRoom === message.roomId) {
                            return <li key={index}>{message.username}: {message.content} {message.sentAt}</li>
                      }
                    })}
                </ul>
            </section>
        );
    }

}

export default MessageList;
