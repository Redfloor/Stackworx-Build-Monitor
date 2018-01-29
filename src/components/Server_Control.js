import React, { Component } from 'react';

export default class ServerControl extends Component  {
  constructor(props) {
    super(props);

    this.state = { serverName : "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.props.addNewServer(this.state.serverName);
    event.preventDefault();
  }

render() {
    return (
    <form onSubmit={this.handleSubmit}>
        <input
        type="text"
        placeholder="URL here"
        value={this.state.serverName}
        onChange={ event => this.setState({ serverName: event.target.value })} />
        <input
        type="submit"
        value="Add Server" />
    </form>
    )
  }

}
