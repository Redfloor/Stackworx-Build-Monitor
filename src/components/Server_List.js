import React, { Component } from 'react';
import Server from './Server';

export default class ServerList extends Component  {
  constructor(props) {
    super(props);

    this.state = { serverResponses: [] };
    this.forceObjects();
  }

    async ServerCalls() {
      const serverListResponse = await Promise.all(this.props.servers.map(async (server, index) => {
        try {const res = await fetch(server, {method: 'GET'})
          const output = {url: server, status: res.status, ok:res.ok };
          return output;
        } catch(err) {
          return { url: server, status: 400, ok:false };
        }
      }));
     this.setState({ serverResponses : serverListResponse });
   }
   forceObjects() {
     const tempArr = [];
     this.props.servers.forEach(server => {
       const stateObj = Object.assign({}, server)
       stateObj.url = server;
       stateObj.status = "loading";
       stateObj.ok = "unknown"
       tempArr.push(stateObj);
     })
     this.setState({serverResponses: tempArr})
   }

   componentWillReceiveProps() {
     this.forceObjects();
   }
   componentWillMount() {
     this.checkTimer = setInterval(this.ServerCalls(), 300000);
    }
    componentWillUnmount() {
      clearInterval(this.checkTimer);
    }
   render() {
     console.log("New: ", this.props.servers);
     const ServerListJSX = this.state.serverResponses.map((response, index) => {
         return <Server key={`${response.url}-${index}`} response={response.status} server={response.url} ok={response.ok}/>
     });
     return (
       <ul className="server-list">
          {ServerListJSX}
       </ul>
     );
   }
 }
