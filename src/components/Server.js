import React, { Component } from 'react';

export default class Server extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

 render() {
    //HERE IS THE GOLDEN SPOT
  //  console.log(this.props);
    const {response, server} = this.props;
    return (
      <li className="server-item">
        <p>{server}</p>
        <p>Status: <span className={serverItemColor(response)}>{response}</span></p>
        <a href={server} target="_blank">Visit</a>
      </li>
    );
  }
}

const serverItemColor = (response) => {
  switch(response) {
     case 201:
     case 202:
     case 203:
     case 200: {  //ok
        return "status-text green";
     }
     case 302:
     case 303:
     case 204:
     case 205:
     case 206:
     case 301: {  //redirected or no content
        return "status-text orange";
     }
     case 207:
     case 300:
     case 0:
     case "loading": {  //unspecified error
        return "status-text grey";
     }
     default: { //fail
        return "status-text red";
     }
   }
 }
