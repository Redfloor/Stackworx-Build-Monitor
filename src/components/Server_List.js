import React, { Component } from 'react';
import Server from './Server';
import Cors

export default class ServerList extends Component  {
  constructor(props) {
    super(props);

    this.state = { serverResponses: [] };
  }
    async ServerCalls() {
     //   //const res = await fetch('https://test.cognition-app.com/api/status', { mode: 'no-cors'};
      const serverListResponse = this.props.servers.map(async (server, index) => {
        const res = await fetch(server, {method: 'GET'}).then ((server) => {
           return (server);
         }).catch((err) => {
            return {
              status: 400
            };
        });
        //const output = <Server server={res.url} key={`${index}`} response={calls[`${index}`]} />
        const output = <Server server={server} response={res.status} />
       return output;
     });
     console.log(serverListResponse);
     return serverListResponse;
   }

   render() {
      const calls = this.ServerCalls();
      console.log(calls);
      //calls.map((server, index, response) => console.log("Server: " + server + "\nIndex: " + index + "\nResponse: " + response));

       const serverListHTML = this.props.servers.map((server, index) => <Server server={server} key={`${index}`} response={calls[`${index}`]} />)
     return (
       <ul className="server-list">
         {serverListHTML}

       </ul>
     );
   }
 }
