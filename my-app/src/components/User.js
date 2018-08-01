import React, { Component } from 'react';

class User extends Component {
  constructor(props){
    super(props)

    this.userIn = this.userIn.bind(this);
    this.userOut = this.userOut.bind(this);

  }

  userIn() {
    const provider = new this.props.firebase.auth.GoogleAuthProvider();
    this.props.firebase.auth().signInWithPopup( provider ).then((result) => {
      const user = result.user;
      this.props.setUser(user);
    });
  }

  userOut() {
    this.props.firebase.auth().signOut().then(() => {
      this.props.setUser(null);
    });
  }

  componentDidMount () {
    this.props.firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user);
    });
  }

  render() {
    return(
      <section>
      <h3> Welcome, {this.props.currentUser}! </h3>


        <button className="login-button" onClick={this.userIn}>Log In</button>
        <button className="logout-button" onClick={this.userOut}>Log Out</button>
      </section>
    );
  }
}

export default User;
