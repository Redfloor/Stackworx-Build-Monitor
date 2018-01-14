import React, { Component } from 'react';
import Server from './Server';

export default class ServerList extends Component  {
  constructor(props) {
    super(props);

    this.state = { serverResponses: [] };
  }
    async ServerCalls() {
     //   //const res = await fetch('https://test.cognition-app.com/api/status', { mode: 'no-cors'};
      const serverListResponse = this.props.servers.map(async (server, index) => {
       const res = await fetch(server);
       const output = <Server server={server} key={`${index}`} response={res} />;
       // console.log(output);
       return output;
     });
     return await serverListResponse;
   }

   render() {
      const calls = this.ServerCalls();
      console.log(calls)
       const serverListHTML = this.props.servers.map((server, index) => <Server server={server} key={`${index}`} response={calls[`${index}`]} />)
     return (
       <ul className="server-list">
         {serverListHTML}

       </ul>
     );
   }
 }
